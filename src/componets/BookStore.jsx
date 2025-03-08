import { useState } from 'react';
import BookCard from './BookCard';
import { bestSellersData } from '../model/books';
import "../css/BookStore.css";

function Bookstore(){
    const [activeCategory, setActiveCategory] = useState('all');
    const categories = ['all', 'fiction', 'non-fiction', 'mystery', 'sci-fi', 'romance'];
  
    const filteredBooks = activeCategory === 'all' 
      ? bestSellersData 
      : bestSellersData.filter(book => book.category === activeCategory);

    return(
        <>
        <div className="container-books">
            <div style={{textAlign:"center",marginBottom:"3rem"}}>
                <h1 className="title">Best Books</h1>
                <p className="title-discover">
                    Discover the books everyone's talking about
                </p>
            </div>
            <div style={{display:"flex",justifyContent:"center",marginBottom:"2rem",overflow:"auto",paddingBottom:"0.5rem"}}>
                <div style={{display:"flex",marginLeft:"0.5rem"}}>
                    {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        style={activeCategory === category ?{backgroundColor:"red",color:"white"} : {backgroundColor:"#f3f4f6",color:"#374151",}}
                        className='book-tags'
                        >
                        {category.replace('-', ' ')}
                    </button>
                ))}
                </div>
            </div>
            <div className="books">
                    {filteredBooks.map(book => (
                        <BookCard key={book.id} book={book} />
                        ))}
                </div>
        </div>
        </>
    )
}

export default Bookstore;