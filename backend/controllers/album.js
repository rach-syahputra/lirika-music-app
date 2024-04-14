import createConnection from "../connect.js"

export const getTopAlbums = async (req, res) => {
  try {
    // get top 20 albums along with the albumName, albumGenre, artistName and image based on playedCount
    //
    const query = `
    SELECT  albums.albumId,
            albums.albumName,
            songs.image,
            artists.artistName,
            SUM(songs.playedCount) AS totalPlayed FROM songs 
    INNER JOIN albums ON songs.albumId = albums.albumId
    INNER JOIN artists ON songs.artistId = artists.artistId
    GROUP BY albums.albumId
    ORDER BY totalPlayed DESC
    LIMIT 20
    `

    const connection = await createConnection()
    const [albums] = await connection.execute(query)

    res.status(200).json(albums)
  } catch (err) {
    res.status(500).json({ message: 'failed to get album data' })
  }
}