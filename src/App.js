import './App.css';
import React, { Component } from 'react'
import Login from './Component/Login';
import Layout from './Component/Layout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NoPage from './Component/NoPage';
import Register from './Component/Register';
import Navbar from './Component/Navbar';

export default class App extends Component {

  render() {
    return (
      
        <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register/>} />
          <Route path="home" element={<Layout />} />
          <Route path="login" element={<Login />} />         
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    )
  }
}


