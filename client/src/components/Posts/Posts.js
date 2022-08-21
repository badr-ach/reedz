import React from "react";
import { useSelector } from "react-redux";

import Post from './Post/Post.js';
import { Grid, CircularProgress } from '@material-ui/core';

import useStyles from './styles.js';

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems = "stretch" spacing={3} >
                {
                    posts.map((post)=>(
                        <Grid item key={post._id} xs={12} sm={6}>
                            <Post setCurrentId={setCurrentId} post={post}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts;