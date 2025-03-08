"use client"

import { useEffect, useState } from "react"

export function useResponsive() {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number } | null>(null)

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return {
    windowSize,
    isMobile: windowSize ? windowSize.width < 640 : false,
    isTablet: windowSize ? windowSize.width >= 640 && windowSize.width < 1024 : false,
    isDesktop: windowSize ? windowSize.width >= 1024 : false,
    isLargeDesktop: windowSize ? windowSize.width >= 1280 : false,
  }
}

