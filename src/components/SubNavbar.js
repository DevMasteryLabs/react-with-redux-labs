import { useSelector } from "react-redux";

const SubNavbar = () => {
  const walletSelector = state => state.wallet;
  const playlistSelector = state => state.playlist;
  const wallet = useSelector(walletSelector);
  const playlist = useSelector(playlistSelector);
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark py-0">
      <div className="container">
        <span className="navbar-text">
          My Wallet Amount: <span className="badge bg-light text-dark">${wallet}</span>
        </span>
        <span className="navbar-text">
          My Playlist Count: <span className="badge bg-primary">{playlist.length}</span>
        </span>
      </div>
    </nav>
  );
}

export default SubNavbar;