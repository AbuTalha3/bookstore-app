import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author, Catagory}) {
  return (
    <div className="book-container">
      <ul className="book-list">
        <li>{title}</li>
        <li>{author}</li>
        <li>{Catagory}</li>
      </ul>
      <button type="btn" className="delete">Delete</button>
    </div>
  );
}

Book.propTypes = {
title: PropTypes.string.isRequired,
author: PropTypes.string.isRequired,
Catagory: PropTypes.string.isRequired,
};

export default Book;

