import React from 'react';
import Book from './book';

const BookList = ({bookTitle, setBookTitle, books, setBooks, bookAuthor, setBookAuthor}) => {
    return (
        <div>
            <h1>Book list</h1>
        {books.map(book => (
        < Book book = {
            book
        }
        key = {
            book.id
        }
        bookTitle = {
            bookTitle
        }
        setBookTitle = {
            setBookTitle
        }
        books = {
            books
        }
        setBooks = {
            setBooks
        }

        bookAuthor = {
            bookAuthor
          }
    
        setBookAuthor = {
            setBookAuthor
          }
        /> ))}
        </div>

 );
}

export default BookList;