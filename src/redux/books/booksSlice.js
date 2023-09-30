/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/X1MGGnp9c23ZRQ5ZmbEK/books';

const initialState = {
  books: [],
  isLoading: false,
  isError: false,
  isSuccessful: false,
};

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(apiURL);
  return response.data;
});

export const addBooks = createAsyncThunk('books/addBooks', async ({ item_id, title, author }) => {
  const response = await axios.post(apiURL, {
    item_id,
    title,
    author,
    category: 'fiction',
  });
  return response.data;
});

export const removeBooks = createAsyncThunk('books/removeBooks', async (item_id) => {
  const response = await axios.delete(`${apiURL}/${item_id}`);
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(getBooks.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(addBooks.pending, (state) => {
      state.isSuccessful = false;
    });
    builder.addCase(addBooks.fulfilled, (state) => {
      state.isSuccessful = true;
    });
    builder.addCase(addBooks.rejected, (state) => {
      state.isSuccessful = false;
    });
    builder.addCase(removeBooks.pending, (state) => {
      state.isSuccessful = false;
    });
    builder.addCase(removeBooks.fulfilled, (state) => {
      state.isSuccessful = true;
    });
    builder.addCase(removeBooks.rejected, (state) => {
      state.isSuccessful = false;
    });
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
