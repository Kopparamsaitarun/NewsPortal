// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom/dist';

// const Login = () => {
//   const [emailData, SetemailData] = useState('');
//   const [passData, SetpassData] = useState('');
//   let navigate = useNavigate();
//   const routeChange = () => { navigate('/home'); }

//   function passOnchange(e) { SetpassData(e.target.value); }
//   function emailOnchange(e) { SetemailData(e.target.value); }

//   function CheckLogin() {
//   localStorage.setItem('userName', 'Guest');
//       axios.get('https://localhost:44318/User/CheckLogin', {
//           params: {
//               emailAddress: emailData,
//               password: passData
//           }
//       })
//           .then(function (response) {
//               console.log(response.data);
//               if (response.data.userId > 0) {
//                   localStorage.setItem('userName', response.data.firstName);
//                   alert('0');
//                   routeChange();
//               } else {
//                   localStorage.setItem('userName', 'Guest');
//                   alert('Please check the email and password');
//               }
//           })
//           .catch(function (error) {
//               localStorage.setItem('userName', 'Guest');
//               alert(error);
//           })
//           .finally(function () {
//               // always executed
//           });
//   }

//   return (
    
//     <div className='container'>
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control onChange={emailOnchange} type="email" placeholder="Enter email" />
//         <Form.Text  className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control onChange={passOnchange} type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button onClick={CheckLogin} variant="primary" type="submit">
//         Submit
//       </Button >
//     </Form>
//     </div>
//   )
// }

// export default Login;