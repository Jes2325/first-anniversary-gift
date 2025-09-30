// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const songs = [
    { title: 'Song 1', path: '/song/1' },
    { title: 'Song 2', path: '/song/2' },
    { title: 'Song 3', path: '/song/3' },
  ];

  return (
    <div className="header">
      <h1>Music Player</h1>
      <div className="tabs">
        {songs.map((song, index) => (
          <Link to={song.path} key={index} className="tab-link">
            {song.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
