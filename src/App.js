import CreateBook from "./components/createBook";
import React, {useState} from 'react';
import BookList from "./components/bookList";


function App() {
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState(''); // set the data for the title
  const [bookAuthor, setBookAuthor] = useState(''); // set the data for the author
  return (
    <div className="App">
      <h1>Bookstore CRUD application</h1>
      < CreateBook bookTitle = {
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
      />
      < BookList bookTitle = {
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
      />
      
    </div>
  );
}

export default App;
