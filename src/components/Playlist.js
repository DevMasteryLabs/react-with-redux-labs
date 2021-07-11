import { useState } from "react";


const Playlist = () => {
  const [songs, setSongs] = useState(["Take Five", "Claire de Lune"]);
  const [selectedSongIndex, setSelectedSongIndex] = useState(null);
  const [songTitle, setSongTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSongs(songs => [...songs, songTitle.trim()]);
    setSongTitle("");
  }

  function handleInputChange(e) {
    setSongTitle(e.target.value);
    setSelectedSongIndex(null);
  }

  function handleRemove() {
    setSongs(songs => songs.filter((song, index) => index !== selectedSongIndex));
    setSelectedSongIndex(null);
  }

  function handleRemoveAll() {
    setSongs([]);
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
            {songs.map((song, index) => (
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
            (songs && songs.length > 0 && selectedSongIndex === null) && (
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