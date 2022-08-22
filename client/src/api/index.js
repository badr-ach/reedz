import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  return req;
});
export const fetchPosts = () => API.get('/posts/')
export const createPost = (newPost) => API.post('/posts/',newPost)
export const updatePost = (id,updatedPost) => API.patch(`/posts/${id}`,updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);
export const googleLogin = (formData) => API.post('/users/googlesignin', formData);
export const googleSignup = (formData) => API.post('/users/googlesignup', formData);
export const loadUser = (token) => API.post('/users/loadUser',token)