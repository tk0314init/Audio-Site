import * as THREE from 'three'
import React, { useRef, useEffect, useState } from 'react';

import url from '/video.mp4'
import { useFrame } from '@react-three/fiber';


function VideoBox({contentIndex, isPlaying}) {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    return vid;
  },)

  const boxRef = useRef()


  useEffect(() => {
    if (contentIndex == 2) {
      if (isPlaying) {
        void video.play()
      } else {
        video.pause()
      }
    }
    else {
      video.pause()
      video.currentTime = 0;
    }
  } , [video, contentIndex, isPlaying])


  useFrame((state) => {
    if (contentIndex == 2 && isPlaying) {
      if (boxRef.current) {
          boxRef.current.rotation.x = Math.sin(state.clock.elapsedTime / 2)
          boxRef.current.rotation.y = boxRef.current.rotation.y + 0.001
          boxRef.current.rotation.z = boxRef.current.rotation.z - 0.001
      }
    }
})


  return (
    <mesh ref={boxRef} position={[-4.5, 2 , 4]} rotation={[0.3, 0, 0.4]}> 
      <boxGeometry args={[2.3, 2.3, 2.3]} />
        <meshStandardMaterial emissive={'#84edcd'} emissiveIntensity={1.6}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
    </mesh>
  )
}

export default VideoBox