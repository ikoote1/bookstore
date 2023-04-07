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
                <div className="first">
                  <h2 className="School-of Text-Style-5">Action</h2>
                  <h1 className="Title Text-Style-6">{book.title}</h1>
                  <h3 className="Suzanne-Collins Text-Style-8">{book.author}</h3>
                  <div className="btn">
                    <button type="button">Comment</button>
                    <button type="button" onClick={() => handelRemove(book.item_id)}>Remove</button>
                    <button type="button">Edit</button>
                  </div>
                </div>
                <div className="end">
                  <div className="span">
                    <span><BiLoaderAlt className="blue" /></span>
                    <div>
                      <span>0%</span>
                      <h3>completed</h3>
                    </div>
                  </div>
                  <div className="update">
                    <h3>CURRENT CHAPTER</h3>
                    <h2>Introduction</h2>
                    <button type="button">UPDATE PROGRESS</button>
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
