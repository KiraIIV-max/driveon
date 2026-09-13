import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { cars } from "../data/cars"
import Button from "../components/ui/Button"
import { cn } from "../lib/utils"
import { useReveal } from "../hooks/useReveal"
import { useBookings } from "../hooks/useBookings"

// ===== INPUT HELPER (بره الـ Booking) =====
function InputField({ label, field, type = "text", placeholder, formData, errors, updateField }) {
  return (
    <div data-reveal className="flex flex-col gap-2">
      <label className="text-xs font-medium text-taupe uppercase tracking-wider">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={formData[field]}
        onChange={(e) => updateField(field, e.target.value)}
        className={cn(
          "h-11 px-4 rounded-sm border bg-surface text-charcoal text-sm focus:outline-none focus:ring-2 transition-colors",
          errors[field]
            ? "border-error focus:ring-error"
            : "border-border focus:ring-info"
        )}
      />
      {errors[field] && (
        <p className="text-xs text-error">{errors[field]}</p>
      )}
    </div>
  )
}

function Booking() {
  const [step, setStep] = useState(1)
  const [selectedCar, setSelectedCar] = useState(cars[0])
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const { saveBooking } = useBookings()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    license: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    returnDate: "",
  })

  // ===== HELPER: Update Field =====
  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" })
    }
  }

  // ===== VALIDATION =====
  const validateStep1 = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    const phoneRegex = /^[0-9+\-\s()]{10,}$/
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!formData.license.trim()) {
      newErrors.license = "License number is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = "Pick-up location is required"
    }

    if (!formData.dropoffLocation.trim()) {
      newErrors.dropoffLocation = "Drop-off location is required"
    }

    if (!formData.pickupDate) {
      newErrors.pickupDate = "Pick-up date is required"
    }

    if (!formData.returnDate) {
      newErrors.returnDate = "Return date is required"
    } else if (formData.pickupDate && formData.returnDate) {
      const pickup = new Date(formData.pickupDate)
      const returnD = new Date(formData.returnDate)
      if (returnD <= pickup) {
        newErrors.returnDate = "Return date must be after pick-up"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const goToStep2 = () => {
    if (validateStep1()) setStep(2)
  }

  const goToStep3 = () => {
    if (validateStep2()) setStep(3)
  }

  const calculateDays = () => {
    if (!formData.pickupDate || !formData.returnDate) return 1
    const start = new Date(formData.pickupDate)
    const end = new Date(formData.returnDate)
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
    return diff > 0 ? diff : 1
  }

  const handleConfirm = () => {
    const days = calculateDays()
    const total = selectedCar.price * days
    const bookingId = "DRV-" + Math.random().toString(36).substring(2, 7).toUpperCase()

    const booking = {
      bookingId,
      car: selectedCar,
      formData,
      days,
      total,
      createdAt: new Date().toISOString(),
    }

    saveBooking(booking)

    navigate("/confirmation", {
      state: booking,
    })
  }

  const headerRef = useReveal({ stagger: 0.1 })
  const contentRef = useReveal({ delay: 0.25, stagger: 0.08 })

  const steps = [
    { number: "01", label: "Information" },
    { number: "02", label: "Journey" },
    { number: "03", label: "Confirmation" },
  ]

  return (
    <div className="bg-warm-bg min-h-screen">

      {/* ===== HEADER ===== */}
      <section
        ref={headerRef}
        className="max-w-7xl mx-auto px-6 pt-16 pb-10 lg:pt-20 lg:pb-12"
      >
        <p data-reveal className="text-sm font-medium tracking-widest text-taupe uppercase mb-4">
          Booking — 01
        </p>

        <h1 data-reveal className="text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal tracking-tight max-w-2xl leading-tight">
          Book your drive.
        </h1>

        <div data-reveal className="mt-10 flex flex-wrap items-center gap-6 md:gap-10">
          {steps.map((s, index) => {
            const stepNumber = index + 1
            const isActive = step === stepNumber
            const isCompleted = step > stepNumber

            return (
              <button
                key={s.number}
                onClick={() => {
                  if (stepNumber === 1) setStep(1)
                  if (stepNumber === 2 && validateStep1()) setStep(2)
                  if (stepNumber === 3 && validateStep1() && validateStep2()) setStep(3)
                }}
                className="flex items-center gap-3 group"
              >
                <span
                  className={cn(
                    "text-xs font-medium tracking-wider transition-colors",
                    isActive || isCompleted ? "text-charcoal" : "text-taupe"
                  )}
                >
                  {s.number}
                </span>
                <span
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive ? "text-charcoal" : "text-taupe group-hover:text-charcoal"
                  )}
                >
                  {s.label}
                </span>
                {index < steps.length - 1 && (
                  <span className="hidden md:block w-12 h-px bg-border ml-4"></span>
                )}
              </button>
            )
          })}
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section ref={contentRef} className="max-w-7xl mx-auto px-6 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          <div className="lg:col-span-2">

            {/* ===== STEP 1 ===== */}
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-charcoal mb-6">
                    Personal Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <InputField
                      label="Full Name"
                      field="fullName"
                      placeholder="John Doe"
                      formData={formData}
                      errors={errors}
                      updateField={updateField}
                    />
                    <InputField
                      label="Email"
                      field="email"
                      type="email"
                      placeholder="john@example.com"
                      formData={formData}
                      errors={errors}
                      updateField={updateField}
                    />
                    <InputField
                      label="Phone"
                      field="phone"
                      type="tel"
                      placeholder="+20 100 000 0000"
                      formData={formData}
                      errors={errors}
                      updateField={updateField}
                    />
                    <InputField
                      label="Driver's License"
                      field="license"
                      placeholder="License number"
                      formData={formData}
                      errors={errors}
                      updateField={updateField}
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex justify-end">
                  <Button variant="primary" onClick={goToStep2}>
                    Continue →
                  </Button>
                </div>
              </div>
            )}

            {/* ===== STEP 2 ===== */}
            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-charcoal mb-6">
                    Journey Details
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <InputField
                      label="Pick-up Location"
                      field="pickupLocation"
                      placeholder="Cairo"
                      formData={formData}
                      errors={errors}
                      updateField={updateField}
                    />
                    <InputField
                      label="Drop-off Location"
                      field="dropoffLocation"
                      placeholder="Alexandria"
                      formData={formData}
                      errors={errors}
                      updateField={updateField}
                    />
                    <InputField
                      label="Pick-up Date"
                      field="pickupDate"
                      type="date"
                      formData={formData}
                      errors={errors}
                      updateField={updateField}
                    />
                    <InputField
                      label="Return Date"
                      field="returnDate"
                      type="date"
                      formData={formData}
                      errors={errors}
                      updateField={updateField}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-charcoal mb-4">
                    Select Vehicle
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cars.map((car) => (
                      <button
                        key={car.id}
                        onClick={() => setSelectedCar(car)}
                        className={cn(
                          "text-left p-4 rounded-sm border transition-all",
                          selectedCar.id === car.id
                            ? "border-charcoal bg-surface"
                            : "border-border hover:border-charcoal/40"
                        )}
                      >
                        <p className="text-sm font-medium text-charcoal">{car.name}</p>
                        <p className="text-xs text-taupe mt-1">${car.price} / day</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex justify-between">
                  <Button variant="ghost" onClick={() => setStep(1)}>
                    ← Back
                  </Button>
                  <Button variant="primary" onClick={goToStep3}>
                    Review Booking →
                  </Button>
                </div>
              </div>
            )}

            {/* ===== STEP 3 ===== */}
            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-charcoal mb-6">
                    Confirm Your Booking
                  </h2>

                  <div className="bg-surface border border-border rounded-md p-6 space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-taupe">Vehicle</span>
                      <span className="text-charcoal font-medium">{selectedCar.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-taupe">Daily Rate</span>
                      <span className="text-charcoal font-medium">${selectedCar.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-taupe">Duration</span>
                      <span className="text-charcoal font-medium">{calculateDays()} days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-taupe">Insurance</span>
                      <span className="text-charcoal font-medium">Included</span>
                    </div>

                    <div className="pt-4 border-t border-border flex justify-between items-baseline">
                      <span className="text-sm text-taupe">Total</span>
                      <span className="text-2xl font-medium text-charcoal">
                        ${selectedCar.price * calculateDays()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex justify-between">
                  <Button variant="ghost" onClick={() => setStep(2)}>
                    ← Back
                  </Button>
                  <Button variant="primary" onClick={handleConfirm}>
                    Confirm Booking →
                  </Button>
                </div>
              </div>
            )}

          </div>

          {/* ===== SUMMARY ===== */}
          <div className="lg:col-span-1">
            <div data-reveal className="bg-surface border border-border rounded-md p-6 sticky top-24">
              <p className="text-xs font-medium text-taupe uppercase tracking-wider mb-4">
                Booking Summary
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-taupe">Vehicle</span>
                  <span className="text-charcoal font-medium">{selectedCar.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe">Category</span>
                  <span className="text-charcoal">{selectedCar.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe">Duration</span>
                  <span className="text-charcoal">{calculateDays()} days</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-taupe">Total</span>
                  <span className="text-2xl font-medium text-charcoal">
                    ${selectedCar.price * calculateDays()}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Booking