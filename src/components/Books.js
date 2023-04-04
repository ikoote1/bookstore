import { useDispatch } from 'react-redux';
import { removeBook, addBook } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  return (
    <div>
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
      <div className="form">
        <h1>ADD NEW BOOK</h1>
        <form>
          <input placeholder="Book name.." />
          <input placeholder="Name of the author.." />
          <button type="submit" onClick={() => { dispatch(addBook()); }}>Addbook</button>
        </form>
      </div>
    </div>
  );
};
export default Books;
