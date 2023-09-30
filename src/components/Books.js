import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { getBooks } from '../redux/books/booksSlice';

function Books() {
  const {
    books, isLoading, isError, isSuccessful,
  } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, isSuccessful]);
  if (isLoading) {
    return <p>Loading....Please wait</p>;
  }
  if (isError) {
    return <p>Sorry, please try again</p>;
  }
  if (books.length === 0) return <p>Sorry, no books available at the moment</p>;

  return <Book books={books} />;
}

export default Books;
