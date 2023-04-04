import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, addBook } from '../redux/books/booksSlice';
// import AddBook from './AddBook';

const Books = () => {
  const dispatch = useDispatch();
  const { bookItems } = useSelector((state) => state.book);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author }));
    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <div className="books">
        {bookItems.map(
          (item) => (
            <div className="book" key={item.id}>
              <div>
                <h2>{item.title}</h2>
                <h2>
                  {' '}
                  by
                  {' '}
                </h2>
                <h2>
                  {item.author}
                </h2>
              </div>
              <button type="button" onClick={() => { dispatch(removeBook(item.id)); }}>Delete</button>
            </div>
          ),
        )}
      </div>
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
    </div>
  );
};
export default Books;
