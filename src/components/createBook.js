import React from 'react';
import { v4 as uuidv4 } from 'uuid';


function CreateBook({bookTitle, setBookTitle ,books, setBooks, bookAuthor, setBookAuthor}) {
    
    // const [bookAuthor, setBookAuthor] = useState(''); // set the data for the author
    // const [bookTitle, setBookTitle] = useState(''); // set the data for the title


    // setting up the value for author
    const userInputHandlerForAuthor = (e) => {
        setBookAuthor(e.target.value);
    }

    // setting up the value for title
    const userInputHandlerForTitle = (e) => {
        setBookTitle(e.target.value);
    }

    const submitFormHandler = (e) =>{
        e.preventDefault();
        setBooks([...books, {id: uuidv4(),author: bookAuthor, title: bookTitle, likes: 0}]); // set the books array with objects that have bookAuthor and title data
        setBookTitle('');
        setBookAuthor('');
    }
    
    return (
      <div>
        <h2>Create book form</h2>
        <form onSubmit={submitFormHandler}>
            <label>book title: </label>
            <input type="text" name="title" value={bookTitle} onChange={userInputHandlerForTitle} required/>
            <br></br>
            <br></br>

            <label>book author: </label>
            <input type="text" name="author" value={bookAuthor} onChange={userInputHandlerForAuthor} required />
            <br></br>
            <br></br>
            
            <input  type="submit" value="submit"/>
        </form>
        
      </div>
    );
  }
  
  export default CreateBook;
  