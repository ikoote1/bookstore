import React from 'react';
import { removeBook } from '../redux/books/booksSlice';
import { useDispatch } from 'react';

const bookSet = () => {
  const dispatch = useDispatch();
  return(
  <div className="books">
    <div className="book" id="1">
      <div>
        <h2>Ikoote</h2>
        <h2> by   Ikoote Rasuli</h2>
      </div>
      <button type="button" onClick={() => { dispatch(removeBook()); }}>Delete</button>
    </div>
    <div className="book" id="2">
      <div>
        <h2>Ikoote</h2>
        <h2> by   Ikoote Rasuli</h2>
      </div>
      <button type="button" onClick={() => { dispatch(removeBook()); }}>Delete</button>
    </div>
    <div className="book" id="3">
      <div>
        <h2>Ikoote</h2>
        <h2> by   Ikoote Rasuli</h2>
      </div>
      <button type="button" onClick={() => { dispatch(removeBook()); }}>Delete</button>
    </div>
  </div>
);
}

export default bookSet;
