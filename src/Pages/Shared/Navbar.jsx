import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add-book">Add Book</NavLink>
            </li>
            <li>
              <NavLink to="/all-books">All Books</NavLink>
            </li>
            <li>
              <NavLink to="/borrowed-books">Borrowed Books</NavLink>
            </li>
          </ul>
        </div>
        <div className="text-xl flex justify-center items-center">
          <img width="50px" src={logo} alt="" />
          <span className="mt-4 font-bold">Bookista</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add-book">Add Book</NavLink>
          </li>
          <li>
            <NavLink to="/all-books">All Books</NavLink>
          </li>
          <li>
            <NavLink to="/borrowed-books">Borrowed Books</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
              <>
              <img className="rounded-full" width="40px" src={user.photoURL} alt="" />
              <p><span className="me-4 text-primary">{user.email}</span></p>
              <NavLink className="btn btn-neutral" onClick={handleLogOut}>LogOut</NavLink>
              </>
        ) : (
              <NavLink className="btn btn-neutral" to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
