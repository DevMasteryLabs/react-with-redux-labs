import { combineReducers } from "redux";

import walletReducer from "./walletReducer";
import playlistReducer from "./playlistReducer";

const rootReducer = combineReducers({
    wallet: walletReducer,
    playlist: playlistReducer
})

export default rootReducer;