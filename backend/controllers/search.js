import createConnection from "../connect.js";
import findSearchResults from "../utils/search.js";

export const getSearchResult = async (req, res) => {
  try {
    const query = `
    SELECT
      s.songId,
      s.playedCount AS played_count,
      s.title AS song_title,
      a.artistId,
      a.artistName AS artist_name,
      al.albumId,
      al.albumName AS album_name
    FROM songs s
    LEFT JOIN artists a ON s.artistId = a.artistId
    LEFT JOIN albums al ON s.albumId = al.albumId
    WHERE LOWER(s.title) LIKE LOWER(CONCAT('%', ?, '%'))
    OR LOWER(a.artistName) LIKE LOWER(CONCAT('%', ?, '%'))
    OR LOWER(al.albumName) LIKE LOWER(CONCAT('%', ?, '%'));
    `

    const searchQuery = req.query.q

    const connection = await createConnection()
    const [searches] = await connection.execute(query, [searchQuery, searchQuery, searchQuery])

    // Find the search result and top result based on search query
    const searchResults = findSearchResults(searches, searchQuery)

    res.status(200).json(searchResults)
  } catch (err) {
    res.status(500).json({ message: 'failed to get data' })
  }
}