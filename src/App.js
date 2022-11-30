import React from "react";
import { Canvas } from "@react-three/fiber";
import './index.css'
import Experience from './Experience'

function App() {
  return (
    <>
      <Canvas>
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
