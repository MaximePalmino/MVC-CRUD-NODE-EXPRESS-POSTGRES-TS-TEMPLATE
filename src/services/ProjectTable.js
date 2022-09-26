
const pool = require("../config/config")

const queryListOfUsers = async() => {
    await pool.query("SELECT * FROM todo")
} 

module.exports = queryListOfUsers()