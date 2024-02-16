//user.controller.js
const userService =  require("../services/user.service")

class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async getAllUser(req, res){
        try{
            const user = await this.userService.getAllUser()
            res.status(200).json(user)
        }catch(err){
            
        }
    }

    async getUserById(req, res){
        try{
            const user = await this.userService.getUserById(req.params.id)
            res.status(200).json(user)
        }catch(err){
            
        }
    }

    async deleteUser(req, res){
        try{

        }catch(err){
            
        }
    }

    async updateUser(req, res){
        try{

        }catch(err){
            
        }
    }
   
}

const authController = new UserController(userService)

module.exports = authController;
