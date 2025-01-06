import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', description: 'A classic science fiction novel.', rating: 4.8 },
    { id: 2, title: '1984', author: 'George Orwell', category: 'Fiction', description: 'A dystopian novel.', rating: 4.6 },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
