import { cn } from "../../lib/utils"
import { categories, fuels } from "../../data/cars"

function CarFilters({ 
  search, 
  setSearch,
  category,
  setCategory,
  fuel,
  setFuel,
  priceRange,
  setPriceRange,
  sort,
  setSort,
  onClear,
  resultsCount,
}) {
  const priceRanges = [
    { label: "All Prices", value: "all" },
    { label: "Under $100", value: "under-100" },
    { label: "$100 — $150", value: "100-150" },
    { label: "Over $150", value: "over-150" },
  ]

  const sortOptions = [
    { label: "Default", value: "default" },
    { label: "Price: Low → High", value: "price-asc" },
    { label: "Price: High → Low", value: "price-desc" },
  ]

  const hasActiveFilters =
    search !== "" ||
    category !== "All" ||
    fuel !== "All" ||
    priceRange !== "all" ||
    sort !== "default"

  return (
    <div className="bg-surface border border-border rounded-md p-5 mb-10">
      
      {/* ===== SEARCH ===== */}
      <div className="mb-5">
        <label className="text-xs font-medium text-taupe uppercase tracking-wider mb-2 block">
          Search
        </label>
        <input
          type="text"
          placeholder="Search by name or model..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-11 px-4 rounded-sm border border-border bg-warm-bg text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-info"
        />
      </div>

      {/* ===== FILTERS GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Category */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-taupe uppercase tracking-wider">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-11 px-4 rounded-sm border border-border bg-warm-bg text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-info"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Fuel */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-taupe uppercase tracking-wider">
            Fuel
          </label>
          <select
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
            className="h-11 px-4 rounded-sm border border-border bg-warm-bg text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-info"
          >
            {fuels.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-taupe uppercase tracking-wider">
            Price
          </label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="h-11 px-4 rounded-sm border border-border bg-warm-bg text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-info"
          >
            {priceRanges.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-taupe uppercase tracking-wider">
            Sort By
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-11 px-4 rounded-sm border border-border bg-warm-bg text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-info"
          >
            {sortOptions.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="mt-5 pt-5 border-t border-border flex items-center justify-between flex-wrap gap-3">
        <p className="text-sm text-taupe">
          <span className="font-medium text-charcoal">{resultsCount}</span> results
        </p>

        {hasActiveFilters && (
          <button
            onClick={onClear}
            className={cn(
              "text-sm font-medium text-charcoal hover:text-taupe transition-colors",
              "underline underline-offset-4 decoration-border hover:decoration-charcoal"
            )}
          >
            Clear all filters
          </button>
        )}
      </div>

    </div>
  )
}

export default CarFilters