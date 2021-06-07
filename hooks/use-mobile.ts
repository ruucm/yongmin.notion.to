import { useState } from "react"
import { breakPoint } from "../consts"
import { useWindowResize } from "./use-window"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  const sizeRef = useWindowResize(
    ({ width }) => {
      if (!isMobile && width <= breakPoint) setIsMobile(true)
      else if (isMobile && width > breakPoint) setIsMobile(false)
    },
    [isMobile]
  )

  return isMobile
}
