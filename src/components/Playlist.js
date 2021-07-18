import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addSong, removeSong, removeAllSongs } from "../redux/actions/playlistActionCreators"


const Playlist = () => {
  const playlist = useSelector(state => state.playlist);
  const dispatch = useDispatch();

  const [selectedSongIndex, setSelectedSongIndex] = useState(null);
  const [songTitle, setSongTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const title = songTitle.trim();
    if (title !== "") {
      dispatch(addSong(title));
    }
    setSongTitle("");
  }

  function handleInputChange(e) {
    setSongTitle(e.target.value);
    setSelectedSongIndex(null);
  }

  function handleRemove() {
    dispatch(removeSong(selectedSongIndex));
    setSelectedSongIndex(null);
  }

  function handleRemoveAll() {
    dispatch(removeAllSongs());
    setSelectedSongIndex(null);
  }

  return (
    <div className="container mt-2">
      <h3 className="text-center py-4">My Playlist</h3>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-4"
              value={songTitle}
              onChange={handleInputChange}
            />
            <div className="d-grid gap-2">
              <button
                type="submit"
                className={`btn btn-success ${!songTitle.trim() ? "disabled" : ""}`}
              >
                Add
              </button>
              {
                (selectedSongIndex !== null) && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleRemove}
                  >
                    Remove
                  </button>
                )
              }
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <ul className="list-group mt-5">
            {playlist.map((song, index) => (
              <li
                key={index}
                className={`list-group-item ${index === selectedSongIndex ? "active" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedSongIndex(index)}
              >
                {song}
              </li>
            ))}
          </ul>
          {
            (playlist && playlist.length > 0 && selectedSongIndex === null) && (
              <button
                type="button"
                className="btn btn-danger d-block ms-auto my-2"
                onClick={handleRemoveAll}
              >
                Remove All
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Playlist;