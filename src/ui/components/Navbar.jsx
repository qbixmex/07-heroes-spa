import { useContext } from "react";
import { AuthContext } from "../../auth";
import { useNavigate, Link, NavLink } from "react-router-dom";

export const Navbar = () => {

  const { user, logout } = useContext( AuthContext );
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">

      <Link className="navbar-brand" to="/">
        Associations
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}
            to="/marvel"
          >Marvel</NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}
            to="/dc"
          >DC</NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}
            to="/search"
          >Search</NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span id="username" className="nav-item nav-link text-warning">{ user?.name }</span>
          <button
            id="logout"
            className="nav-item nav-link btn"
            style={{ boxShadow: 'none' }}
            onClick={ handleLogout }
          >Logout</button>
        </ul>
      </div>
    </nav>
  );
};