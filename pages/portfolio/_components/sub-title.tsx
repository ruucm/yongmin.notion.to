import React from "react"
import { styled } from "styletron-react"

const H4 = styled("h4", {
  textAlign: "right",
  fontWeight: 400,
  color: "blue",
  marginTop: "64px",
})

export function SubTitle({ children }) {
  return <H4>{children}</H4>
}

SubTitle.defaultProps = {}
