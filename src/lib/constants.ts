export const MENU_CATEGORIES = [
    {
      id: "starters" as const,
      name: "Starters",
      description: "Exquisite beginnings to awaken your palate",
    },
    {
      id: "mains" as const,
      name: "Main Course",
      description: "Masterfully crafted dishes that define excellence",
    },
    {
      id: "desserts" as const,
      name: "Desserts",
      description: "Sweet conclusions to your culinary journey",
    },
    {
      id: "cocktails" as const,
      name: "Cocktails",
      description: "Artisanal libations crafted with precision",
    },
  ]
  
  export const MENU_ITEMS = {
    starters: [
      {
        id: "truffle-arancini",
        name: "Truffle Arancini",
        description: "Crispy risotto spheres with black truffle and aged parmesan",
        price: 28,
      },
      {
        id: "oyster-selection",
        name: "Oyster Selection",
        description: "Daily selection of fresh oysters with champagne mignonette",
        price: 36,
      },
      {
        id: "foie-gras",
        name: "Seared Foie Gras",
        description: "Pan-seared foie gras with cherry gastrique and brioche",
        price: 42,
      },
    ],
    mains: [
      {
        id: "wagyu-beef",
        name: "Wagyu Beef Tenderloin",
        description: "A5 Wagyu with roasted bone marrow and seasonal vegetables",
        price: 85,
      },
      {
        id: "lobster-thermidor",
        name: "Lobster Thermidor",
        description: "Whole lobster with cognac cream sauce and herb crust",
        price: 68,
      },
      {
        id: "duck-confit",
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry reduction and potato gratin",
        price: 54,
      },
    ],
    desserts: [
      {
        id: "chocolate-souffle",
        name: "Dark Chocolate Soufflé",
        description: "Warm chocolate soufflé with vanilla bean ice cream",
        price: 24,
      },
      {
        id: "creme-brulee",
        name: "Vanilla Crème Brûlée",
        description: "Classic vanilla custard with caramelized sugar crust",
        price: 18,
      },
      {
        id: "tarte-tatin",
        name: "Apple Tarte Tatin",
        description: "Upside-down apple tart with cinnamon ice cream",
        price: 22,
      },
    ],
    cocktails: [
      {
        id: "signature-martini",
        name: "Lumière Martini",
        description: "Premium gin with elderflower and gold leaf garnish",
        price: 22,
      },
      {
        id: "old-fashioned",
        name: "Aged Old Fashioned",
        description: "18-year bourbon with house-made bitters and orange zest",
        price: 26,
      },
      {
        id: "champagne-cocktail",
        name: "Champagne Royale",
        description: "Dom Pérignon with blackcurrant liqueur and gold flakes",
        price: 35,
      },
    ],
  } as const
  
  export const RESTAURANT_INFO = {
    name: "Lumière",
    tagline: "An exquisite culinary journey",
    address: "123 Fine Dining Street, Culinary District",
    phone: "+1 (555) 123-4567",
    email: "reservations@lumiere.com",
    hours: {
      weekdays: "5:00 PM - 11:00 PM",
      weekends: "4:00 PM - 12:00 AM",
    },
  } as const
  