import React, { useState, useEffect, useRef } from 'react';
import TrackSlider from './TrackSlider';
import PlayPauseButton from './PlayPauseButton';
import VolumeSlider from './VolumeSlider';
import ToPreviousButton from './ToPreviousButton';
import ToNextButton from './ToNextButton';
import './styles.css';


function AudioControl({contentIndex, isPlaying, setIsPlaying, toSkipNext, toSkipPrevious}) {
    const song1 = '/music/song1.mp3';
    const song2 = '/music/song2.mp3';
    const song3 = '/music/song3.mp3';
    const AudioList = [song1, song2, song3]
    const titles = ["Song#1", "Song#2", "Song#3"]

    const audioRef = useRef(new Audio(AudioList[contentIndex]));

    const togglePlayPause = () => {
      const prevValue = isPlaying;
      setIsPlaying(!prevValue);
  
      if (!prevValue) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    };

    useEffect(() => {
        audioRef.current.src = AudioList[contentIndex];
        audioRef.current.load(); 

        setIsPlaying(true);
        audioRef.current.play();

    }, [contentIndex]);


    return (
        <div className='container'>
            <TrackSlider audioRef={audioRef}/>
            <div className='row'>
                <h1 style={{color:"#D1D1DF", width: "96px"}}>{titles[contentIndex]} </h1> 
                <div style={{display:'flex', width:"220px", justifyContent:"space-around", alignItems: "center"}}>
                  <ToPreviousButton toSkipPrevious={toSkipPrevious}/>
                  <PlayPauseButton isPlaying={isPlaying} togglePlayPause={togglePlayPause}/>
                  <ToNextButton toSkipNext={toSkipNext}/>
                </div>
                <VolumeSlider audioRef={audioRef}/>
            </div>
        </div>
      );
}

export default AudioControl