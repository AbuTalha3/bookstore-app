import React from 'react';
import Book from './Book';
import AddBooks from './AddBooks';

function BookList() {
  const books = [
    {
      id: 1,
      title: 'The Art of the Book',
      author: 'John Smith',
      Catagory: 'Arts',
    },
    {
      id: 2,
      title: 'The Art of Love',
      author: 'John Doe',
      Catagory: 'Love',
    },
    {
      id: 1,
      title: 'The Art of War',
      author: 'Sun tsu',
      Catagory: 'War',
    },
  ];

  return (
    <div>
      <ul className='book-list'>
        {books.map((book) => (
<Book 
key = {book.id}
title= {book.title}
author={book.author}
Catagory={book.Catagory} />

    ))}
     </ul>
     <div>
      <AddBook />
     </div>
  </div>
  );
}

export default BookList;