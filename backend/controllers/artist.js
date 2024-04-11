import createConnection from "../connect.js"

export const getTopArtists = async (req, res) => {
  try {
    // get top 10 artist along with the country and image based on playedCount
    //
    const query = `SELECT artist.artistId, artist.artistName, artist.country, artist.image, SUM(songs.playedCount) AS totalPlayed FROM songs 
    INNER JOIN artist ON songs.artistId = artist.artistId
    GROUP BY artist.artistId
    ORDER BY totalPlayed DESC
    LIMIT 10`

    const connection = await createConnection()
    const [artist] = await connection.execute(query)

    res.status(200).json(artist)
  } catch (err) {
    res.status(500).json({ message: 'failed to get artist data' })
  }
}