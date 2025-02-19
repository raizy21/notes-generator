import logo from "../assets/notes.jpg"; //import logo img
import { Link } from "react-router"; //import link from react-router

const Navbar = () => {
  return (
    <div className="navbar bg-accent">
      <div className="navbar-start">
        <img src={logo} alt="logo" className="w-28 ml-10 hover:scale-105" />
        <Link to="/">
          <div className="btn btn-ghost text-xl text-primary ml-2 hover:text-2xl hover:underline">
            Notes Generator
          </div>
        </Link>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='edit' className="btn text-primary mr-12">Edit Notes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
