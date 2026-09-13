import { useEffect, useRef } from "react"
import gsap from "gsap"

export function useReveal(options = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll("[data-reveal]")
    if (elements.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: options.y ?? 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.7,
          ease: options.ease ?? "power2.out",
          stagger: options.stagger ?? 0.08,
          delay: options.delay ?? 0,
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}