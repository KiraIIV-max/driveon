import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-semibold tracking-tight">
              DRIVEON
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Premium car rental made simple.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-sm text-white/70 hover:text-white transition-colors">
                  Cars
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">
              Social
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 DriveOn. All rights reserved.
          </p>
          <p className="text-xs text-white/40 tracking-widest uppercase">
            Rent · Drive · Go
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer