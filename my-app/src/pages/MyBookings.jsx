import { Link } from "react-router-dom"
import { useBookings } from "../hooks/useBookings"
import Button from "../components/ui/Button"
import { useReveal } from "../hooks/useReveal"

function MyBookings() {
  const { bookings, deleteBooking, clearBookings } = useBookings()
  const revealRef = useReveal({ stagger: 0.08 })

  // ===== Empty State =====
  if (bookings.length === 0) {
    return (
      <div className="bg-warm-bg min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-sm font-medium tracking-widest text-taupe uppercase mb-4">
            01 — My Bookings
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-charcoal tracking-tight mb-4">
            No bookings yet.
          </h1>
          <p className="text-base text-taupe mb-8 leading-relaxed">
            Once you book a vehicle, it will appear here for easy access.
          </p>
          <Link to="/fleet">
            <Button variant="primary" size="lg">
              Explore Fleet
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-warm-bg min-h-screen">
      
      {/* ===== HEADER ===== */}
      <section
        ref={revealRef}
        className="max-w-7xl mx-auto px-6 pt-16 pb-10 lg:pt-20 lg:pb-12"
      >
        <p
          data-reveal
          className="text-sm font-medium tracking-widest text-taupe uppercase mb-4"
        >
          01 — My Bookings
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h1
            data-reveal
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal tracking-tight max-w-2xl leading-tight"
          >
            Your bookings.
          </h1>

          <p data-reveal className="text-sm text-taupe">
            <span className="font-medium text-charcoal">{bookings.length}</span>{" "}
            {bookings.length === 1 ? "Booking" : "Bookings"}
          </p>
        </div>
      </section>

      {/* ===== BOOKINGS LIST ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-20 lg:pb-28">
        <div className="space-y-4">
          {bookings.map((booking) => {
            const formatDate = (dateStr) => {
              if (!dateStr) return "—"
              const date = new Date(dateStr)
              return date.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            }

            const dateRange = `${formatDate(booking.formData.pickupDate)} — ${formatDate(booking.formData.returnDate)}`

            return (
              <div
                key={booking.bookingId}
                data-reveal
                className="bg-surface border border-border rounded-md p-5 md:p-6 hover:border-charcoal/30 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Image */}
                  <div className="md:col-span-2">
                    <div className="aspect-[16/10] rounded-sm overflow-hidden bg-divider">
                      <img
                        src={booking.car.image}
                        alt={booking.car.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-taupe tracking-wider">
                        {booking.bookingId}
                      </span>
                      <span className="text-xs font-medium bg-success/10 text-success px-2 py-0.5 rounded-sm">
                        Confirmed
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">
                      {booking.car.name}
                    </h3>
                    <p className="text-sm text-taupe">
                      {booking.car.category}
                    </p>
                  </div>

                  {/* Dates */}
                  <div className="md:col-span-3">
                    <p className="text-xs font-medium text-taupe uppercase tracking-wider mb-1">
                      Dates
                    </p>
                    <p className="text-sm text-charcoal font-medium">
                      {dateRange}
                    </p>
                    <p className="text-xs text-taupe mt-1">
                      {booking.days} {booking.days === 1 ? "day" : "days"}
                    </p>
                  </div>

                  {/* Price + Action */}
                  <div className="md:col-span-2 flex md:flex-col md:items-end items-center justify-between gap-3">
                    <p className="text-xl font-medium text-charcoal">
                      ${booking.total}
                    </p>
                    <button
                      onClick={() => deleteBooking(booking.bookingId)}
                      className="text-xs font-medium text-taupe hover:text-error transition-colors"
                    >
                      Cancel
                    </button>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* ===== CLEAR ALL ===== */}
        {bookings.length > 1 && (
          <div className="mt-10 pt-10 border-t border-border flex justify-center">
            <button
              onClick={clearBookings}
              className="text-sm font-medium text-taupe hover:text-error transition-colors underline underline-offset-4 decoration-border hover:decoration-error"
            >
              Clear all bookings
            </button>
          </div>
        )}
      </section>

    </div>
  )
}

export default MyBookings