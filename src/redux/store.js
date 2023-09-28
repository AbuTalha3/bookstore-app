import { configureStore } from '@reduxjs/toolkit';
import booksReducer from  './books/booksSlice';
import CategoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    category: categoriesReducer,
  },
});

export default store;
