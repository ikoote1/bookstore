import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import AddBook from './AddBook';

const Books = () => {
  const dispatch = useDispatch();
  const { bookItems } = useSelector((state) => state.book);
  return (
    <div>
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
          <div className="chart" />
        </div>
      </div>
      <AddBook />
    </div>
  );
};
export default Books;
