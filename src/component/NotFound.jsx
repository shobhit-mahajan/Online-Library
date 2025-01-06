import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="container mx-auto p-8">
    <h1 className="text-2xl font-bold">Page Not Found</h1>
    <Link to="/" className="text-blue-500">Go back to Home</Link>
  </div>
);

export default NotFound;
