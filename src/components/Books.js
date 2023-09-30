import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function Books() {
  const books = useSelector((state) => state.books.books);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default Books;
