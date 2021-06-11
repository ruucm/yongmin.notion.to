import React from "react"
import { useHover } from "../hooks/use-hover"
import { styled } from "styletron-react"
import { HoverText } from "./hover-text"

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
        <HoverText
          as={H2}
          normal={
            <>
              Hello,
              <br />
              <span>I'm yongmin ruucm.</span>
            </>
          }
          hovered={
            <>
              안녕 하세요,
              <br />
              <span>I'm yongmin ruucm.</span>
            </>
          }
        ></HoverText>
      </a>
    </header>
  )
}

Header.defaultProps = {}
