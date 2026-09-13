import {Link , NavLink} from 'react-router-dom'
import {cn} from '../../lib/utils'

const Header = () => {

  const navLinkClass = ({ isActive }) =>
    cn(
      "text-sm font-medium transition-colors duration-200",
      isActive ? "text-charcoal" : "text-taupe hover:text-charcoal"
    )



  return (
    <header className = "w-full border-b border-border bg-warm-bg/80 backdrop-blur-sm sticky top-0 z-50">
      <div className = "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* logo */}
        <Link to="/" className="text-lg font-semibold tracking-tight text-charcoal">
          DRIVEON
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/fleet" className={navLinkClass}>
            Cars
          </NavLink>
          <NavLink to="/booking" className={navLinkClass}>
            Booking
          </NavLink>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link 
            to="/my-bookings" 
            className="text-sm font-medium text-charcoal hover:text-taupe transition-colors"
          >
            My Bookings
          </Link>
        </div>

      </div>
    </header>
  )
}

export default Header