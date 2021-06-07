import { styled } from "styletron-react"

export const DesktopOnly = styled("div", {
  [`@media screen and (max-width: 768px)`]: {
    display: "none",
  },
})

export const MobileOnly = styled("div", {
  display: "none",
  [`@media screen and (max-width: 768px)`]: {
    display: "block",
  },
})
