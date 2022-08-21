import { createPost, getPosts, updatePost, deletePost, likePost } from "../controllers/posts.js";
import express from "express";

const router = express.Router();

router.get('/', getPosts)
router.post('/',createPost)
router.patch('/:id',updatePost)
router.delete('/:id',deletePost)
router.patch('/:id/likePost',likePost)

export default router;