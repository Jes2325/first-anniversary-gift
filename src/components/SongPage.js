// src/components/SongPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function SongPage() {
  const { songId } = useParams();

  const songs = [
    {
      id: '1',
      title: 'Song 1',
      src: '/audio/song1.mp3',
      description: 'This is the first song.',
    },
    {
      id: '2',
      title: 'Song 2',
      src: '/audio/song2.mp3',
      description: 'This is the second song.',
    },
    {
      id: '3',
      title: 'Song 3',
      src: '/audio/song3.mp3',
      description: 'This is the third song.',
    },
  ];

  const song = songs.find((s) => s.id === songId);

  if (!song) {
    return <div>Song not found!</div>;
  }

  return (
    <div className="song-container">
      <h1>{song.title}</h1>
      <audio controls>
        <source src={song.src} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p>{song.description}</p>

      {/* Link to go back to the Home Page */}
      <Link to="/" className="back-to-home">Back to Home</Link>
    </div>
  );
}

export default SongPage;

