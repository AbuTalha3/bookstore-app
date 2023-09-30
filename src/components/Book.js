import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBooks } from '../redux/books/booksSlice';

function Book({
  // eslint-disable-next-line camelcase
  title, author, category, item_id,
}) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBooks(item_id));
  };
  return (
    <div>
      <ul>
        <li>{author}</li>
        <li>{title}</li>
        <li>{category}</li>
      </ul>
      <button onClick={handleDelete} type="button">Remove Book</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default Book;
