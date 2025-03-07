import React from "react";
import { FiStar} from 'react-icons/fi';
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
            {/* {[...Array(5)].map((_, i) => (
            <FiStar 
              key={i} 
              style={`${i < 3 ? {coor:"yellow",fill:"currentColor"} : {color:"#d1d5db"}}`}
              className="stars" 
            />
                ))}
                <span className="text-xs text-gray-500 ml-1"></span> */}
            </div>
            <div>
                <div className="price">
                    {15 ? (
                        <div className="prices-discount">
                        <span style={{color:"#9ca3af",textDecoration:"line-through",fontSize:"0.875rem",marginRight:"10px"}}>$24.99</span>
                        <span style={{color:'#4F46E5',fontWeight:"bold"}}>
                            ${(24.99 * (1 - 15 / 100)).toFixed(2)}
                        </span>
                        </div>
                    ):(
                        <span tyle={{color:"#4F46E5",fontWeight:"bold"}}>24.99</span>
                    )}
                </div>
            </div>

        </div>
        </>
    )   
}

export default BookCard;