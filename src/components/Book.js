import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import '../styles/Book.css';

function Book({ books }) {
  const dispatch = useDispatch();

  return (
    <div className="book-container">
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <div className="book-left">
                <p className="category-book">{book.category}</p>
                <h2 className="title-book">{book.title}</h2>
                <p className="author-book">
                  {book.author}
                </p>
                <ul className="features">
                  <li type="submit">Comments</li>
                  <li>
                    <button className="remove-button" type="submit" onClick={() => dispatch(deleteBook(book.id))}>Remove</button>
                  </li>
                  <li type="submit">Edit</li>
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="book-middle">
        <h2 className="circle-percent">O</h2>
        <div className="middle-div">
          <p>100%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="book-right">
        <h3>CURRENT CHAPTER</h3>
        <p>Chapter 23</p>
        <button type="button" className="btn-update" label="Update progress" />
        <h3 className="update-progress">UPDATE PROGRESS</h3>
      </div>
    </div>
  );
}

Book.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Book;
