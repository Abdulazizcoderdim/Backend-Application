const postModel = require("../models/post.model")

class PostController {
  async getAll(req, res) {
    try {
      const allPost = await postModel.find()
      res.status(200).json(allPost)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async create(req, res) {
    try {
      const { title, body } = req.body
      const newPost = await postModel.create({ title, body })
      res.status(201).json(newPost)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = new PostController()