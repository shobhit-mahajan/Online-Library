import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === parseInt(id))
  );

  return book ? (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Description: {book.description}</p>
      <p>Rating: {book.rating}</p>
      <Link to="/browse" className="text-blue-500 mt-4 inline-block">Back to Browse</Link>
    </div>
  ) : (
    <div>Book not found</div>
  );
};

export default BookDetail;
