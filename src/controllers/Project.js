const {queryListOfUsers}  = require('../services/ProjectTable')

 const getAllUsers = async(req, res) => {
    try {
        console.log(queryListOfUsers)
       await queryListOfUsers;
        res.json(getAllUsers.rows)
    } catch (error) {
        console.log(error.message)
    }

}

module.exports = getAllUsers