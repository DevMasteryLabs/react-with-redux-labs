import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="navbar-nav">
          <NavLink exact className="nav-link" to="/">
            Home <i className="bi bi-house"></i>
          </NavLink>
          <NavLink className="nav-link" to="/wallet">
            My Wallet <i className="bi bi-wallet"></i>
          </NavLink>
          <NavLink className="nav-link" to="/playlist">
            My Playlist <i className="bi bi-music-note-list"></i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;