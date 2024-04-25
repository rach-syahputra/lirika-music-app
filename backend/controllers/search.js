import createConnection from "../connect.js";
import { findSearchAndTopResults, separateSearchResultsDataByType } from "../utils/search.js";

export const getSearch = async (req, res) => {
  try {
    const query = `
    SELECT
      s.songId,
      s.playedCount AS played_count,
      s.title AS song_title,
      s.duration,
      a.artistId,
      a.artistName AS artist_name,
      a.image AS artist_image,
      al.albumId,
      al.image AS album_image,
      al.albumName AS album_name
    FROM songs s
    LEFT JOIN artists a ON s.artistId = a.artistId
    LEFT JOIN albums al ON s.albumId = al.albumId
    WHERE LOWER(s.title) LIKE LOWER(CONCAT('%', ?, '%'))
    OR LOWER(a.artistName) LIKE LOWER(CONCAT('%', ?, '%'))
    OR LOWER(al.albumName) LIKE LOWER(CONCAT('%', ?, '%'));
    `

    const searchQuery = req.query.q

    // if searchQuery string is empty, returns empty array or no data
    if (!searchQuery) {
      return false
    }

    // if searchQuery string exists, run the sql synthax
    const connection = await createConnection()
    const [searches] = await connection.execute(query, [searchQuery, searchQuery, searchQuery])

    // Find the search result and top result based on search query
    const searchAndTopResults = findSearchAndTopResults(searches, searchQuery)

    // Retrieve the searchResults object
    const searchResults = searchAndTopResults.searchResults

    // Separate the search results data by type (artist, song, album)
    const separatedSearchResults = separateSearchResultsDataByType(searchResults)


    // Combine the separatedSearchResult and topResult
    const results = {
      topResult: searchAndTopResults.topResult,
      searchResults: separatedSearchResults
    }

    return results
  } catch (err) {
    return { message: 'getSearch error' }
  }
}

export const getSearchResult = async (req, res) => {
  try {
    // retrieve result data from getSearch
    const results = await getSearch(req, res)

    res.status(200).json(results)
  } catch (err) {
    res.status(500).json({ message: 'failed to get data' })

  }
}

export const getSuggestions = async (req, res) => {
  try {
    // retrieve result data from getSearch
    const results = await getSearch(req, res)


    if (results) { // if suggestions are existing
      // slice the total amount of data
      const artists = results.searchResults.artists.slice(0, 3)
      const songs = results.searchResults.songs.slice(0, 3)
      const albums = results.searchResults.albums.slice(0, 1)

      // lower casing the data
      artists.forEach(artist => {
        artist.artistName = artist.artistName.toLowerCase()
      })
      songs.forEach(song => {
        song.songTitle = song.songTitle.toLowerCase()
      })
      albums.forEach(album => {
        album.albumName = album.albumName.toLowerCase()
      })

      const suggestions = {
        artists,
        songs,
        albums
      }
      res.status(200).json(suggestions)
    } else { // if there is no suggestions
      res.status(200).json([])
    }
  } catch (err) {
    res.status(500).json({ message: 'failed to get suggestions' })
  }
}