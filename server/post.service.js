const postModel = require("../models/post.model")

class PostService {
    async create(post) {
        const newPost = await postModel.create(post)
        return newPost
    }

    async getAll() {
        const allPost = await postModel.find()
        return allPost
    }
}

module.exports = new PostService()

//1:48:00