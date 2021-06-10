import React from "react"
import { useHover } from "../hooks/use-hover"
import { styled } from "styletron-react"

const H2 = styled("h2", {
  // background: home ? "green" : "hsl(120 0% 65% / 1)",
  display: "inline-block",
  padding: 5,
  cursor: "pointer",
  lineHeight: "2rem",
  color: "blue",
  marginTop: "2rem",
  marginBottom: "2.5rem",
})

export function Header() {
  const [hoverRef, isHover]: any = useHover()

  return (
    <header>
      <a href="/">
        <H2 ref={hoverRef}>
          {isHover ? "안녕 하세요," : "Hello,"}
          <br />
          <span>I'm yongmin ruucm.</span>
        </H2>
      </a>
    </header>
  )
}

Header.defaultProps = {}
