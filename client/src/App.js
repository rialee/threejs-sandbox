import React from "react";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import "./App.css"

function App() {

  function Box () {
    return (
      <mesh>
        <boxBufferGeometry attach="geometry"/>
        <meshLambertMaterial attach="material" color="hotpink"/>
      </mesh>
    );
  }

  return (
        <Canvas>
          <OrbitControls/>
          <ambientLight intensity={0.5}/>
          <spotLight
            position ={[10, 15, 10]} angle={0.3}
          />
          <Stars/>
          <Box/>
        </Canvas>
  )

}

export default App;
