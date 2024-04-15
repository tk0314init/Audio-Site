import React from "react";
import { Plane, MeshReflectorMaterial } from '@react-three/drei'

const Floor = () => {

    return (
      <Plane args={[40, 40]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <MeshReflectorMaterial
          blur={[500, 500]}
          resolution={1024}
          mixBlur={1}
          mixStrength={1}
          depthScale={0.1}
          minDepthThreshold={0.8}
          maxDepthThreshold={1}
          color="#101017" 
          metalness={1}
        />
      </Plane>

    );
  };


export default Floor