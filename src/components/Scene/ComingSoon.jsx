import React from 'react'
import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'



function ComingSoon() {

  useFrame

  return (
    <>
      <mesh position={[4,0.5,3]} rotation={[0, -2.2, 0]}>
      <Text fontSize={0.2} letterSpacing={-0.02}>Coming Soon</Text>
      </mesh>
    </>
  )
}

export default ComingSoon