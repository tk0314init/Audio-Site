import React, { useState, useEffect } from 'react';

function PlayPauseButton({isPlaying, togglePlayPause}) {

  const Play = () => {
    return(
      <div style={{width: "40px", height:"40px", borderRadius:"100%", backgroundColor:"#fff", display:"flex", justifyContent:"center", alignItems:"center", padding: "8px"}}>
        <div style={{width: "4px", height:"16px", backgroundColor:"#333333", marginRight:"5px"}}></div>
        <div style={{width: "4px", height:"16px", backgroundColor:"#333333"}}></div>
      </div>
    )
  }


  const Pause = () => {
    return(
      <div style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "9px 0 9px 15px",
          borderColor: "transparent transparent transparent #333",
          marginLeft: "4px"
        }}/>
      </div>
    )
  }



    
  return (
    <>
        <button onClick={togglePlayPause}>
            {isPlaying ? <Play /> : <Pause /> }
        </button>
    </>
  )
}

export default PlayPauseButton