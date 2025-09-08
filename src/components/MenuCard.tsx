import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MenuItem } from "./MenuItem";
import { ARModal } from "./ARModal";
import { ChefHat, Sparkles } from "lucide-react";

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
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Enhanced flip animation with delay
    const timer = setTimeout(() => {
      setFlipped(true);
      // Mark animation complete after flip finishes
      setTimeout(() => setAnimationComplete(true), 1500);
    }, 2500);
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
    <div className="min-h-screen bg-gradient-to-br from-charcoal via-burgundy-dark to-charcoal text-cream flex items-center justify-center p-4 sm:p-6 font-serif">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-burgundy-light/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative w-full max-w-5xl mx-auto perspective z-10">
        {/* Notebook container with enhanced 3D effect */}
        <div
          className={`relative w-full h-[80vh] min-h-[600px] transform-style-preserve-3d transition-all duration-[2000ms] ease-out ${
            flipped ? "notebook-flip" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Cover - Enhanced Premium Design */}
          <div className="absolute inset-0 backface-hidden">
            <div className="w-full h-full menu-gradient luxury-border rounded-2xl premium-shadow relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold/5 to-transparent"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent animate-shimmer opacity-30"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="mb-8">
                  <ChefHat className="w-16 h-16 text-gold mx-auto mb-4 animate-gold-glow" />
                </div>
                
                <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 gold-text tracking-wider">
                  FALCON
                </h1>
                
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <p className="font-display italic text-gold text-xl md:text-2xl tracking-wide">
                    Exquisite Bangalore Cuisine
                  </p>
                  <Sparkles className="w-5 h-5 text-gold" />
                </div>
                
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mb-8"></div>
                
                <p className="text-sm uppercase tracking-[0.2em] text-gold/80 font-light">
                  Est. MMXXIV
                </p>
              </div>
            </div>
          </div>

          {/* Back Page - Enhanced Menu */}
          <div className="absolute inset-0 rotate-y-180 backface-hidden">
            <div className="w-full h-full menu-gradient luxury-border rounded-2xl premium-shadow p-8 flex flex-col overflow-hidden">
              
              {/* Enhanced Header */}
              <header className="text-center mb-8">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-3 gold-text">
                  FALCON
                </h1>
                <p className="font-display italic text-gold/90 text-lg mb-4 tracking-wide">
                  Exotic Flavors of Bangalore
                </p>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-gold"></div>
                  <Sparkles className="w-4 h-4 text-gold" />
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-gold"></div>
                </div>
              </header>

              {/* Menu Section with Enhanced Styling */}
              <div className="flex-1 overflow-y-auto menu-scroll">
                {currentSection && (
                  <section 
                    key={currentSection.id}
                    className={`${animationComplete ? 'animate-fade-in-elegant' : ''}`}
                  >
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8 gold-text">
                      {currentSection.title}
                    </h2>

                    <div className="space-y-6">
                      {currentSection.items.map((item, index) => (
                        <div 
                          key={index}
                          className={`${animationComplete ? 'animate-fade-in-elegant' : ''}`}
                          style={{ animationDelay: `${index * 200}ms` }}
                        >
                          <MenuItem
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            onViewAR={() => handleOpenAR(item.modelFile)}
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Enhanced Pagination */}
              <div className="mt-8 flex justify-center items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="btn-elegant disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </Button>

                <div className="flex gap-2">
                  {menuData.map((section) => (
                    <Button
                      key={section.id}
                      variant={currentPage === section.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(section.id)}
                      className={
                        currentPage === section.id
                          ? "btn-premium"
                          : "btn-elegant w-10 h-10"
                      }
                    >
                      {section.id}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage(Math.min(menuData.length, currentPage + 1))
                  }
                  disabled={currentPage === menuData.length}
                  className="btn-elegant disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </Button>
              </div>

              {/* Enhanced Footer */}
              <footer className="mt-8 text-center pt-6 border-t border-gold/20">
                <p className="font-display italic text-gold/80 text-lg tracking-wide">
                  Bon Appétit!
                </p>
              </footer>
            </div>
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
