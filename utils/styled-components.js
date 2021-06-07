import { styled } from "styletron-react"
import { breakPoint } from "../consts"

export const DesktopOnly = styled("div", {
  [`@media screen and (max-width: ${breakPoint}px)`]: {
    display: "none",
  },
})

export const MobileOnly = styled("div", {
  display: "none",
  [`@media screen and (max-width: ${breakPoint}px)`]: {
    display: "block",
  },
})
