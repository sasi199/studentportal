import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Add this import
import BookCard from './BookCard';




const BookList = () => {
    const [books, setBooks] = useState([]); // Define 'books' using useState
  
    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const response = await axios.get('http://localhost:3001/api/books');
          setBooks(response.data);
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      };
  
      fetchBooks();
    }, []);
  
    return (
      <div>
        <div>
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    );
  };
  
  export default BookList;
  