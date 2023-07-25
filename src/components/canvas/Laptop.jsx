import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Laptop = ({isMobile}) => {
  const earth = useGLTF("./macbook_pro/scene.gltf");

  return (
    <primitive object={earth.scene}
    scale={isMobile ? 5.7 : 12.5}
        // position={isMobile ? [0, -4, 0] : [0, -2.2,0]}
    // scale={12.5}
     position-y={-1} rotation-y={0} />
  );
};

const LaptopCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
        //   minPolarAngle={Math.PI / 2}
        />
        <Laptop isMobile={isMobile}  />
        <hemisphereLight intensity={0.5} groundColor='black' />
      <spotLight
        position={[-20, 25, -100]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default LaptopCanvas;
