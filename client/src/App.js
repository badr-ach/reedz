import React, { useEffect } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

import { Container } from '@material-ui/core'

import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth';
import { loadUser } from './actions/auth';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])

  const user = useSelector((state)=>state.authReducer.user);

  return (
    <BrowserRouter>
      <Container maxwidth="lg" style={{ margin: '0 auto' }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Navigate to="/posts" />} />
          <Route path="/posts" exact element={<Home />} />
          <Route path="/posts/search" exact element={<Home />} />
          <Route path="/posts/:id" exact element={<PostDetails />} />
          <Route path="/creators/:name" element={<CreatorOrTag />} />
          <Route path="/tags/:name" element={<CreatorOrTag/>} />
          <Route path="/auth" exact element={<Auth/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
