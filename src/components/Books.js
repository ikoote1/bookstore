const Books = () => (
  <div>
    <div className="books">
      <div className="book">
        <h2>Ikoote</h2>
        <h3>Ikoote Rasuli</h3>
      </div>
      <div className="book">
        <h2>Ikoote</h2>
        <h3>Ikoote Rasuli</h3>
      </div>
      <div className="book">
        <h2>Ikoote</h2>
        <h3>Ikoote Rasuli</h3>
      </div>
    </div>
    <div className="form">
      <h1>ADD NEW BOOK</h1>
      <form>
        <input placeholder="Book name.." />
        <input placeholder="Name of the author.." />
        <button type="submit">Addbook</button>
      </form>
    </div>
  </div>
);

export default Books;
