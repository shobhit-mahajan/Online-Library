import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter((book) => {
    return (
      (!category || book.category.toLowerCase() === category.toLowerCase()) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Browse Books</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        className="border p-2 mb-4 w-full"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="space-y-2">
        {filteredBooks.map((book) => (
          <li key={book.id} className="p-4 border rounded">
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p>Author: {book.author}</p>
            <Link to={`/book/${book.id}`} className="text-blue-500">View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooks;
