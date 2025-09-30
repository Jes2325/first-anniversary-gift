// src/components/Tabs.js
import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';

function Tabs() {
  // Song data: name, mp3 source, description
  const songs = [
    {
      title: 'Song 1',
      src: '/audio/Araw_Gabi',  // Update with your actual file paths
      description: 'This is the first song.'
    },
    {
      title: 'Song 2',
      src: '/audio/song2.mp3',
      description: 'This is the second song.'
    },
    {
      title: 'Song 3',
      src: '/audio/song3.mp3',
      description: 'This is the third song.'
    }
  ];

  // Track the selected song tab
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="tabs-container">
      {/* Tab buttons */}
      <div className="tabs">
        {songs.map((song, index) => (
          <button
            key={index}
            className={selectedTab === index ? 'active' : ''}
            onClick={() => setSelectedTab(index)}
          >
            {song.title}
          </button>
        ))}
      </div>

      {/* Audio player and description */}
      <AudioPlayer
        audioSrc={songs[selectedTab].src}
        description={songs[selectedTab].description}
      />
    </div>
  );
}

export default Tabs;