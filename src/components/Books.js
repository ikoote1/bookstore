import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import book from './book';

const Books = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <book />
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
