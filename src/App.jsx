import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import BrowseBooks from './component/BrowseBook';
import BookDetail from './component/BookDetail';
import AddBook from './component/AddBook';
import NotFound from './component/NotFound';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<BrowseBooks />} />
      <Route path="/books/:category" element={<BrowseBooks />} />
      <Route path="/book/:id" element={<BookDetail />} />
      <Route path="/add" element={<AddBook />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
