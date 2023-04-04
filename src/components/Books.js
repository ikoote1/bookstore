import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
// import BookSet from './book';

const Books = () => {
  const dispatch = useDispatch();
  const { bookItems } = useSelector((state) => state.book);
  // console.log(bookItems.title);
  return (
    <div>
      <div className="books">
        {bookItems.map(
          (item) => {
          return(
            <div className="book">
            <div>
              <h2>{item.title}</h2>
              <h2>
                {' '}
                by
                {item.author}
              </h2>
            </div>
            <button type="button" onClick={() => { dispatch(removeBook(id)); }}>Delete</button>
          </div>
          )
          }
        )}
      </div>
      <div className="form">
        <h1>ADD NEW BOOK</h1>
        <form>
          <input placeholder="Book name.." />
          <input placeholder="Name of the author.." />
          <button type="submit" onClick={() => { dispatch(addBook()); }}>Addbook</button>
        </form>
      </div>
    </div>
  );
};
export default Books;
