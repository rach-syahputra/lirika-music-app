import mysql from "mysql2/promise"

const createConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "music"
    })
    console.log('MySQL is CONNNECTED')
    return connection
  } catch (err) {
    console.log('ERROR connecting to MySQL');
  }
}

export default createConnection