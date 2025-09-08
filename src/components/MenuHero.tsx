import { Button } from "../components/ui/button"

export function MenuHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/Background.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h1 className="font-sans text-4xl md:text-6xl font-bold text-white mb-4 text-balance">Lumière</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light text-pretty">An Exquisite Culinary Journey</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium"
            onClick={() => {
              const menuSection = document.getElementById("menu")
              if (menuSection) {
                menuSection.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
          >
            View Menu
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
