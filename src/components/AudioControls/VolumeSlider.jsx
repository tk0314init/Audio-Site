import React, { useState, useEffect } from 'react';


function VolumeSlider({audioRef}) {
    const [volume, setVolume] = useState(0.2);

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
      };

    useEffect(() => {
        audioRef.current.volume = volume;
    },[])


  return (
    <input
    style={{ width:"96px"}}
    className={"volume-control"}
    type="range"
    min="0"
    max="0.5"
    step="0.01"
    value={volume}
    onChange={handleVolumeChange}
      />
  )
}

export default VolumeSlider