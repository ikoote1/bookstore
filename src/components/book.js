import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookSet = (id, title, author) => {
  const dispatch = useDispatch();
  return (
    <div className="book" key={id}>
      <div>
        <h2>{title}</h2>
        <h2>
          {' '}
          by
          {author}
        </h2>
      </div>
      <button type="button" onClick={() => { dispatch(removeBook(id)); }}>Delete</button>
    </div>
  );
};

export default BookSet;
