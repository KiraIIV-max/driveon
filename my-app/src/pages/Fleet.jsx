import { useEffect, useRef, useState, useMemo } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cars } from "../data/cars"
import CarCard from "../components/cars/CarCard"
import CarFilters from "../components/cars/CarFilters"
import { useReveal } from "../hooks/useReveal"

gsap.registerPlugin(ScrollTrigger)

function Fleet() {
  const headerRef = useReveal({ stagger: 0.12 })
  const gridRef = useRef(null)

  // ===== FILTER STATE =====
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [fuel, setFuel] = useState("All")
  const [priceRange, setPriceRange] = useState("all")
  const [sort, setSort] = useState("default")

  // ===== FILTERED + SORTED CARS =====
  const filteredCars = useMemo(() => {
    let result = [...cars]

    // Search
    if (search.trim()) {
      const query = search.toLowerCase()
      result = result.filter(
        (car) =>
          car.name.toLowerCase().includes(query) ||
          car.category.toLowerCase().includes(query)
      )
    }

    // Category
    if (category !== "All") {
      result = result.filter((car) => car.category === category)
    }

    // Fuel
    if (fuel !== "All") {
      result = result.filter((car) => car.fuel === fuel)
    }

    // Price
    if (priceRange !== "all") {
      if (priceRange === "under-100") {
        result = result.filter((car) => car.price < 100)
      } else if (priceRange === "100-150") {
        result = result.filter((car) => car.price >= 100 && car.price <= 150)
      } else if (priceRange === "over-150") {
        result = result.filter((car) => car.price > 150)
      }
    }

    // Sort
    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price)
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [search, category, fuel, priceRange, sort])

  // ===== RESET FILTERS =====
  const handleClear = () => {
    setSearch("")
    setCategory("All")
    setFuel("All")
    setPriceRange("all")
    setSort("default")
  }

  // ===== ANIMATION ON FILTER CHANGE =====
  useEffect(() => {
    if (!gridRef.current) return

    const cards = gridRef.current.querySelectorAll("[data-car-card]")
    if (cards.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.05,
        }
      )
    }, gridRef)

    return () => ctx.revert()
  }, [filteredCars])

  return (
    <div className="bg-warm-bg">
      
      {/* ===== HEADER ===== */}
      <section
        ref={headerRef}
        className="max-w-7xl mx-auto px-6 pt-16 pb-12 lg:pt-20 lg:pb-16"
      >
        <p
          data-reveal
          className="text-sm font-medium tracking-widest text-taupe uppercase mb-4"
        >
          01 — Our Fleet
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h1
            data-reveal
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal tracking-tight max-w-xl leading-tight"
          >
            Find a vehicle<br />
            that fits your journey.
          </h1>

          <p data-reveal className="text-sm text-taupe">
            <span className="font-medium text-charcoal">{cars.length}</span> Vehicles
          </p>
        </div>
      </section>

      {/* ===== FILTERS ===== */}
      <section
        data-reveal
        className="max-w-7xl mx-auto px-6 pb-8"
      >
        <CarFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          fuel={fuel}
          setFuel={setFuel}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          sort={sort}
          setSort={setSort}
          onClear={handleClear}
          resultsCount={filteredCars.length}
        />
      </section>

      {/* ===== GRID ===== */}
      <section
        ref={gridRef}
        className="max-w-7xl mx-auto px-6 pb-20 lg:pb-28"
      >
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredCars.map((car, index) => (
              <div data-car-card key={car.id}>
                <CarCard car={car} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg text-charcoal font-medium mb-2">
              No cars found
            </p>
            <p className="text-sm text-taupe mb-6">
              Try adjusting your filters or search query.
            </p>
            <button
              onClick={handleClear}
              className="text-sm font-medium text-charcoal underline underline-offset-4 decoration-border hover:decoration-charcoal transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

    </div>
  )
}

export default Fleet