const { User } = require('../models/index');

class UserDAO{

    constructor(User){
        this.User = User
    }

    async getAllUser(){
        return await this.User.findAll({
            attributes: ['id', 'username', 'email'],
        });
    }

    async getUserById(id){
        return await this.User.findOne({
            limit: 1,
            where: {
                id,
            }
        });
    }

    async getUserByUsername(username){
        return await this.User.findOne({
            attributes: ['salt', 'password'],
            limit: 1,
            where: {
                username,
            }
        })
    }

    async createUser(data){
        return await this.User.create(data)
    }

}

const userDao = new UserDAO(User);

module.exports = userDao;