import createConnection from "../connect.js"

export const getSongs = async (req, res) => {
  try {
    const query = `
    SELECT * FROM songs
    ORDER BY playedCount DESC
    `
    const connection = await createConnection()
    const [songs] = await connection.execute(query)

    res.status(200).json(songs)
  } catch (err) {
    res.status(500).json({ message: 'failed to get songs data' })
  }
}

export const getSong = async (req, res) => {
  try {
    const songId = req.params.songId
    // const query = "SELECT * FROM songs WHERE songId = ?"
    const query = `
    SELECT s.*, al.albumName, al.image
    FROM songs s
    INNER JOIN albums al ON s.albumId = al.albumId
    WHERE songId = ?
    `
    const connection = await createConnection()
    const [song] = await connection.execute(query, [songId])

    res.status(200).json(song[0])
  } catch (err) {
    res.status(500).json({ message: 'failed to get songs data' })
  }
}

export const getTopSongs = async (req, res) => {
  try {
    const query = `
    SELECT s.*, al.image
    FROM songs s
    INNER JOIN albums al ON s.albumId = al.albumId
    ORDER BY s.playedCount DESC
    LIMIT 10
    `

    const connection = await createConnection()
    const [songs] = await connection.execute(query)

    res.status(200).json(songs)
  } catch (err) {
    res.status(500).json({ message: 'failed to get song data' })
  }
}