import logo from "../assets/notes.jpg";

const Navbar = () => {
  return (
    <div className="navbar bg-accent">
      <div className="navbar-start">
        <img src={logo} alt="logo" className="w-28 ml-10" />
        <a className="btn btn-ghost text-xl text-primary ml-2">
          Notes Generator
        </a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="btn text-primary mr-12">Edit Notes</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
