import React from "react";
import {Link} from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import app from '../../firebase.init';
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/');
    }
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabindex="0" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/"> Home</a></li>
          <li><a href="/login">Login</a></li>
         
          {user?   <li tabindex="0"> <a className="justify-between">
             User
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
            </a>
            <ul className="p-2">
              <li><a href="/profile" >Profile</a></li>
              <li><a onClick={logout}>Logout</a></li>
            </ul>
          </li> :  <li><a  href="/login">Login</a></li>}
          
          <li><a href="/signup">Register</a></li>
        </ul>
      </div>
       
       
      <a className="btn btn-ghost normal-case text-xl">Your Attendance</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
      <li><a href="/"> Home</a></li>
       
        {user?   <li tabindex="0"> <a className="justify-between">
             User
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
            </a>
            <ul className="p-2">
              <li><a href="/profile">Profile</a></li>
              <li><a onClick={logout}>Logout</a></li>
            </ul>
          </li> :  <li><a  href="/login">Login</a></li>}
          
        {/* <li><a href="/signup">Register</a></li> */}
      </ul>
    </div>
  </div>
  );
};

export default Navbar;
