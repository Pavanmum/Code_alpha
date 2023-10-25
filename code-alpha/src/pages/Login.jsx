import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { Slider } from '../components/slider/Slider'
import Highlight from '../components/highlights/Highlight'
import newRequest from '../utilies/newRequest';



const Login = () => {

  const navigate = useNavigate();

    const [detail, setDetail] = useState({
      email:"",
      password:"",
    })

  const [errors, setErrors] = useState({})

  
    const handleChange = (e) => {
      setDetail(
       { ...detail,[e.target.name] : e.target.value}
      );

    }
    
  // localStorage.setItem("currentUser", null);
    const handleSubmit = async (e) =>{
      e.preventDefault();
      if (!validateForm()) {
        return;
      }
      
      await newRequest.post("user/login",detail).then(response => {
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        // console.log("data",response)
        // console.log(response.data)
        navigate("/");
        toast.success('Login Successful', {
          position: 'top-center',
          autoClose: 5000,
          closeOnClick: true,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          
        });
      }).catch( error => {
        setErrors(error.response.data.error);
        // console.log("data",error);
      toast.warn('Login Failed: ' + error.response.data.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      })

    

    
    }
    function validateForm() {
      let errors = {};
      if (!detail.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(detail.email)) {
        errors.email = 'Invalid email address';
      }
      if (!detail.password) {
        errors.password = 'Password is required';
      } else if (detail.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
      setErrors(errors);
      return Object.keys(errors).length === 0;
    }
  return (
    <>
    <div className="login-container" style={{background:"#DDDDDD"}}>
    <form className='form' onSubmit={handleSubmit} style={{boxShadow:"1px 1px 17px 10px white"}}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' onChange={handleChange} value={detail.email} aria-describedby="emailHelp"/>
    {errors.email && <span style={{color : 'red'}}>{errors.email}</span>}
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={detail.password} onChange={handleChange}/>
      
    {errors.password && <span style={{color : 'red'}}>{errors.password}</span>}
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <div className='my-2' >
              <a href="/" style={{textDecoration : "none"}}>forget password</a><br />
              Do not have account !<Link to= "/signup" style={{textDecoration : "none"}}> Create </Link>
            </div>
</form>
    </div>
    </>
  )
}

export default Login;