import { Link } from "react-router-dom"

function CarCard({ car, index }) {
  return (
    <Link 
      to={`/cars/${car.id}`}
      className="group block"
    >
      <article className="bg-surface border border-border rounded-md overflow-hidden transition-all duration-300 hover:border-charcoal/30">
        
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-divider">
          <img
            src={car.image}
            alt={car.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Available Badge */}
          {car.available && (
            <span className="absolute top-3 right-3 text-xs font-medium bg-success/10 text-success px-2.5 py-1 rounded-sm">
              Available
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Number + Name */}
          <div className="flex items-baseline gap-3 mb-1">
            <span className="text-xs font-medium text-taupe tracking-wider">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold text-charcoal group-hover:text-charcoal/80 transition-colors">
              {car.name}
            </h3>
          </div>

          {/* Category */}
          <p className="text-sm text-taupe mb-4">
            {car.category}
          </p>

          {/* Meta + Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-taupe">
              <span>{car.fuel}</span>
              <span className="w-1 h-1 rounded-full bg-border"></span>
              <span>{car.transmission}</span>
              <span className="w-1 h-1 rounded-full bg-border"></span>
              <span>{car.seats} seats</span>
            </div>

            <p className="text-base font-medium text-charcoal">
              ${car.price}
              <span className="text-xs text-taupe font-normal"> /day</span>
            </p>
          </div>
        </div>

      </article>
    </Link>
  )
}

export default CarCard