import { Form } from 'react-router-dom';

const Books = () => (
  <div>
    <div className="books">
      <div className="book">
        <div> <h2>Ikoote</h2>
        <h3>Ikoote Rasuli</h3>
        </div>
        <button type='button'>Delete</button>
      </div>
      <div className="book">
        <div> <h2>Ikoote</h2>
        <h3>Ikoote Rasuli</h3>
        </div>
        <button type='button'>Delete</button>
      </div>
      <div className="book">
        <div> <h2>Ikoote</h2>
        <h3>Ikoote Rasuli</h3>
        </div>
        <button type='button'>Delete</button>
      </div>
    </div>
    <Form />
  </div>
);

export default Books;
