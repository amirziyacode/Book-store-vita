import React from "react";
import { FiStar,FiShoppingCart} from 'react-icons/fi';
import "../css/BookCard.css"

function BookCard(){
    return (
        <>
        <div className="card">
            <img 
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
            alt="milk and honey" />
            <p className="title">The Midnight Library</p>
            <p className="author">Matt Haig</p>
            <div className="stars-rating">
            {[...Array(5)].map((_, i) => (
            <FiStar 
            key={i} 
            style={i < 5 ? {color:"#F59E0B",fill:"currentcolor"} : {color:"#d1d5db"}}
            className="stars" 
            />
            ))}
                <span style={{fontSize:"0.75rem",color:"#6b7280",marginLeft:"0.25rem"}}>(4.0) </span>
            </div>
            <div className="price">
                <div>
                    {15 ? (
                        <div className="prices-discount">
                        <span style={{color:"#9ca3af",textDecoration:"line-through",fontSize:"0.9rem",marginRight:"10px"}}>$24.99</span>
                        <span style={{color:'#4F46E5',fontWeight:"bold",fontSize:"18px"}}>
                            ${(24.99 * (1 - 15 / 100)).toFixed(2)}
                        </span>
                        </div>
                    ):(
                        <span tyle={{color:"#4F46E5",fontWeight:"bold"}}>24.99</span>
                    )}
                </div>
                <button className="btn-buy-book">
                    <FiShoppingCart className="icon-buy" />
                </button>
            </div>
        </div>
        </>
    )   
}

export default BookCard;