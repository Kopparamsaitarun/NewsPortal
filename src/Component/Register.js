import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist';

const Register = () => {
  const [fnameData, SetfnameData] = useState([]);
  const [lnameData, SetlnameData] = useState([]);
  const [emailData, SetemailData] = useState([]);
  const [passData, SetpassData] = useState([]);
  const [reppassData, SetreppassData] = useState([]);
  const [errorMessage, SeterrorMessage] = useState([]);

  let navigate = useNavigate();
  const routeChange = () => { navigate('/'); }

  function fnameOnchange(e) { SetfnameData(e.target.value); }
  function lnameOnchange(e) { SetlnameData(e.target.value); }
  function passOnchange(e) { SetpassData(e.target.value); }
  function reppassOnchange(e) { SetreppassData(e.target.value); }
  function emailOnchange(e) { SetemailData(e.target.value); }

  function ClearForm() {
      SetemailData('');
      SetfnameData('');
      SetlnameData('');
      SetpassData('');
      SetreppassData('');
      routeChange();
  }

  function RegiserClickEvent() {
      const data = { firstName: fnameData, lastName: lnameData, emailAddress: emailData, password: passData };

      axios.post('https://localhost:44318/User/Register', data)
          .then((response) => {
            alert('Registeration Done');
              ClearForm();
          })
          .catch(error => {
            alert('error');              
              console.log(error);              
          });
  }
  return (
    <div className='container col-md-4'>
    <br /><br /><br />
    <h1>News Poratal | Register</h1>
    <hr />
    <div class="form-group">
      <label for="exampleInputEmail1">firstName</label>
      <input value={fnameData} onChange={fnameOnchange} type="text" class="form-control" id="fname" aria-describedby="emailHelp" required placeholder="Enter Fname" />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">lastName</label>
      <input value={lnameData} onChange={lnameOnchange} type="text" class="form-control" id="lname" aria-describedby="emailHelp" required placeholder="Enter Lname" />
    </div>
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
    <div class="form-group">
      <label for="exampleInputPassword1">Repeat Password</label>
      <input value={reppassData} onChange={reppassOnchange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      <br />
    </div>
    <button onClick={RegiserClickEvent} class="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <label>Already have an account ? &nbsp;&nbsp;</label><a href='login'>Login</a>
  </div>
  )
}

export default Register;