import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setSongs={setSongs}
            audioRef={audioRef}
            key={song.id}
            id={song.id}
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
