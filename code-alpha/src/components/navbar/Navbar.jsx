import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link,useLocation ,useNavigate } from 'react-router-dom';
import newRequest from '../../utilies/newRequest';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar =  () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  
  
  const { pathname } = useLocation();


  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(()=>{
     window.addEventListener("scroll", isActive);
    return ()=>{
      window.removeEventListener("scroll", isActive);
    }
  },[])

  const navigate = useNavigate();


  const User = JSON.parse(localStorage.getItem("currentUser"));
  // 

  // const User = currentUser ? currentUser.message : null;

  // Now you can safely use User
  // if (User) {
  //   console.log(User);
  // } else {
  //   console.log("currentUser is null");
  // }
  

// const User={
//   id:"sjkaj",
//   name : "sakk"
// }

const handleLogout = async () => {
  try {
    await newRequest.post("/user/logout");
    localStorage.setItem("currentUser", null);
    navigate("/login");
    toast.success('successfully logout')
  } catch (error) {
    console.log(error);
  }
}
  

  return (
    <>
    <div className={active || pathname !== "/" ?  "active Navbar":  "Navbar"}>
      <div className={active ? "active Container":  "Container"}>
      <div className='logo'>
      <a className="navbar-brand d-flex" href="/">
        <img className="brand-logo-img" src="img/p1.png" alt="" />
            <span className="sr-only">Carriers</span>
        </a>
        <span className='text'>What we do</span>
        <span className='text'>What we are</span>
        <span className='text'>Insight Careers</span>
        <span className='text'>Investor</span>
      </div>
      <div className='links'>
        <span className='text'>Explore</span>
        {!User && <span  className='text'><Link className='link' to="/login">Login</Link></span>} 
        <img src="" alt="" />
        {!User && <button className='button'><Link className='link' to='/signup'>Signup</Link></button>}
        {User && (
          <div className="user" onClick={()=> setOpen(!open)}>
            <img id='img' src={User.img || "/img/noavatar.jpg"} alt="" />
            <span>{User.name}</span>
            {open &&  <div className="options">
              <Link className='link'>Message</Link>
              <Link className='link'>Profile</Link>
              <Link className='link' onClick={handleLogout}>Logout</Link>

            </div>
              }
          </div>
        )}
      </div>
      </div>
    </div>
    </>

  )
}

export default Navbar