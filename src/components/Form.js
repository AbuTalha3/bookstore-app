/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/booksSlice';
import '../styles/Form.css';

function Form() {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();
  const getInputs = (e) => {
    const { name, value } = e.target;
    const inputs = { [name]: value };
    setInput({ ...input, ...inputs });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const book = { id, ...input };
    dispatch(addBooks(book));
    setInput(input);
  };
  return (
    <form className="book-form">
      <h2 className="add-n-book">ADD NEW BOOK</h2>
      <div className="input-wrapper">
        <input
          className="input-title"
          type="text"
          onChange={getInputs}
          name="title"
          value={input.title}
          placeholder="Book Title"
        />
        <br />
        <input
          className="input-author"
          type="text"
          name="author"
          onChange={getInputs}
          value={input.author}
          placeholder="Author"
        />
        <br />
        <button className="add-button" type="submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </div>
    </form>
  );
}

export default Form;
