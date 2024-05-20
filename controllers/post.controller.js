const postService = require("../server/post.service")

class PostController {
  async getAll(req, res) {
    try {
      const allPost = await postService.getAll()
      res.status(200).json(allPost)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async create(req, res) {
    try {
      const post = await postService.create(req.body) 
      res.status(201).json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }


}

module.exports = new PostController()