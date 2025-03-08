import React from "react";
import { FiStar,FiShoppingCart} from 'react-icons/fi';
import "../css/BookCard.css"

const  BookCard = ({book}) => {
    const { title, author, cover, price, rating, discount } = book; 
    return (
        <>
        <div className="card">
            <img 
            src={cover} 
            alt={title} />
            {discount && (
            <div className="discout-tag">
                {discount}% OFF
            </div>
            )}
            <p className="title">{title}</p>
            <p className="author">{author}</p>
            <div className="stars-rating">
            {[...Array(5)].map((_, i) => (
            <FiStar 
            key={i} 
            style={i < rating ? {color:"#F59E0B",fill:"currentcolor"} : {color:"#d1d5db"}}
            className="stars" 
            />
            ))}
                <span style={{fontSize:"0.75rem",color:"#6b7280",marginLeft:"0.25rem"}}>({rating.toFixed(1)}) </span>
            </div>
            <div className="price">
                <div>
                    {discount ? (
                        <div className="prices-discount">
                        <span style={{color:"#9ca3af",textDecoration:"line-through",fontSize:"0.9rem",marginRight:"10px"}}>${price.toFixed(2)}</span>
                        <span style={{color:'#4F46E5',fontWeight:"bold",fontSize:"18px"}}>
                            ${(price * (1 - discount / 100)).toFixed(2)}
                        </span>
                        </div>
                    ):(
                        <span tyle={{color:"#4F46E5",fontWeight:"bold"}}>${price.toFixed(2)}</span>
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