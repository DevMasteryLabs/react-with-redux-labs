
const SubNavbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark py-0">
      <div className="container">
        <span className="navbar-text">
          My Wallet Amount: <span className="badge bg-light text-dark">$0</span>
        </span>
        <span className="navbar-text">
          My Playlist Count: <span className="badge bg-primary">2</span>
        </span>
      </div>
    </nav>
  );
}

export default SubNavbar;