import {pool} from "../config/config.js"

export const queryListOfUsers = () => {
    pool.query("SELECT * FROM todo")
} 

// module.exports = queryListOfUsers()