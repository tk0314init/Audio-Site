import React from 'react'
import Floor from './Floor'
import ComingSoon from './ComingSoon'
import VideoBox from './VideoBox'
import Trains from './Trains'

function Scene({contentIndex, isPlaying}) {
  return (
    <>
        <Floor/>
        <VideoBox contentIndex={contentIndex} isPlaying={isPlaying}/>
        <Trains contentIndex={contentIndex} isPlaying={isPlaying}/>
        <ComingSoon/>
    </>
  )
}

export default Scene