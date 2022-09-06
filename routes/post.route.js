const router = require ("express").Router;
const {
    createPost,
    deletePost,
    getPost,
    updatePost,
    getPosts,
} = require("../controllers/post.controllers");

const postRouter = router();

/* userRouter.get("/", getPost);
userRouter.post("/", createPost);
userRouter.patch("/", updatePost);
userRouter.delete("/", deletePost);
userRouter.get("/", getPosts);
 */

postRouter.route("/").post(getPosts).post(createPost);
postRouter.route("/:postId").get(getPost).patch(updatePost).delete(deletePost);



module.exports = postRouter;
