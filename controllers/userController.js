const User = require('../models/User')
const { validationResult, matchedData } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const createToken = (id) => {
    return jwt.sign(id, process.env.JWT_COOKIE_SECRET, { expiresIn: 3 * 60 * 60 * 24 })
}

const store = async (request, response) => {

    const validation_result = validationResult(request)
    if (validation_result.isEmpty()) {
        const { username, password } = matchedData(request)
        bcrypt.hash(password, 10).
            then(async (hash) => {
                const user = await User.create({
                    username: username,
                    password: hash
                })
                return response.status(200).json({ "user": user })

            })


    } else {
        return response.status(400).json(validation_result)
    }

}

module.exports = { store }