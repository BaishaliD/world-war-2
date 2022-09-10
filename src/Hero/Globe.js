import * as THREE from "three";
import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import earthImg from "../assets/world.jpg";
import bumpImg from "../assets/NormalMap.png";
// import "./styles.css";

RectAreaLightUniformsLib.init();

function Earth() {
  const ref = useRef();
  const [earth, bump] = useLoader(THREE.TextureLoader, [earthImg, bumpImg]);

  let targetX = 0;
  let targetY = 0;

  useFrame(({ clock, mouse }) => {
    ref.current.rotation.y = 0.5 * clock.getElapsedTime();
    targetX = mouse.x * 0.5;
    targetY = mouse.y * 0.5;
    ref.current.rotation.x += 0.5 * (targetY - ref.current.rotation.x);
    ref.current.rotation.y += 0.05 * (targetX - ref.current.rotation.y);
    ref.current.position.z += -0.5 * (targetY - ref.current.rotation.x);
  });
  return (
    <group ref={ref}>
      <mesh position={[0, 0, 0]}>
        <sphereBufferGeometry attach="geometry" args={[0.7, 64, 64]} />
        <meshStandardMaterial
          attach="material"
          color="gray"
          metalness={0.75}
          roughness={0.75}
          map={earth}
          normalMap={bump}
        />
      </mesh>
    </group>
  );
}

export default function Globe() {
  return (
    <div className="h-full w-1/2">
      <Canvas
        camera={{ position: [0, 0, 2], fov: 75, near: 0.1, far: 100 }}
        onCreated={({ gl }) => {
          gl.gammaInput = true;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
        }}
      >
        <pointLight args={[0xffffff, 2]} position={[2, 3, 4]} />
        <pointLight args={[0xff0000, 3.7]} position={[1.1, 0.89, -0.1]} />
        <pointLight args={[0x7575, 4.5]} position={[-1.26, -1.16, -0.43]} />

        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}
