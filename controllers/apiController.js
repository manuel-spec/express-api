const { response } = require('express')
const Article = require('../models/Article')
const { validationResult } = require('express-validator')

const index = async (request, response) => {
    const articles = await Article.find()
    return response.status(201).json(articles)
}

const create = async (request, response) => {
    const request_result = validationResult(request)

    if (request_result.isEmpty()) {
        const article = await Article.create({
            title: request.body.title,
            snippet: request.body.snippet,
            body: request.body.body
        })

        return response.status(200).json(article)
    } else {
        return response.status(400).json(request_result)
    }

}

const update = async (request, response) => {
    const request_result = validationResult(request)
    const article = await Article.findById(request.params.id)


    if (!request.params.id) {
        return response.status(400).json({ "error": "article id is required" })
    }

    if (request_result.isEmpty()) {
        const updatedArticle = await Article.findByIdAndUpdate(request.params.id, request.body, { new: true })

        return response.status(200).json(updatedArticle)
    } else {
        return response.status(400).json(request_result)
    }

}



module.exports = {
    index, create, update
}