import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import { OrbitControls } from '@react-three/drei';
import { easing } from 'maath';



const CameraControll = ({contentIndex}) => {
  const { camera } = useThree();
  const orbitRef = useRef(); 
  const LookAtPosition1 = new Vector3(0,0.2,-5);
  const LookAtPosition2 = new Vector3(5,0.2,4); 
  const LookAtPosition3 = new Vector3(-5,0.2,4);
  const [targetLookAt, setTargetLookAt] = useState(LookAtPosition1);

  useEffect(() => {
    camera.position.set(0, 0, 0);

    switch (contentIndex) {
      case 0:
        setTargetLookAt(LookAtPosition1);
        break;
      case 1:
        setTargetLookAt(LookAtPosition2);
        break;
      case 2:
        setTargetLookAt(LookAtPosition3);
        break;
      default:
        setTargetLookAt(LookAtPosition1);
    }
  }, [camera, contentIndex]);


  useFrame(() => {
    if (!orbitRef.current) return;

    orbitRef.current.target.lerp(targetLookAt, 0.05);
    orbitRef.current.update();
  });

  return (
    <>
      <OrbitControls 
        ref={orbitRef} 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 1.9}
      />;
    </>
  )
};


export default CameraControll