import { Link } from 'react-router-dom';
import { RiBook2Line } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdBook } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";


const Navbar = () => (
  <nav className="bg-[#f5ebe0]  p-4">
    <div className="container mx-auto flex justify-between">
    <div className="left-side flex items-center justify-center text-[#d4a276]">
    <RiBook2Line size={36}/>
    <h1 className="text-lg font-bold mx-5 ">Online Library</h1>
    </div>
<div className="right-side mx-5 text-slate-600">
<ul className="flex items-center justify-center space-x-8">
        <li className='hover:text-[#d4a276] '><Link className='flex items-center justify-center' to="/">
        <FaHome className='mx-2' size={20}/>
        Home</Link></li>
        <li className='hover:text-[#d4a276]'><Link className='flex items-center justify-center' to="/browse">
        <MdBook className='mx-2' size={20}/>
        Browse Books</Link></li>
        <li className='hover:text-[#d4a276]'><Link  className='flex items-center justify-center' to="/add">
        <IoIosAddCircle className='mx-2' size={20}/>
        Add Book</Link></li>
      </ul>
</div>
      
    </div>
  </nav>
);

export default Navbar;
