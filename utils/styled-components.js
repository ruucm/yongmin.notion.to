import { breakPoint } from "../consts"
import styled from "styled-components"

export const DesktopOnly = styled.div`
  @media (max-width: ${breakPoint}px) {
    display: none;
  }
`
export const MobileOnly = styled.div`
  display: none;
  @media (max-width: ${breakPoint}px) {
    display: block;
  }
`
