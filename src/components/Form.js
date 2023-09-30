import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/booksSlice';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBooks({
        title,
        author,
        item_id: Math.random().toString(),
      }));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Add Book Title" name="title" />
        <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Add Author" name="author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Form;
