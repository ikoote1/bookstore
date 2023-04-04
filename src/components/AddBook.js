import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form">
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Book name.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Name of the author.."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
