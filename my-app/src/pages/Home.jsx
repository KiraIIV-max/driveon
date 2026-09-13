import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import Button from "../components/ui/Button"
import heroImage from "../assets/images/hero-image.jpg"
import { useReveal } from "../hooks/useReveal"
import { cars } from "../data/cars"
import CarCard from "../components/cars/CarCard"

function Home() {
  const heroRef = useReveal({ stagger: 0.12, delay: 0.6 })
  const searchRef = useReveal({ delay: 1.2, stagger: 0.06 })
  const featuredRef = useReveal({ delay: 0.2, stagger: 0.1 })
  const aboutRef = useReveal({ delay: 0.2, stagger: 0.1 })

  const imageWrapperRef = useRef(null)
  const imageRef = useRef(null)

  // Hero image clip-path reveal
  useEffect(() => {
    if (!imageWrapperRef.current || !imageRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        imageWrapperRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "power3.inOut" }
      )

      tl.fromTo(
        imageRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 1.8, ease: "power3.out" },
        "<"
      )
    }, imageWrapperRef)

    return () => ctx.revert()
  }, [])

  const featuredCars = cars.slice(0, 3)

  // ===== About Features =====
  const features = [
    {
      number: "01",
      title: "Premium Fleet",
      description: "Hand-picked vehicles maintained to the highest standards.",
    },
    {
      number: "02",
      title: "Full Insurance",
      description: "Every rental comes with comprehensive coverage included.",
    },
    {
      number: "03",
      title: "24/7 Support",
      description: "Our team is available around the clock for any assistance.",
    },
  ]

  // ===== Stats =====
  const stats = [
    { value: "24", label: "Vehicles" },
    { value: "1.2K", label: "Happy Clients" },
    { value: "15", label: "Cities" },
    { value: "98%", label: "Satisfaction" },
  ]

  return (
    <div className="bg-warm-bg">

      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">

        <div
          ref={imageWrapperRef}
          className="absolute inset-0 z-0"
          style={{ clipPath: "inset(100% 0% 0% 0%)" }}
        >
          <img
            ref={imageRef}
            src={heroImage}
            alt="Premium car"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center right",
              willChange: "transform",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-bg/95 via-warm-bg/20 to-transparent"></div>
        </div>

        <div
          ref={heroRef}
          className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 lg:py-28"
        >
          <div className="max-w-xl">

            <p
              data-reveal
              className="text-sm font-medium tracking-widest text-taupe uppercase mb-5"
            >
              01 — Rental Platform
            </p>

            <h1
              data-reveal
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-semibold text-charcoal leading-[1.15] tracking-tight"
            >
              Find the right car<br />
              for every journey.
            </h1>

            <p
              data-reveal
              className="mt-6 text-base md:text-lg text-taupe max-w-md leading-relaxed"
            >
              Premium vehicles. Flexible rentals.<br />
              A simpler way to get on the road.
            </p>

            <div
              data-reveal
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link to="/fleet">
                <Button variant="primary" size="lg">
                  Explore Fleet
                </Button>
              </Link>

              <Button variant="ghost" size="lg">
                Watch Video →
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ===== SEARCH BAR ===== */}
      <section
        ref={searchRef}
        className="max-w-7xl mx-auto px-6 relative z-20 -mt-10"
      >
        <div
          data-reveal
          className="bg-surface border border-border rounded-md p-4 md:p-5 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">

            <div data-reveal className="flex flex-col gap-2">
              <label className="text-xs font-medium text-taupe uppercase tracking-wider">
                Pick-up Location
              </label>
              <input
                type="text"
                placeholder="Cairo"
                className="h-11 px-4 rounded-sm border border-border bg-warm-bg text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-info"
              />
            </div>

            <div data-reveal className="flex flex-col gap-2">
              <label className="text-xs font-medium text-taupe uppercase tracking-wider">
                Pick-up Date
              </label>
              <input
                type="date"
                className="h-11 px-4 rounded-sm border border-border bg-warm-bg text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-info"
              />
            </div>

            <div data-reveal className="flex flex-col gap-2">
              <label className="text-xs font-medium text-taupe uppercase tracking-wider">
                Return Date
              </label>
              <input
                type="date"
                className="h-11 px-4 rounded-sm border border-border bg-warm-bg text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-info"
              />
            </div>

            <div data-reveal>
              <Link to="/fleet">
                <Button variant="primary" className="w-full h-11">
                  Search Cars →
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ===== FEATURED CARS ===== */}
      <section
        ref={featuredRef}
        className="max-w-7xl mx-auto px-6 pt-24 lg:pt-32 pb-20"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p
              data-reveal
              className="text-sm font-medium tracking-widest text-taupe uppercase mb-4"
            >
              02 — Featured Cars
            </p>
            <h2
              data-reveal
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal tracking-tight max-w-xl leading-tight"
            >
              Selected vehicles<br />
              for your next drive.
            </h2>
          </div>

          <Link
            data-reveal
            to="/fleet"
            className="text-sm font-medium text-charcoal hover:text-taupe transition-colors inline-flex items-center gap-2 group"
          >
            View all cars
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredCars.map((car, index) => (
            <div data-reveal key={car.id}>
              <CarCard car={car} index={index} />
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section
        ref={aboutRef}
        className="max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-24 lg:pb-32 border-t border-border"
      >
        
        {/* ===== Top Row: Intro ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          
          <div>
            <p
              data-reveal
              className="text-sm font-medium tracking-widest text-taupe uppercase mb-4"
            >
              03 — About DriveOn
            </p>
            <h2
              data-reveal
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal tracking-tight leading-tight"
            >
              Built for those<br />
              who value the drive.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p
              data-reveal
              className="text-base md:text-lg text-taupe leading-relaxed"
            >
              DriveOn is a premium car rental platform designed to make every journey
              effortless. From luxury sedans to electric vehicles, we offer a curated
              fleet with transparent pricing, full insurance, and support you can
              rely on — anywhere, anytime.
            </p>
          </div>

        </div>

        {/* ===== Features Row ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {features.map((feature) => (
            <div
              key={feature.number}
              data-reveal
              className="border-t border-border pt-6"
            >
              <p className="text-xs font-medium tracking-widest text-taupe uppercase mb-4">
                {feature.number}
              </p>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-taupe leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* ===== Stats Row ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12">
          {stats.map((stat, i) => (
            <div key={i} data-reveal>
              <p className="text-3xl md:text-4xl font-medium text-charcoal mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs font-medium tracking-widest text-taupe uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* Spacer */}
      <div className="h-12"></div>

    </div>
  )
}

export default Home