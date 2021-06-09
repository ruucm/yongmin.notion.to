import React from "react"
import { useHover } from "../hooks/use-hover"
import styled from "styled-components"

const H2 = styled.h2`
  display: inline-block;
  padding: 5px;
  cursor: pointer;
  line-height: 2rem;
  color: blue;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
`
const UnderLine = styled.span`
  text-decoration: underline;
`

export function Header() {
  const [hoverRef, isHover]: any = useHover()

  return (
    <header>
      <a href="/">
        <H2 ref={hoverRef}>
          {isHover ? "안녕 하세요," : "Hello,"}
          <br />
          <UnderLine>I'm yongmin ruucm.</UnderLine>
        </H2>
      </a>
    </header>
  )
}

Header.defaultProps = {}
