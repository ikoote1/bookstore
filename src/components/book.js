import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookSet = (item_id,title,author) => {
  const dispatch = useDispatch();
  return (
    <div className="books">
      <div className="book" id="1">
        <div>
          <h2>{title}</h2>
          <h2> by   {author}</h2>
        </div>
        <button type="button" onClick={() => { dispatch(removeBook(item_id)); }}>Delete</button>
      </div>
    </div>
  );
};

export default BookSet;
