import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex  justify-between px-4 py-3 bg-white shadow-md">
      <ul className="flex items-center flex-shrink-0 space-x-6 ">
        <li >
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
