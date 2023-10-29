import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei'
import Loader from "../Loader"
const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  const car = useGLTF('./desktop_pc/old_rusty_car/scene.gltf')
  const [ismobile,setmobile]=useState(false);
  useEffect(()=>{
    const mediaquary =window.matchMedia('(max-width:600px)');
    setmobile(mediaquary.matches);
    
    const handlemediaquerychange=(event)=>{
      setmobile(event.matches);
    }
    mediaquary.addEventListener('change',handlemediaquerychange);
    return()=>{
      mediaquary.removeEventListener('change',handlemediaquerychange);
    }
  },[])
  return (
    <mesh>
      <hemisphereLight intensity={2.5}
        groundColor="black" />
      <pointLight intensity={1} />
      <spotLight intensity={1.8}/>
      <primitive
        object={car.scene}
        // object={computer.scene}
        scale={ismobile?0.009:0.015}
        position={[0, -2.25, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}
const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI /2 }
          minPolarAngle={Math.PI / 3}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas