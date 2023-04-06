import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, getBooks } from '../redux/books/booksSlice';
import AddBook from './AddBook';

const Books = () => {
  const dispatch = useDispatch();
  const { bookItems, isLoading } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (isLoading || !bookItems) {
    return (
      <div><h1>Loading..........</h1></div>
    );
  }
  return (
    <div>
      <div>
        <div className="books">
          {bookItems.map(
            (book) => (
              <div className="book" key={book.item_id}>
                <div>
                  <h2>{book.title}</h2>
                  <h2>
                    {' '}
                    by
                    {' '}
                  </h2>
                  <h2>
                    {book.author}
                  </h2>
                </div>
                <button type="button" onClick={() => { dispatch(removeBook(book.item_id)); }}>Delete</button>
              </div>
            ),
          )}
          <div className="chart" />
        </div>
      </div>
      <AddBook />
    </div>
  );
};
export default Books;
