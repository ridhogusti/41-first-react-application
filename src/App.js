import React from "react";
import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping, sRGBEncoding } from "three";
import "./index.css";
import Experience from "./Experience";

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [3, 2, 6],
};
function App() {
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          outputEncoding: sRGBEncoding,
        }}
        camera={cameraSettings}
      >
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
