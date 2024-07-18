import React from 'react'
import Sound from "react-sound";
import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import music from '../utils/music';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';

const MusicPlayer = () => {

    const [musicNumber, setMusicNumber] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const context = require.context("../music", false, /\.mp3$/);
    const songs = context.keys().map(context);



    const handleStart = () => {
        if (isPlaying) {
            setIsPlaying(false)
        } else {
            setIsPlaying(true)
        }
    }

    const handleNextSong = () => {
        if (musicNumber === 5) {
            setMusicNumber(0);
        } else {
            setMusicNumber(musicNumber + 1);
        }
    }

    const handlePreviousSong = () => {
        if (musicNumber === 0) {
            setMusicNumber(5);
        } else {
            setMusicNumber(musicNumber - 1);
        }
    }
    return (

        <div>
            <div className="music-container">
                <img className="img-song" src={music[musicNumber].image} alt="imagine melodie" />
                <p className="song-name">{music[musicNumber].name}</p>
                <p className="song-artist">{music[musicNumber].artist}</p>
                <div className="music-button-container">
                    <button onClick={handlePreviousSong} className="nav-button"><MdSkipPrevious size={30} /></button>
                    <button onClick={handleStart} className="play-button">
                        {!isPlaying ? <FaPlay /> : <FaPause />}
                    </button>

                    <button onClick={handleNextSong} className="nav-button"> <MdSkipNext size={30} /></button>
                </div>

            </div>

            <Sound
                url={songs[musicNumber]}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
                loop={true}
                volume={100}
                preload="auto"
            />
        </div>
    )
}

export default MusicPlayer
