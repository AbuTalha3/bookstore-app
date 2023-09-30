import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

function Book({ books }) {
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <div>
                <p>{book.category}</p>
                <h1>{book.title}</h1>
                <p>
                  {book.author}
                </p>
                <div>
                  <button type="submit">comments</button>
                  <div className="border" />
                  <button type="submit" onClick={() => dispatch(deleteBook(book.id))}>Remove</button>
                  <div className="border" />
                  <button type="submit">Edit</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
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
