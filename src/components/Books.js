import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiLoaderAlt } from 'react-icons/bi';
import { removeBook, getBooks, deleteBook } from '../redux/books/booksSlice';
import AddBook from './AddBook';

const Books = () => {
  const dispatch = useDispatch();
  const { bookItems, isLoading } = useSelector((state) => state.book);

  const handelRemove = (bookId) => {
    dispatch(deleteBook(bookId))
      .then(dispatch(removeBook(bookId)));
  };
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

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
                  <h2>Action</h2>
                  <h1>{book.title}</h1>
                  <h3>{book.author}</h3>
                  <div>
                    <button type="button">Comment</button>
                  <button type="button" onClick={() => handelRemove(book.item_id)}>Delete</button>
                  <button type="button">Edit</button>
                  </div>
                </div>
                <div className="end">
                  <div>
                  <span><BiLoaderAlt className="blue" /></span>
                  <span>0%</span>
                  <h3>completed</h3>
                  </div>
                </div>
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
