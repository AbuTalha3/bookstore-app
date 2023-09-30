/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/X1MGGnp9c23ZRQ5ZmbEK/books';

const initialState = {
  books: [],
  isLoading: false,
  isError: false,
  isSuccessful: false,
};

const changeToObjectData = (data) => {
  const newDataArray = [];
  data.forEach((element) => {
    const newObject = {
      id: element[0],
      title: element[1][0].title,
      author: element[1][0].author,
      category: element[1][0].category,
    };
    newDataArray.push(newObject);
  });
  return newDataArray;
};

export const getBooks = createAsyncThunk('book/getBooksData', async () => {
  try {
    const dataStream = await axios(url);
    let data = Object.entries(dataStream.data);
    data = changeToObjectData(data);
    return data;
  } catch (error) {
    return error;
  }
});

export const addBooks = createAsyncThunk('book/addBooks', async ({ id, title, author }) => {
  try {
    const dataStream = await axios.post(url, {
      item_id: id,
      title,
      author,
      category: 'Action',
    });
    return dataStream;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk('book/deleteBook', async (id) => {
  try {
    const dataStream = await axios.delete(`${url}/${id}`);
    return dataStream;
  } catch (error) {
    return error;
  }
});

const booksSlice = createSlice({
  name: 'book',
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

    builder.addCase(deleteBook.pending, (state) => {
      state.isSuccessful = false;
    });

    builder.addCase(deleteBook.fulfilled, (state) => {
      state.isSuccessful = true;
    });

    builder.addCase(deleteBook.rejected, (state) => {
      state.isSuccessful = false;
    });
  },
});

export default booksSlice.reducer;
