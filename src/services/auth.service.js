// AuthService.js
const userDao = require('../daos/user.dao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthService {

    constructor(userDao) {
        this.userDao = userDao;
    }

    async registerUser(data) {
        const { username, email, password } = data;

        const salt = await this.genSalt(10);
        const hash = await this.genHash(password, salt);

        return await this.userDao.createUser({
            username,
            email,
            salt,
            password: hash,
        })
    }

    async genSalt(saltRounds) {
        return bcrypt.genSaltSync(saltRounds);
    }

    async genHash(password, salt) {
        return bcrypt.hashSync(password, salt);
    }

    async loginUser(data) {
        const { username, password } = data;
        const user = await this.userDao.getUserByUsername(username);

        if(!user){
            
        }

        const match = this.comparePassword(password, user.password)

        if (!match) {
            
        }

        return await this.genToken(username, user.salt);
    }

    async comparePassword(password, userPassword) {
        return bcrypt.compareSync(password, userPassword)
    }

    async genToken(tokenSecret, tokenPrivate){
        return jwt.sign({tokenSecret}, tokenPrivate, { expiresIn: '1h' }, { algorithm: 'RS256' });
    }

}

const authService = new AuthService(userDao)

module.exports = authService;
