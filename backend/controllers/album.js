import createConnection from "../connect.js"

export const getTopAlbums = async (req, res) => {
  try {
    // get top 20 albums along with the albumName, albumGenre, artistName and image based on playedCount
    //
    const query = `
    SELECT  album.albumId,
            album.albumName,
            songs.image,
            artist.artistName,
            SUM(songs.playedCount) AS totalPlayed FROM songs 
    INNER JOIN album ON songs.albumId = album.albumId
    INNER JOIN artist ON songs.artistId = artist.artistId
    GROUP BY album.albumId
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