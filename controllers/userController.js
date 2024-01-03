const User = require('../models/User')
const { validationResult, matchedData } = require('express-validator')

const store = async (request, response) => {

    const validation_result = validationResult(request)
    if (validation_result.isEmpty()) {
        const { username, password } = matchedData(request)

        const user = await User.create({ username, password })
        return response.status(200).json({ "username": username, "password": password })
    } else {
        return response.status(400).json(validation_result)
    }

}

module.exports = { store }