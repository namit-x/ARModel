"use client"

import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { DishModal } from "../3d/dish-modal"

const menuCategories = [
  {
    id: "starters",
    title: "Starters",
    description: "Exquisite appetizers to awaken your palate",
    items: [
      {
        name: "Oysters Rockefeller",
        description: "Fresh Blue Point oysters with spinach, herbs, and Pernod",
        price: "$24",
        modelFile: "/bili.glb",
      },
      {
        name: "Foie Gras Terrine",
        description: "House-made terrine with brioche and cherry compote",
        price: "$32",
        modelFile: "/bili.glb",
      },
      {
        name: "Tuna Tartare",
        description: "Yellowfin tuna with avocado, citrus, and sesame tuile",
        price: "$28",
        modelFile: "truffle-arancini.glb",
      },
    ],
  },
  {
    id: "mains",
    title: "Main Course",
    description: "Masterfully crafted dishes for the discerning palate",
    items: [
      {
        name: "Wagyu Beef Tenderloin",
        description: "A5 Wagyu with truffle jus, roasted vegetables, and potato gratin",
        price: "$85",
        modelFile: "wagyu-beef.glb",
      },
      {
        name: "Lobster Thermidor",
        description: "Maine lobster with cognac cream sauce and herb crust",
        price: "$68",
        modelFile: "lobster-thermidor.glb",
      },
      {
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry gastrique and wild rice",
        price: "$42",
        modelFile: "duck-confit.glb",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    description: "Sweet conclusions to your culinary journey",
    items: [
      {
        name: "Chocolate Soufflé",
        description: "Dark chocolate soufflé with vanilla bean ice cream",
        price: "$18",
        modelFile: "chocolate-souffle.glb",
      },
      {
        name: "Crème Brûlée",
        description: "Classic vanilla custard with caramelized sugar",
        price: "$14",
        modelFile: "creme-brulee.glb",
      },
      {
        name: "Tarte Tatin",
        description: "Upside-down apple tart with Calvados ice cream",
        price: "$16",
        modelFile: "tarte-tatin.glb",
      },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails",
    description: "Artisanal libations crafted by our master mixologists",
    items: [
      {
        name: "Lumière Signature",
        description: "Hennessy XO, Grand Marnier, fresh citrus, and gold flakes",
        price: "$28",
        modelFile: "lumiere-signature.glb",
      },
      {
        name: "Smoked Old Fashioned",
        description: "Bourbon, maple syrup, bitters, served with applewood smoke",
        price: "$18",
        modelFile: "smoked-old-fashioned.glb",
      },
      {
        name: "Rose Garden",
        description: "Gin, elderflower, rose water, and champagne",
        price: "$16",
        modelFile: "rose-garden.glb",
      },
    ],
  },
]

export function MenuCategories() {
  const [selectedDish, setSelectedDish] = useState<{
    name: string
    description: string
    price: string
    type: "starter" | "main" | "dessert" | "cocktail"
    modelFile: string
  } | null>(null)

  const handleView3D = (item: any, categoryId: string) => {
    const dishType =
      categoryId === "starters"
        ? "starter"
        : categoryId === "mains"
          ? "main"
          : categoryId === "desserts"
            ? "dessert"
            : "cocktail"

    setSelectedDish({
      name: item.name,
      description: item.description,
      price: item.price,
      type: dishType,
      modelFile: item.modelFile,
    })
  }

  return (
    <>
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="space-y-20">
          {menuCategories.map((category) => (
            <div key={category.id} className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  {category.title}
                </h2>
                <div className="w-16 h-px bg-primary mx-auto"></div>
                <p className="font-sans text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1 space-y-2">
                            <h3 className="font-serif text-xl font-semibold text-foreground tracking-tight">
                              {item.name}
                            </h3>
                            <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <div className="font-serif text-xl font-bold text-primary whitespace-nowrap">
                            {item.price}
                          </div>
                        </div>

                        <div className="flex justify-end pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="font-sans text-xs uppercase tracking-wider border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 min-h-[44px] px-6 bg-transparent"
                            onClick={() => handleView3D(item, category.id)}
                          >
                            View in 3D
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedDish && (
        <DishModal
          isOpen={!!selectedDish}
          onClose={() => setSelectedDish(null)}
          dishName={selectedDish.name}
          dishDescription={selectedDish.description}
          dishPrice={selectedDish.price}
          dishType={selectedDish.type}
          modelFile={selectedDish.modelFile}
        />
      )}
    </>
  )
}
