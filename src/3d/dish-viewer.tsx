import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

interface DishViewerProps {
  dishName: string
  dishType: "starter" | "main" | "dessert" | "cocktail"
}

function DishModel({ dishName, dishType }: DishViewerProps) {
  const getModelColor = () => {
    switch (dishType) {
      case "starter":
        return "#8B4513" // Brown for appetizers
      case "main":
        return "#DC143C" // Crimson for mains
      case "dessert":
        return "#FFD700" // Gold for desserts
      case "cocktail":
        return "#4169E1" // Royal blue for cocktails
      default:
        return "#8B4513"
    }
  }

  const getModelGeometry = () => {
    switch (dishType) {
      case "starter":
        return <sphereGeometry args={[1, 16, 16]} />
      case "main":
        return <cylinderGeometry args={[1, 1, 0.5, 8]} />
      case "dessert":
        return <coneGeometry args={[1, 1.5, 8]} />
      case "cocktail":
        return <cylinderGeometry args={[0.5, 0.8, 2, 8]} />
      default:
        return <sphereGeometry args={[1, 16, 16]} />
    }
  }

  return (
    <group>
      {/* Main dish model */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        {getModelGeometry()}
        <meshStandardMaterial color={getModelColor()} metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Plate/base */}
      <mesh position={[0, -1, 0]} receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 0.1, 32]} />
        <meshStandardMaterial color="#F5F5DC" metalness={0.1} roughness={0.8} />
      </mesh>
    </group>
  )
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 8, 8]} />
      <meshBasicMaterial color="#cccccc" wireframe />
    </mesh>
  )
}

function ErrorFallback({ error }: { error: Error }) {
  console.log("[v0] 3D Viewer Error:", error.message)
  return (
    <div className="flex items-center justify-center h-full bg-slate-100 rounded-lg">
      <div className="text-center p-4">
        <div className="text-slate-600 mb-2">3D Preview Unavailable</div>
        <div className="text-xs text-slate-500">WebGL context error</div>
      </div>
    </div>
  )
}

export function DishViewer({ dishName, dishType }: DishViewerProps) {
  return (
    <div className="w-full h-full">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Canvas
          camera={{ position: [3, 3, 3], fov: 50 }}
          shadows
          className="bg-gradient-to-b from-slate-50 to-slate-100"
          onCreated={({ gl }) => {
            gl.domElement.addEventListener("webglcontextlost", (event) => {
              event.preventDefault()
              console.log("[v0] WebGL context lost, attempting recovery...")
            })
          }}
        >
          <Suspense fallback={<LoadingFallback />}>
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight
              position={[5, 5, 5]}
              intensity={1}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <pointLight position={[-5, 5, 5]} intensity={0.5} />

            {/* Environment */}
            <Environment preset="studio" />

            {/* 3D Model */}
            <DishModel dishName={dishName} dishType={dishType} />

            {/* Controls */}
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={2}
              maxDistance={8}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}
