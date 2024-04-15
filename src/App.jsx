import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, extend, useThree } from '@react-three/fiber';
import { OrbitControls, SpotLight, Html, Environment, MeshReflectorMaterial, useHelper } from '@react-three/drei';
extend({ OrbitControls });


import { AudioControl, CameraControll, Scene } from './components';





const App = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);




  const toSkipNext = () => {
    const nextIndex = (contentIndex + 1) % 3;
    setContentIndex(nextIndex);
};

const toSkipPrevious = () => {
  const nextIndex = (contentIndex - 1 +3) % 3;
  setContentIndex(nextIndex);
  console.log(contentIndex)
};

  return (
    <>
      <Canvas style={{ position: 'fixed'}} dpr={[1, 1.5]} shadows camera={{ fov: 48, position: [0, 0.1, 0] }}>

        {/* Scene */}
        <Suspense fallback={null}>
          <group position={[0, -0.8, 0]}>
            <Scene contentIndex={contentIndex} isPlaying={isPlaying}/>
          </group>
        </Suspense>

        {/* Environment */}
        <fog attach="fog" args={['#101017', 0, 15]} />
        <color attach="background" args={['#101017']} />
        <ambientLight intensity={1}/>

        {/* Camera */}
        <CameraControll contentIndex={contentIndex}/>
      </Canvas>

      <AudioControl contentIndex={contentIndex} isPlaying={isPlaying} setIsPlaying={setIsPlaying} toSkipNext={toSkipNext} toSkipPrevious={toSkipPrevious}/>

    </>
  )
}

export default App
