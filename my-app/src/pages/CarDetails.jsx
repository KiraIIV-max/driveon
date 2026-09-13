import { useParams, Link } from "react-router-dom"
import { cars } from "../data/cars"
import Button from "../components/ui/Button"
import { useReveal } from "../hooks/useReveal"

function CarDetails() {
  const { id } = useParams()
  const car = cars.find((c) => c.id === id)
  const contentRef = useReveal({ stagger: 0.1 })

  if (!car) {
    return (
      <div className="min-h-screen bg-warm-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-charcoal mb-4">Car not found</h1>
          <Link to="/fleet">
            <Button variant="primary">Back to Fleet</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-charcoal text-white min-h-screen">
      
      {/* ===== HERO IMAGE ===== */}
      <section className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
        
        <div className="absolute top-6 left-6 z-10">
          <Link 
            to="/fleet"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
          >
            ← Back to Fleet
          </Link>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section 
        ref={contentRef}
        className="max-w-7xl mx-auto px-6 -mt-20 relative z-10 pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          
          <div className="lg:col-span-2">
            
            <p 
              data-reveal
              className="text-sm font-medium tracking-widest text-white/50 uppercase mb-3"
            >
              {String(cars.findIndex(c => c.id === car.id) + 1).padStart(2, "0")} — {car.category}
            </p>
            
            <h1 
              data-reveal
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6"
            >
              {car.name}
            </h1>

            <div 
              data-reveal
              className="flex flex-wrap gap-6 mb-10 text-sm text-white/70"
            >
              <div>
                <span className="block text-xs text-white/40 uppercase tracking-wider mb-1">Fuel</span>
                {car.fuel}
              </div>
              <div>
                <span className="block text-xs text-white/40 uppercase tracking-wider mb-1">Transmission</span>
                {car.transmission}
              </div>
              <div>
                <span className="block text-xs text-white/40 uppercase tracking-wider mb-1">Seats</span>
                {car.seats}
              </div>
              <div>
                <span className="block text-xs text-white/40 uppercase tracking-wider mb-1">Status</span>
                <span className="text-success">{car.available ? "Available" : "Unavailable"}</span>
              </div>
            </div>

            <div data-reveal className="prose prose-invert max-w-none">
              <p className="text-white/70 leading-relaxed text-base">
                Experience premium comfort and performance with the {car.name}. 
                Designed for those who value both elegance and capability on every journey.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div 
              data-reveal
              className="bg-elevated border border-white/10 rounded-md p-6 sticky top-24"
            >
              
              <div className="mb-6">
                <p className="text-sm text-white/50 mb-1">Starting from</p>
                <p className="text-3xl font-medium">
                  ${car.price}
                  <span className="text-base text-white/50 font-normal"> / day</span>
                </p>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-white/70">
                  <span>Insurance</span>
                  <span>Included</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Mileage</span>
                  <span>Unlimited</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Cancellation</span>
                  <span>Free up to 24h</span>
                </div>
              </div>

              <Link to="/booking" className="block">
                <Button 
                  variant="primary" 
                  className="w-full bg-white text-charcoal hover:bg-white/90"
                >
                  Book Now →
                </Button>
              </Link>

              <p className="text-xs text-white/40 text-center mt-4">
                No credit card required to reserve
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default CarDetails