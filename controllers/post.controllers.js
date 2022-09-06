const getPost = (req, res) => {
    res.status(200).send(`Just a post with Id ${req.params.postId} has been Posted`);
  };
  
  const createPost = (req, res) => {
    res.status(200).send(`A new post with Id ${req.params.postId} has been created`);
  };
  
  const updatePost = (req, res) => {
    res.status(201).send(`Post with Id ${req.params.postId} has been updated`);
  };
  
  const deletePost = (req, res) => {
    res.status(200).send(`A new post with Id ${req.params.postId} has been deleted`);

  };
  const getPosts = (req, res) => {
    res.status(200).send(`Get all Post filtered by ${req.query.title}""`);
  };
  
  module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    getPost,
  };
