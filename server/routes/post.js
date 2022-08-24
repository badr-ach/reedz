import express from 'express';
import auth from "../middlewares/auth.js";

import { getPosts, getPostsBySearch, getPostsByCreator, getPost, createPost, updatePost, likePost, commentPost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/creator', getPostsByCreator);
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth,  createPost);
router.post('/:id/commentPost', commentPost);

router.patch('/:id', auth, updatePost);
router.patch('/:id/likePost', auth, likePost);

router.delete('/:id', auth, deletePost);

export default router;