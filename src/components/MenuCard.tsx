import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MenuItem } from "./MenuItem";
import { ARModal } from "./ARModal";

interface MenuSection {
  id: number;
  title: string;
  items: Array<{
    name: string;
    description: string;
    price: string;
    modelFile: string;
  }>;
}

const menuData: MenuSection[] = [
  {
    id: 1,
    title: "Starters",
    items: [
      {
        name: "Truffle & Saffron Ghee Roast",
        description:
          "Prawns marinated in Mangalorean spices with black truffle and saffron-infused ghee",
        price: "₹2,200",
        modelFile: "bili.glb",
      },
      {
        name: "Foie Gras Dosa",
        description:
          "Paper-thin lentil crepe filled with seared foie gras and caramelized onions",
        price: "₹2,800",
        modelFile: "bili.glb",
      },
      {
        name: "Wild Mushroom & Truffle Kebab",
        description:
          "Assorted wild mushrooms with black truffle, smoked in sandalwood",
        price: "₹1,900",
        modelFile: "bili.glb",
      },
    ],
  },
  {
    id: 2,
    title: "Main Course",
    items: [
      {
        name: "Wagyu Beef Chettinad",
        description:
          "A5 Japanese Wagyu slow-cooked in traditional Chettinad spices and coconut gravy",
        price: "₹5,800",
        modelFile: "bili.glb",
      },
      {
        name: "Gold Leaf Biryani",
        description:
          "Aged basmati rice with tender lamb shank, saffron, and 24k gold leaf",
        price: "₹4,200",
        modelFile: "bili.glb",
      },
      {
        name: "Lobster Malabar",
        description:
          "Whole lobster cooked in traditional Malabar curry with coconut and fennel",
        price: "₹4,500",
        modelFile: "bili.glb",
      },
    ],
  },
  {
    id: 3,
    title: "Desserts",
    items: [
      {
        name: "Saffron & Gold Rasmalai",
        description:
          "Homemade cottage cheese dumplings in saffron milk, garnished with gold leaf",
        price: "₹1,400",
        modelFile: "bili.glb",
      },
      {
        name: "Chocolate Samosa with Cardamom Ice Cream",
        description:
          "Dark chocolate and nut filling in crisp pastry, served with artisanal ice cream",
        price: "₹1,200",
        modelFile: "bili.glb",
      },
      {
        name: "Jasmine & Pistachio Kulfi",
        description:
          "Traditional Indian ice cream infused with jasmine essence and crushed pistachios",
        price: "₹1,100",
        modelFile: "bili.glb",
      },
    ],
  },
];

export function MenuCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [flipped, setFlipped] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  useEffect(() => {
    // trigger flip animation
    const timer = setTimeout(() => setFlipped(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenAR = (modelFile: string) => {
    setSelectedModel(modelFile);
  };

  const handleCloseAR = () => {
    setSelectedModel(null);
  };

  const currentSection = menuData.find((section) => section.id === currentPage);

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-2 sm:p-5 font-serif">
      <div className="relative w-full h-screen sm:w-[90%] sm:max-w-[800px] sm:min-h-[600px] perspective">
        {/* Notebook container */}
        <div
          className={`relative w-full h-full transition-transform duration-[1200ms] transform-style-preserve-3d ${
            flipped ? "rotate-x-180" : ""
          }`}
        >
          {/* Front Cover */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 sm:p-8 bg-gradient-to-br from-[#600018] to-[#800020] border-2 border-gold rounded-md shadow-2xl backface-hidden">
            <h1 className="text-3xl sm:text-5xl font-bold text-center text-white">
              FALCON
            </h1>
            <p className="italic text-gold mt-3 sm:mt-4 text-base sm:text-lg">
              Exquisite Bangalore Cuisine
            </p>
          </div>

          {/* Back Page - Menu */}
          <div className="absolute inset-0 flex flex-col bg-burgundy p-6 sm:p-8 border-2 border-gold rounded-md shadow-2xl rotate-y-180 backface-hidden">
            {/* Header */}
            <header className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-white">
                FALCON
              </h1>
              <p className="italic text-gold mb-3 sm:mb-4 text-sm sm:text-base">
                Exotic Flavors of Bangalore
              </p>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent my-3 sm:my-4"></div>
            </header>

            {/* Menu Section */}
            <div className="flex-1 overflow-y-auto menu-scroll">
              {currentSection && (
                <section className="overflow-hidden h-auto sm:h-[270px]">
                  <h2 className="text-xl sm:text-2xl font-bold text-gold text-center mb-4">
                    {currentSection.title}
                  </h2>

                  <div className="space-y-4">
                    {currentSection.items.map((item, index) => (
                      <MenuItem
                        key={index}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        onViewAR={() => handleOpenAR(item.modelFile)}
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Pagination */}
            <div className="mt-4 sm:mt-6 flex justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="border-gold text-gold hover:bg-gold hover:text-burgundy"
              >
                Prev
              </Button>

              {menuData.map((section) => (
                <Button
                  key={section.id}
                  variant={currentPage === section.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(section.id)}
                  className={
                    currentPage === section.id
                      ? "bg-gold text-burgundy hover:bg-gold-dark"
                      : "border-gold text-gold hover:bg-gold hover:text-burgundy"
                  }
                >
                  {section.id}
                </Button>
              ))}

              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage(Math.min(menuData.length, currentPage + 1))
                }
                disabled={currentPage === menuData.length}
                className="border-gold text-gold hover:bg-gold hover:text-burgundy"
              >
                Next
              </Button>
            </div>

            {/* Footer */}
            <footer className="mt-4 sm:mt-6 text-center pt-3 sm:pt-4 italic text-gold text-sm sm:text-base">
              Bon Appétit!
            </footer>
          </div>
        </div>
      </div>

      {/* AR Modal */}
      {selectedModel && (
        <ARModal modelFile={selectedModel} onClose={handleCloseAR} />
      )}
    </div>
  );
}
