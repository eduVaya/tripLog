// React imports
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar.js';
import Alert from './components/Alert.js';
// Containers
import Landing from './containers/Landing.js'
import Login from './containers/Login.js'
import Register from './containers/Register.js'
//Redux
import { Provider } from 'react-redux';
import store from './store.js';
import { loadUser } from './actions/authAction.js';
// Others
import { setAuthToken } from './utilities/helperFunction.js';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (<Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Alert />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  </Provider>)
}

export default App;
