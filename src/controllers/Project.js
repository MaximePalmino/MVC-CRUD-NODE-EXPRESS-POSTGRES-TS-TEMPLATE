// const {queryListOfUsers}  = require('../services/ProjectTable')
import {queryListOfUsers} from '../services/ProjectTable.js'


export const getAllUsers = (req, res) => {
    try {
       const allUsers = queryListOfUsers();
        console.log(res.json(allUsers))
        res.json(queryListOfUsers)
    } catch (error) {
        console.log(error.message)
    }
}
