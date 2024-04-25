// findSearchAndTopResults //
//
export const findSearchAndTopResults = (data, searchQuery) => {

  // lowered the search query to avoid case-sensitive characters
  const searchQ = searchQuery.toLowerCase()

  // Separate filtering for each data type with beginning matches and other matches (non-beginning matches)
  const searchResults = sortAndFilterData(data, searchQ)

  // Find the top item (artist, album, or song partially matching the search term)
  const topResult = searchResults.find(item =>
    (item.type === 'artist' || item.type === 'album' || item.type === 'song') &&
    (item.artist_name && item.artist_name.toLowerCase().includes(searchQ) ||
      item.album_name && item.album_name.toLowerCase().includes(searchQ) ||
      item.song_title && item.song_title.toLowerCase().includes(searchQ))
  )

  // Calculate data based on top item type
  let totalPlayedCount = 0
  if (topResult) {
    if (topResult.type === 'song') {
      totalPlayedCount = topResult.played_count // Directly return playedCount for song
    } else {
      totalPlayedCount = calculatetotalPlayedCount(data, topResult)
    }
  }

  return {
    topResult: {
      ...topResult,
      totalPlayedCount
    },
    searchResults
  }
}

// Helper function to calculate total played count for related songs based on top item type
//
function calculatetotalPlayedCount(data, topItem) {
  return data.filter(item => {
    if (topItem.type === 'artist') {
      return item.artist_name && item.artist_name.toLowerCase() === topItem.artist_name.toLowerCase();
    } else if (topItem.type === 'album') {
      return item.album_name && item.album_name.toLowerCase() === topItem.album_name.toLowerCase();
    }
    return false
  }).reduce((sum, item) => sum + item.played_count, 0);
}

// Helper function to separate filtering for each data type with beginning matches and other matches (non-beginning matches)
//
function sortAndFilterData(data, searchQ) {
  // Separate filtering for each data type with beginning matches
  const beginningArtists = data.filter(item => item.artist_name
    && item.artist_name.toLowerCase().startsWith(searchQ))

  const beginningSongs = data.filter(item => item.song_title
    && item.song_title.toLowerCase().startsWith(searchQ))

  const beginningAlbums = data.filter(item => item.album_name
    && item.album_name.toLowerCase().startsWith(searchQ))

  // Separate filtering for each data type with other matches or non-beginning matches
  const otherArtists = data.filter(item => !beginningArtists.includes(item)
    && item.artist_name
    && item.artist_name.toLowerCase().includes(searchQ))

  const otherSongs = data.filter(item => !beginningSongs.includes(item)
    && item.song_title
    && item.song_title.toLowerCase().includes(searchQ))

  const otherAlbums = data.filter(item => !beginningAlbums.includes(item)
    && item.album_name
    && item.album_name.toLowerCase().includes(searchQ))

  //  Calculating score based on data type and match frequency
  const calculateScore = (item) => {
    let score = 0;
    if (item.artist_name) {
      score += 3
      score += item.artist_name.toLowerCase().split(searchQ).length - 1; // Bonus for multiple matches within artist name
    } else if (item.song_title) {
      score += 2
      score += item.song_title.toLowerCase().split(searchQ).length - 1; // Bonus for multiple matches within song title
    } else if (item.album_name) {
      score += 1
      score += item.album_name.toLowerCase().split(searchQ).length - 1; // Bonus for multiple matches within album name
    }
    return score
  }

  // Sort each data type group (artist, song, album) by calculated score (descending)
  const sortedBeginningArtists = beginningArtists.sort((a, b) => calculateScore(b) - calculateScore(a));
  const sortedBeginningSongs = beginningSongs.sort((a, b) => calculateScore(b) - calculateScore(a));
  const sortedBeginningAlbums = beginningAlbums.sort((a, b) => calculateScore(b) - calculateScore(a));

  const sortedOtherArtists = otherArtists.sort((a, b) => calculateScore(b) - calculateScore(a));
  const sortedOtherSongs = otherSongs.sort((a, b) => calculateScore(b) - calculateScore(a));
  const sortedOtherAlbums = otherAlbums.sort((a, b) => calculateScore(b) - calculateScore(a));

  // Merge sorted results (prioritizing beginning matches)
  const mergedArtists = [...sortedBeginningArtists, ...sortedOtherArtists];
  const mergedSongs = [...sortedBeginningSongs, ...sortedOtherSongs];
  const mergedAlbums = [...sortedBeginningAlbums, ...sortedOtherAlbums];

  // Combine all merged data types (artist, song, album)
  const mergedResults = [
    ...mergedArtists.map(item => ({ ...item, type: 'artist' })),
    ...mergedSongs.map(item => ({ ...item, type: 'song' })),
    ...mergedAlbums.map(item => ({ ...item, type: 'album' })),
  ];

  return mergedResults
}
//
//

// separateSearchResultsDataByType
//
export const separateSearchResultsDataByType = (data) => {

  // filter searchResults by type (artist, song, album)
  const artistResults = data.filter(item => item.type === 'artist')
  const songResults = data.filter(item => item.type === 'song')
  const albumResults = data.filter(item => item.type === 'album')

  // create new array that only contains necessary properties for each type (artist, song, album)
  const artistData = artistResults.map(item => ({
    artistId: item.artistId,
    artistName: item.artist_name,
    image: item.artist_image,
    type: item.type
  }))
  const songData = songResults.map(item => ({
    songId: item.songId,
    songTitle: item.song_title,
    albumImage: item.album_image,
    artistName: item.artist_name,
    albumName: item.album_name,
    type: item.type
  }))
  const albumData = albumResults.map(item => ({
    albumId: item.albumId,
    albumName: item.album_name,
    albumImage: item.album_image,
    type: item.type
  }))

  // filter out duplicate artist, song, album based on artistId, songId, albumId
  const filteredArtists = [...new Map(artistData.filter(item => item.type === 'artist').map(item => [item.artistId, item])).values()];
  const filteredSongs = [...new Map(songData.filter(item => item.type === 'song').map(item => [item.songId, item])).values()];
  const filteredAlbums = [...new Map(albumData.filter(item => item.type === 'album').map(item => [item.albumId, item])).values()];


  const searchResults = {
    artists: filteredArtists,
    songs: filteredSongs,
    albums: filteredAlbums
  }

  return searchResults
}
//
//
