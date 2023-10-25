import React, { useState } from 'react'
import "./Login.css"
import { Slider } from '../components/slider/Slider'
import Highlight from '../components/highlights/Highlight'
import newRequest from '../utilies/newRequest'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Sign =  () => {
  const [detail, setDetail] = useState({
    email: "",
    name: "",
    phone: "",
    password: ""
  });


  const [errors, setErrors] = useState({})

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!validateForm()) {
        return;
      }

      await newRequest.post('/user/sign', detail).then(response => {
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        navigate("/");
        toast.success('Registration Successful', {
          position: 'top-center',
          autoClose: 5000,
          closeOnClick: true,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }).catch(error => {
        toast.warn('Registration Failed: ' + error.response.data.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
    } catch (error) {
      toast.error('Registration Failed: ' + error.response.data.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  function validateForm() {
    let errors = {};

    if (!detail.name) {
      errors.name = 'Name is required';
    }
    if (!detail.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(detail.email)) {
      errors.email = 'Invalid email address';
    }
    if (!detail.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(detail.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }
    if (!detail.password) {
      errors.password = 'Password is required';
    } else if (detail.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    // Set the errors object to indicate any validation issues
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return false;
    }

    return true;
  }

  return (
    <>
    <div className="login-container"  style={{background:"#DDDDDD"}}>
    <form className='form w-50' onSubmit={handleSubmit} style={{boxShadow:"1px 1px 17px 10px white"}}>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" name="email" onChange={handleChange} value={detail.email} />
        {errors.email && <div className="text-danger">{errors.email}</div>}
        <div className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" name="name" onChange={handleChange} value={detail.name} />
        {errors.name && <div className="text-danger">{errors.name}</div>}
        <div className="form-text">Enter Your Full Name</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input type="text" className="form-control" name="phone" value={detail.phone} onChange={handleChange} />
        {errors.phone && <div className="text-danger">{errors.phone}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" value={detail.password} name="password" onChange={handleChange} />
        {errors.password && <div className="text-danger">{errors.password}</div>}
      </div>
  
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    </>
  )
}

export default Sign;
