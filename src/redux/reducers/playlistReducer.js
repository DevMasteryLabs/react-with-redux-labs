const initialState = ["Take Five", "Claire de Lune"];

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "songs/addSong": {
      return [...state, action.payload];
    }
    case "songs/removeSong": {
      return state.filter((song, index) => index !== action.payload.index);
    }
    case "songs/removeAll": {
      return [];
    }
    default: {
      return state;
    }
  }
}

export default playlistReducer;