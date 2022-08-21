import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, } from "react-redux";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { Grow, Container,Grid } from "@material-ui/core";

import useStyles from './styles.js';
import { getPosts } from '../../actions/posts.js';

const Home = () =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
    useEffect(()=>{
      dispatch(getPosts());
    },[currentId,dispatch])

    return(
        <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home;