import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { Container } from '@material-ui/core'


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth';

function App() {

  return (
    <BrowserRouter>
    <Container maxwidth="lg" style={{margin:'0 auto'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/auth" exact element={<Auth/>}/>
      </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;
