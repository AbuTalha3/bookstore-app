import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooks } from '../redux/books/booksSlice';

function Books() {
  const {
    books, isLoading, isError, isSuccessful,
  } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, isSuccessful]);
  if (isLoading) {
    return <h3>Loading please wait</h3>;
  }
  if (isError) {
    return <h3>Error Loading</h3>;
  }
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
            item_id={book.item_id}
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
