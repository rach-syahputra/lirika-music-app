import mysql from "mysql2/promise"

const createConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "music"
    })
    console.log('MySQL database is connected')
    return connection
  } catch (err) {
    console.log('Error connecting to MySQL');
  }
}

export default createConnection