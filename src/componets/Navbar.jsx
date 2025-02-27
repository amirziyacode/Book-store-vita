import React from "react";
import "../css/home.css";
import { useNavigate } from 'react-router-dom';

function NavBar(){
    const navigate = useNavigate();
    return (
        <>
        <nav>
            <h2 className="logo"><span style={{color:"red"}}>Book</span>Store</h2>
            <ul className="nav-ite">
                <li>BestSellers</li>
                <li>BookStroes</li>
                <li onClick={() =>  navigate('/login')}>Login</li>
            </ul>
            <button class="btn-outline"><p class="text-btn">Sing Up</p></button>
        </nav>
        </>
    )
}
export default NavBar;