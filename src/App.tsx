import { useRef } from "react"
import { MenuHero } from "./components/MenuHero"
import { MenuCategories } from "./components/MenuCategories"
import { MenuNavigation } from "./components/MenuNavigation"
import { Toaster } from "./components/ui/toaster"
import { TooltipProvider } from "./components/ui/tooltip"
import { DishViewer } from "./components/3d/dish-viewer" // Adjust path if needed
import "./App.css"

function App() {
  const viewerRef = useRef<HTMLElement>(null)

  const rotateCamera = () => {
    if (viewerRef.current) {
      // @ts-ignore
      viewerRef.current.cameraOrbit = "45deg 75deg 2.5m"
      // @ts-ignore
      viewerRef.current.turntableRotation = 0.5
    }
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <MenuHero />
        <MenuCategories />
        <MenuNavigation />

        {/* Camera Controls Buttons */}
        <div className="my-4 flex gap-2">
          <button
            onClick={rotateCamera}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Rotate Camera
          </button>
        </div>

        {/* DishViewer */}
        <div className="h-[500px] w-full">
          <DishViewer
            ref={viewerRef}
            dishName="Pasta"
            dishType="main"
            modelFile="pasta.glb"
          />
        </div>

        <Toaster />
      </div>
    </TooltipProvider>
  )
}

export default App
