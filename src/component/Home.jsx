import { FiBook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <div className="container mx-auto p-8 flex items-center justify-center flex-col">
      <h1 className="text-5xl font-bold mb-4 m-8 pb-5 text-[#d4a276]">
        Welcome to the Online Library
      </h1>
      <p className="mb-6 text-xl my-2 pb-5 text-slate-400">
        Explore our collection of books across various categories!
      </p>
    </div>
    <div className="inner-container mx-20">
      <h2 className="text-2xl font-semibold mb-2">Browse By Category</h2>
      <ul className=" flex items-center justify-evenly my-8">
        <li className="w-2/4 h-24 bg-[#f3d5b5] text-[#6f4518] rounded-lg flex items-center justify-center mx-2 text-xl font-semibold">
          <Link
            to="/books/fiction"
            className="flex items-center justify-between  p-5"
          >
            Fiction <FiBook className="mx-5" />
          </Link>
        </li>

        <li className="w-2/4 h-24 bg-[#f3d5b5] text-[#6f4518] rounded-lg flex items-center justify-center mx-2 text-xl font-semibold">
          <Link
            to="/books/sci-fi"
            className="flex items-center justify-between  p-5"
          >
            Sci-Fi
            <FiBook className="mx-5" />
          </Link>
        </li>

        <li className="w-2/4 h-24 bg-[#f3d5b5] text-[#6f4518] rounded-lg flex items-center justify-center mx-2 text-xl font-semibold">
          <Link
            to="/books/non-fiction"
            className="flex items-center justify-between  p-5"
          >
            Non-Fiction <FiBook className="mx-5" color="" />
          </Link>
        </li>
      </ul>
    </div>
  </>
);

export default Home;
