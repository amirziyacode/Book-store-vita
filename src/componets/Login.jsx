import React from "react";
import "../css/Login.css";
import { useNavigate } from 'react-router-dom';
function Login(){
    const navigate = useNavigate();
    return(
        <>
        <div className="form">
            <div className="form-title">
            <h2> <span>Welcome Back to </span> 
            <span style={{color:"red",fontFamily:"Playwrite IT Moderna"}}>Book</span> 
            <span style={{fontFamily:"Playwrite IT Moderna"}}> Store </span></h2>
            </div>
            <div className="form-input">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <p>You don't have an account? <span className="login-btn" onClick={() =>navigate('/')}>SingUp</span></p>
                <button>Login</button>
            </div>
        </div>
        </>
    )
}

export default Login;