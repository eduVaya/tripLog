// React imports
import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar.js'
// Containers
import Landing from './containers/Landing.js'
import Login from './containers/Login.js'
import Register from './containers/Register.js'
import './App.css';

const App = () =>
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Fragment>
  </BrowserRouter>


export default App;
