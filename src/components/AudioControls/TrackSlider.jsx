import React, { useState, useEffect } from 'react';

function TrackSlider({audioRef}) {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const handleTimeSliderChange = (e) => {
      const time = e.target.value;
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    };

    useEffect(() => {
      const audio = audioRef.current;
  
      const updateDuration = () => {
        setDuration(audio.duration);
      };
  
      const updateTime = () => {
        setCurrentTime(audio.currentTime);
      };
  
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('timeupdate', updateTime);
  
      return () => {
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('timeupdate', updateTime);
      };
    }, [audioRef]);


  return (
    <>
        <input
        style={{
            width: "100%",
            margin: "12px",
        }}
        type="range"
        value={currentTime}
        step="1"
        min="0"
        max={duration}
        onChange={handleTimeSliderChange}
        />
    </>
  )
}

export default TrackSlider