import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { motion, useAnimation } from "framer-motion";
// Import 3D model
import BNW from "../assets/bad_vibes_in_ny.glb";

function Model(props) {
  const { scene } = useGLTF(BNW);
  const modelRef = useRef();
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      scale: [5, 5, 5],
      transition: {
        duration: 20,
        delay: 10,
        ease: "easeInOut",
      },
    });
  }, []);

  return (
    <motion.primitive 
      object={scene} 
      ref={modelRef} 
      {...props} 
      initial={{ scale: 0 }} 
      animate={controls} 
      scale={[5, 5, 5]} 
    />
  );
}

const ObjModel = () => {
  return (
    <div>
      <div className="flex items-justify-center opacity-70  ">
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ fov: 10, position: [50, 50, 50] }} 
          className="md:mt-[100px] "
          style={{
            height: "1000px",
            width: "1000px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <color />
          <PresentationControls zoom={1} speed={10}>
            <Stage environment={"sunset"} intensity={0.5}>
              <Model position={[0, -0.5, 0]}  className=" "/> 
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
    </div>
  );
};

export default ObjModel;