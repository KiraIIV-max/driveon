import { useState, useEffect } from "react"

const STORAGE_KEY = "driveon_bookings"

export function useBookings() {
  const [bookings, setBookings] = useState([])

  // ===== Load from LocalStorage on mount =====
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setBookings(JSON.parse(stored))
      }
    } catch (err) {
      console.error("Failed to load bookings:", err)
    }
  }, [])

  // ===== Save to LocalStorage =====
  const saveBooking = (booking) => {
    const updated = [booking, ...bookings]
    setBookings(updated)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch (err) {
      console.error("Failed to save booking:", err)
    }
  }

  // ===== Delete booking =====
  const deleteBooking = (bookingId) => {
    const updated = bookings.filter((b) => b.bookingId !== bookingId)
    setBookings(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  // ===== Clear all =====
  const clearBookings = () => {
    setBookings([])
    localStorage.removeItem(STORAGE_KEY)
  }

  return { bookings, saveBooking, deleteBooking, clearBookings }
}