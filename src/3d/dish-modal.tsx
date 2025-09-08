"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog"
import { DishViewer } from "./dish-viewer"
import { Button } from "../components/ui/button"
import { X } from "lucide-react"

interface DishModalProps {
  isOpen: boolean
  onClose: () => void
  dishName: string
  dishDescription: string
  dishPrice: string
  dishType: "starter" | "main" | "dessert" | "cocktail"
}

export function DishModal({ isOpen, onClose, dishName, dishDescription, dishPrice, dishType }: DishModalProps) {
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
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 p-6 pt-4">
          <div className="w-full h-full rounded-lg overflow-hidden border border-border/30">
            <DishViewer dishName={dishName} dishType={dishType} />
          </div>
        </div>

        <div className="p-6 pt-0 border-t border-border/30">
          <div className="flex justify-center">
            <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
              Rotate • Zoom • Explore in 3D
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
