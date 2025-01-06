import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/bookSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...form, id: Date.now() }));
    navigate('/browse');
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="border p-2 mb-4 w-full"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Author"
          className="border p-2 mb-4 w-full"
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          className="border p-2 mb-4 w-full"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          className="border p-2 mb-4 w-full"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        ></textarea>
        <input
          type="number"
          placeholder="Rating"
          className="border p-2 mb-4 w-full"
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
