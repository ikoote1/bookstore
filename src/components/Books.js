import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { removeBook, getBooks } from '../redux/books/booksSlice';
import AddBook from './AddBook';

const Books = () => {
  const dispatch = useDispatch();
  const { bookItems, isLoading } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooks());
  },[]);

  if(isLoading){
    return(
      <div><h1>Loading..........</h1></div>
    )
  }
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
