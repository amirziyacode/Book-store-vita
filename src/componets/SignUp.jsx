import React from "react";
import "../css/SignUp.css";
import { useNavigate } from 'react-router-dom';
function SingUp(){
    const navigate = useNavigate();
    return(
        <>
        <div className="form">
            <div className="form-title-signUp">
            <h2>We so happy to join us !</h2>
            </div>
            <div className="form-input">
                <input type="text" placeholder="Username"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <p>Do you have an account? <span className="login-btn" onClick={() =>navigate('/login')}>Login</span></p>
                <button>Sign Up</button>
            </div>
        </div>
        </>
    )
}

export default SingUp;