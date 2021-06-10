import * as React from "react"
import { useHover } from "../hooks/use-hover"

export function HoverText({ as, normal, hovered }) {
  const [hoverRef, isHover]: any = useHover()
  const Comp = as

  return <Comp ref={hoverRef}>{isHover ? hovered : normal}</Comp>
}
