import { useRef, useEffect, MutableRefObject, useState } from "react"
import { useWindowResize } from "./use-window"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  const sizeRef = useWindowResize(
    ({ width }) => {
      if (!isMobile && width <= 768) {
        setIsMobile(true)
      } else if (isMobile && width > 768) {
        setIsMobile(false)
      }
    },
    [isMobile]
  )

  return isMobile
}
