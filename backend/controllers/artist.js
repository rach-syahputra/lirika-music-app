import createConnection from "../connect.js"

export const getTopArtists = async (req, res) => {
  try {
    // get top 10 artist along with the country and image based on playedCount
    //
    const query = `SELECT artists.artistId, artists.artistName, artists.country, artists.image, SUM(songs.playedCount) AS totalPlayed FROM songs 
    INNER JOIN artists ON songs.artistId = artists.artistId
    GROUP BY artists.artistId
    ORDER BY totalPlayed DESC
    LIMIT 10`

    const connection = await createConnection()
    const [artist] = await connection.execute(query)

    res.status(200).json(artist)
  } catch (err) {
    res.status(500).json({ message: 'failed to get artist data' })
  }
}