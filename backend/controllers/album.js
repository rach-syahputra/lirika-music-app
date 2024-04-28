import createConnection from "../connect.js"

export const getTopAlbums = async (req, res) => {
  try {
    // get top 20 albums along with the albumName, albumGenre, artistName and image based on playedCount
    //
    const query = `
    SELECT  al.albumId,
            al.albumName,
            al.image,
            a.artistName,
            SUM(s.playedCount) AS totalPlayed FROM songs s 
    INNER JOIN albums al ON s.albumId = al.albumId
    INNER JOIN artists a ON s.artistId = a.artistId
    GROUP BY al.albumId
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