import { Link, useLocation, Navigate } from "react-router-dom"
import Button from "../components/ui/Button"
import { useReveal } from "../hooks/useReveal"

function Confirmation() {
  const location = useLocation()
  const booking = location.state
  const revealRef = useReveal({ stagger: 0.12, duration: 0.8 })

  // لو حد فتح الصفحة مباشرة من غير booking
  if (!booking) {
    return <Navigate to="/booking" replace />
  }

  const { car, formData, days, total, bookingId } = booking

  // تنسيق التواريخ
  const formatDate = (dateStr) => {
    if (!dateStr) return "—"
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" })
  }

  const dateRange = `${formatDate(formData.pickupDate)} — ${formatDate(formData.returnDate)}`

  return (
    <div 
      ref={revealRef}
      className="bg-charcoal text-white min-h-screen flex items-center justify-center px-6 py-20"
    >
      
      <div className="w-full max-w-2xl">
        
        <div data-reveal className="w-full h-px bg-white/15 mb-12"></div>

        <div data-reveal className="flex justify-center mb-10">
          <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-2xl text-success">✓</span>
          </div>
        </div>

        <div data-reveal className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest text-white/40 uppercase mb-4">
            Booking Confirmed
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Your drive is ready.
          </h1>
        </div>

        <div className="space-y-5 mb-12">
          
          <div data-reveal className="flex justify-between items-baseline border-b border-white/10 pb-4">
            <span className="text-xs text-white/40 uppercase tracking-wider">Vehicle</span>
            <span className="text-base font-medium">{car.name}</span>
          </div>

          <div data-reveal className="flex justify-between items-baseline border-b border-white/10 pb-4">
            <span className="text-xs text-white/40 uppercase tracking-wider">Dates</span>
            <span className="text-base font-medium">{dateRange}</span>
          </div>

          <div data-reveal className="flex justify-between items-baseline border-b border-white/10 pb-4">
            <span className="text-xs text-white/40 uppercase tracking-wider">Duration</span>
            <span className="text-base font-medium">{days} days</span>
          </div>

          <div data-reveal className="flex justify-between items-baseline border-b border-white/10 pb-4">
            <span className="text-xs text-white/40 uppercase tracking-wider">Total</span>
            <span className="text-2xl font-medium">${total}</span>
          </div>

          <div data-reveal className="flex justify-between items-baseline">
            <span className="text-xs text-white/40 uppercase tracking-wider">Booking ID</span>
            <span className="text-base font-medium tracking-wider">{bookingId}</span>
          </div>

        </div>

        <div data-reveal className="w-full h-px bg-white/15 mb-12"></div>

        <div data-reveal className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/fleet">
            <Button variant="primary" className="bg-white text-charcoal hover:bg-white/90">
              Back to Fleet
            </Button>
          </Link>
          
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Return Home →
            </Button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Confirmation