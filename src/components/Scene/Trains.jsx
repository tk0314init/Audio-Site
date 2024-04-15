import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Train = React.memo(({ model, position, speed, amplitude, isPlaying }) => {
    const ref = useRef();
    useFrame(state => {
        if (ref.current) {
            ref.current.position.z = Math.sin(state.clock.elapsedTime * speed) * amplitude;
        }
    });

    return <primitive object={model.scene.clone(true)} ref={ref} scale={[1, 1, 1]} rotation={[0, 0, 0]} position={position} />;
});

const Trains = ({ contentIndex, isPlaying }) => {
    const gltf1 = useGLTF('/assets/train.glb', true);
    const gltf2 = useGLTF('/assets/train.glb', true);


    return contentIndex === 0 ? (
        <>
            <Train model={gltf1} position={[-2.4, 0, -15]} speed={1} amplitude={45} isPlaying={isPlaying}/>
            <Train model={gltf2} position={[2.4, 0, -15]} speed={0.8} amplitude={30} isPlaying={isPlaying}/>
        </>
    ) : null;
};

export default Trains;