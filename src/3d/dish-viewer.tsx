"use client"

import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react"

// This type is from the model-viewer API
type ModelViewerElement = HTMLElement & {
  cameraOrbit?: string
  turntableRotation?: number
  pause?: () => void
  play?: () => void
  // Add more ModelViewer properties/methods here if needed
}

interface DishViewerProps {
  dishName: string
  dishType: "starter" | "main" | "dessert" | "cocktail"
  modelFile: string
}

// Wrapped React Component
export const DishViewer = forwardRef<ModelViewerElement, DishViewerProps>(
  ({ dishName, dishType, modelFile }, ref) => {
    const internalRef = useRef<ModelViewerElement>(null)

    // Expose the <model-viewer> DOM node to parent via ref
    useImperativeHandle(ref, () => internalRef.current!)

    // Load model-viewer script dynamically
    useEffect(() => {
      if (!window.customElements.get("model-viewer")) {
        const script = document.createElement("script")
        script.type = "module"
        script.src =
          "https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
        document.head.appendChild(script)
      }
    }, [])

    const modelSrc = `/${modelFile}`

    return (
      <div className="w-full h-full">
        <model-viewer
          ref={internalRef}
          src={modelSrc}
          alt={`3D model of ${dishName}`}
          ar
          ar-modes="scene-viewer quick-look webxr"
          camera-controls
          auto-rotate
          className="w-full h-full rounded-lg"
          style={{ backgroundColor: "#f8fafc" }}
          loading="eager"
          reveal="auto"
        />
      </div>
    )
  }
)

DishViewer.displayName = "DishViewer"
