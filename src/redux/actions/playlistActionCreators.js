export const addSong = (songTitle) => ({
    type: "songs/addSong",
    payload: songTitle 
})

export const removeSong = (songIndex) => ({
    type: "songs/removeSong",
    payload: {
        index: songIndex
    } 
})

export const removeAllSongs = () => ({
    type: "songs/removeAll" 
})