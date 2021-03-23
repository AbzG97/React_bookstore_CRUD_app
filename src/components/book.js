import React, {useState}from 'react';

const Book = ({book, bookTitle, setBookTitle,  books, setBooks, bookAuthor, setBookAuthor}) => {
    const [toggle, setToggle] = useState(true);
    const [toggleUpdate, setToggleUpdate] = useState(false); // hide by default


     // toggles the updated form inputs
      const toggleInput = () => {
        setToggle(false);
        setToggleUpdate(true); // show update button when showing the update input fields
      }
    

    const EditBook = () => {
        book.title = bookTitle;
        book.author = bookAuthor;
        setBooks([...books]); // updated the new books
        setBookTitle('');
        setBookAuthor('');
        setToggle(true);
        
    }

     // setting up the value for title
     const userInputHandlerForTitle = (e) => {
        setBookTitle(e.target.value);
    }

    // setting up the value for author
    const userInputHandlerForAuthor = (e) => {
        setBookAuthor(e.target.value);
    }

    const LikeBook = () => {
        book.likes += 1;
        setBooks([...books]);
    }
    return (
        <div>
            {toggle ? (
                <p onDoubleClick={toggleInput}>book title: {book.title}</p>
            ) : (
                <div>
                    <input type="text" value={bookTitle}  placeholder={book.title} onChange={userInputHandlerForTitle} />
                    
                </div>

            )}

            {toggle ? (
                <p onDoubleClick={toggleInput}>book author: {book.author}</p>
            ) : (
                <div>
                    <input type="text" value={bookAuthor} placeholder={book.author} onChange={userInputHandlerForAuthor} />
                </div>

            )}
            <p>Likes: {book.likes}</p>
            {toggleUpdate && <button onClick={EditBook}>Update</button>}
            <button onClick={LikeBook}>Like</button>
            
        </div>

 );
}

export default Book;