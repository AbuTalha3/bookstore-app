import React from 'react';
import { PropTypes } from 'prop-types';

function Book({ title, author, category }) {
  return (
    <div>
      <ul>
        <li>{author}</li>
        <li>{title}</li>
        <li>{category}</li>
      </ul>
      <button type="button">Remove Book</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
