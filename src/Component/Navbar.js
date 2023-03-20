import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom/dist'

const Navbar = () => {
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.setItem('userName', 'Guest');
    navigate('/Login');
  }
   
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="home">Home </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="register">Register</a>
              </li>
              <li className="nav-item">
                <a onClick={LogOut} className="nav-link" href="#">Logout</a>
              </li>


            </ul>

          </div>
        </nav>
        <Outlet />
      </div>
    )
  }


export default Navbar

