import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import Cylinder from './Cylinder'

const App = () => {
  return <Canvas camera={{fov:35}}>
    {/* use "drei three js" for orbit controls */}
    <OrbitControls /> 
    <ambientLight />
    <Cylinder />
  </Canvas>
}

export default App