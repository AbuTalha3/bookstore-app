import React from 'react';
import Book from './Book';
import Form from './Form';

function Books() {
  const books= [
    {
      id: 1,
      title: "Art of Love",
      author: "Abu Talha",
      category: "Art",
    },
    {
      id: 2,
      title: "Art of Love",
      author: "Abu Talha",
      category: "Art",
    }
  ]
  return (
    <div>
      <ul>
        {books.map(book =>(
          <Book key={book.id} title={book.title} author={book.author} category={book.category} />
        ))}
      </ul>
      <div>
        <Form />
      </div>
    </div>
  )
}

export default Books
