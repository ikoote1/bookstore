import React from "react";
import { useState } from "react";
import { addBook } from '../redux/books/booksSlice';
const AddBook = () => {
    const [inputData, SetInputData] = useState({
        title: "",
        author: ""
      })
    return(
        <div className="form">
        <h1>ADD NEW BOOK</h1>
        <form>
          <input placeholder="Book name.." />
          <input placeholder="Name of the author.." />
          <button type="submit" onClick={() => { dispatch(addBook()); }}>Addbook</button>
        </form>
      </div>
    )
}

export default AddBook