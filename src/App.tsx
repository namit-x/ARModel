import { MenuHero } from "./components/MenuHero"
import { MenuCategories } from "./components/MenuCategories"
import { MenuNavigation } from "./components/MenuNavigation"
import { Toaster } from "./components/ui/toaster"
import { TooltipProvider } from "./components/ui/tooltip"
import "./App.css"

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <MenuHero />
        <MenuCategories />
        <MenuNavigation />
        {/* <MenuFooter /> */}
        <Toaster />
      </div>
    </TooltipProvider>
  )
}

export default App
