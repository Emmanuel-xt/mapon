import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
const school = require("../../../assets/models/entity.glb");
// This component will load your GLTF model
const SchoolModel = () => {
  const gltf = useGLTF(school); // Replace with your actual path
  return <primitive object={gltf.scene} scale={1} />;
};

const App = () => {
  return (
    <Canvas style={{ flex: 1 }}>
      {/* Add ambient light */}
      <ambientLight intensity={0.5} />

      {/* Add directional light */}
      <directionalLight position={[5, 5, 5]} />

      {/* Use Suspense to load the model */}
      <Suspense fallback={null}>
        <SchoolModel />
      </Suspense>

      {/* Add orbit controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default App;
