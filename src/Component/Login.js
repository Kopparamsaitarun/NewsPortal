import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist';

const Login = () => {
  const [emailData, SetemailData] = useState('');
  const [passData, SetpassData] = useState('');

  let navigate = useNavigate();

  function passOnchange(e) { SetpassData(e.target.value); }
  function emailOnchange(e) { SetemailData(e.target.value); }

  const CheckLogin = async () => {

    localStorage.setItem('userName', 'Guest');
    const response = await axios.get('https://localhost:44318/User/CheckLogin', {
      params: {
        emailAddress: emailData,
        password: passData
      },
    });
    console.log(response.data);
    if (response.data.userId > 0) {

      localStorage.setItem('userName', response.data.firstName);

      console.log(response.data)
      alert('Logged in successfully')
      navigate('/home')
    } else {
      localStorage.setItem('userName', 'Guest');
      alert('Invalid User')
    }

  }

  if (localStorage.getItem('userName') === 'Guest') {
    return (
      <div className='container col-md-4'>
      <br /><br /><br />
      <h1>News Poratal | Login</h1>
      <hr />
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input value={emailData} onChange={emailOnchange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter email" />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input value={passData} onChange={passOnchange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        <br />
      </div>
      <button onClick={CheckLogin} class="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <label>New user ? &nbsp;&nbsp;</label><a href='register'>Register here</a>
    </div>
    )
  }
  else {
    return (

      <div className='container'>
        <h1>Already loggined as {localStorage.getItem('userName')}</h1>
      </div>

    )
  }


}

export default Login;