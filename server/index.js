import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postsRoutes from './routes/post.js';
import usersRoutes from './routes/user.js';

const PORT = process.env.PORT || 4000;
const app = express();
dotenv.config();


app.use(bodyParser.json({
    limit: "30mb",
    extended: true
}));
app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: true
}));
app.use(cors());

app.use('/posts',postsRoutes);
app.use('/users',usersRoutes);

mongoose.connect(process.env.CONNECTION_URL, {})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err));
