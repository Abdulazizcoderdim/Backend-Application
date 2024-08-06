const UserDto = require('../dtos/user.dto')
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')

class AuthService {
  async register(email, password) {
    const existUser = await userModel.findOne({ email })

    if (existUser) {
      throw new Error(`User ${email} already exist`)
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const user = await userModel.create({ email, password: hashPassword })

    const userDto = new UserDto(user)

    return { userDto }
  }
}

module.exports = new AuthService()
