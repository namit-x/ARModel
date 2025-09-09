"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog"
import { DishViewer } from "./dish-viewer"

interface DishModalProps {
  isOpen: boolean
  onClose: () => void
  dishName: string
  dishDescription: string
  dishPrice: string
  dishType: "starter" | "main" | "dessert" | "cocktail"
  modelFile: string
}

export function DishModal({
  isOpen,
  onClose,
  dishName,
  dishDescription,
  dishPrice,
  dishType,
}: DishModalProps) {
  const descriptionId = `dish-description-${dishName.replace(/\s+/g, "-").toLowerCase()}`

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0 overflow-hidden" aria-describedby={descriptionId}>
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <DialogTitle className="font-serif text-2xl font-bold text-foreground">{dishName}</DialogTitle>
              <DialogDescription
                id={descriptionId}
                className="font-sans text-muted-foreground text-sm leading-relaxed max-w-md"
              >
                {dishDescription}
              </DialogDescription>
              <div className="font-serif text-xl font-bold text-primary">{dishPrice}</div>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 p-6 pt-4">
          <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border/30">
            <DishViewer dishName={dishName} dishType={dishType} modelFile={"bili.glb"} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
