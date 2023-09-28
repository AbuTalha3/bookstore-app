import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
  status: 'Under Construction',
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    category: (state) => {
      state.status = 'Under Construction';
    },
  },
});

export default categoriesSlice.reducer;
export const { category } = categoriesSlice.actions;
