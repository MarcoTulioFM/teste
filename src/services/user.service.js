// user.service.js
const userDao = require('../daos/user.dao');

class UserService {

    constructor(userDao) {
        this.userDao = userDao;
    }

    async getAllUser(){
        return await this.userDao.getAllUser()
    }

    async getUserById(id){
        return await this.userDao.getUserById(id)
    }

}

const userService = new UserService(userDao)

module.exports = userService;
