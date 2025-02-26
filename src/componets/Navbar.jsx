import React from "react";
import "../css/home.css";

function NavBar(){
    return (
        <>
        <nav>
            <h2>Book Store</h2>
            <ul className="nav-ite">
                <li>BestSellers</li>
                <li>BookStroes</li>
                <li>Login</li>
            </ul>
            <button class="btn-outline"><p class="text-btn">Sing Up</p></button>
        </nav>
        </>
    )
}
export default NavBar;