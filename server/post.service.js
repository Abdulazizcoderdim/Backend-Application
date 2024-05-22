const postModel = require("../models/post.model")
const fileService = require("./file.service")

class PostService {
    async create(post, picture) {
        const fileName = fileService.save(picture)  
        const newPost = await postModel.create({...post, picture: fileName})
        return newPost
    }

    async getAll() {
        const allPost = await postModel.find()
        return allPost
    }

    async delete(id) {
        const post = await postModel.findByIdAndDelete(id)
        return post
    } 

    async edit(body,id) {
        if(!id) throw new Error("Id not found")
        const post = await postModel.findOneAndUpdate(id, body, {new: true})
        return post
    }

    async getOne(id) {
        if(!id) throw new Error("Id not found")
        const post = await postModel.findById(id)
        return post      
    }
}

module.exports = new PostService()

//1:56:00