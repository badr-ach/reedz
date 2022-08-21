import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';


import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';

import useStyles from './styles.js';
import { getPosts } from './actions/posts.js';
import Navbar from './components/Navbar/Navbar';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch])

  return (
    <Container maxwidth="lg" style={{margin:'0 auto'}}>
      <Navbar/>
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
    </Container>
  );
}

export default App;
