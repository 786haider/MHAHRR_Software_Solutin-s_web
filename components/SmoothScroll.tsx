'use client'

import { useEffect } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Smooth scrolling is handled by CSS scroll-behavior: smooth
    // This component is kept for potential future enhancements
  }, [])

  return <>{children}</>
}
