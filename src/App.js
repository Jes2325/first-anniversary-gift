import React, { useState } from "react";
import songs from "./songs";
import "./App.css";

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  const Home = () => (
    <div className="home-container">
      <h3>
        Happy One Year Anniversary, my love! There were many ideas I had on what to gift you, but this I think is a nice touch. I was originally going to hand write all this
        and make it into a little book for you. But then, I though about putting my computer science skills to the test (ngl, chatgpt and I were locked in for this one 🤞). 

        <br /><br />

        Remember that Spotify playlist I told you not to look at or touch? Well, this was the reason why. There are 12 songs in that playlist which are now here on this website.
        Each song is for each month that we've been together. The catch? Each song is in Tagalog. So, each song has the original lyrics as well as the English translation. Then, 
        at the bottom of the lyrics is why I chose this song for us. I hope you like you gift, baby. I love you, you and only you. Happy one year, my love❤️!
      </h3>
    </div>
  );

  return (
    <div className="App">
      <header className="header">
        <h1>❤️ Happy One Year Anniversary, My Love ❤️</h1>
        <div className="tabs">
          {songs.map((song, index) => (
            <React.Fragment key={song.id}>
              {index === 0 && (
                <span
                  className="home-tab"
                  onClick={() => setCurrentSong(null)}
                  style={{ cursor: "pointer", marginRight: "5px", fontSize: "1.5rem" }}
                  title="Back to Home"
                >
                  🏠
                </span>
              )}

              <button
                className={currentSong?.id === song.id ? "tab-link active" : "tab-link"}
                onClick={() => setCurrentSong(song)}
              >
                {song.tabName}
              </button>

              {index === songs.length - 1 && (
                <span
                  className="home-tab"
                  onClick={() => setCurrentSong(null)}
                  style={{ cursor: "pointer", marginLeft: "5px", fontSize: "1.5rem" }}
                  title="Back to Home"
                >
                  🏠
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </header>

      <main>
        {!currentSong ? (
          <Home />
        ) : (
          <div className="song-container">
            <h1 className="song-title">{currentSong.title}</h1>
            <h2 className="song-artist">{currentSong.artist}</h2>
            <audio key={currentSong.id} controls>
              <source src={currentSong.file} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            {/* Lyrics side by side */}
            <div className="lyrics-container">
              <div className="lyrics-left">
                <h3>Original Lyrics</h3>
                <pre>{currentSong.lyricsOriginal}</pre>
              </div>
              <div className="lyrics-right">
                <h3>Translated Lyrics</h3>
                <pre>{currentSong.lyricsTranslated}</pre>
              </div>
            </div>

            {/* Message section */}
            {currentSong.message && (
              <div className="lyrics-message">
                <h3>Why this song? 🤔</h3>
                <p>{currentSong.message}</p>
              </div>
            )}

            <button className="back-to-home" onClick={() => setCurrentSong(null)}>
              🏠 Back to Home
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
