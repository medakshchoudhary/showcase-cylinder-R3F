import { useTexture } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'

const Cylinder = () => {
    let tex = useTexture("./image.png")

  return (
    <mesh>
      <cylinderGeometry args={[1,1,1,30,30,true]} />
      <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
    </mesh>
  )
}

export default Cylinder