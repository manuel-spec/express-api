const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "article title is required !"],
    },
    snippet: {
        type: String,
        required: [true, "snippet is required !"]
    },
    body: {
        type: String,
        required: [true, "article body is required !"]
    }
}, { timestamps: true })

const Article = mongoose.model('Article', articleSchema)

module.exports = Article