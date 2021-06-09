import React from "react"
import styled from "styled-components"

const H4 = styled.h4`
  text-align: right;
  font-weight: 400px;
  color: blue;
  margin-top: 64px;
`

export function SubTitle({ children }) {
  return <H4>{children}</H4>
}

SubTitle.defaultProps = {}
