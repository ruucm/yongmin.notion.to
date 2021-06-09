import React from "react"
import useLazyImg from "../../../hooks/use-lazy-image"
import styled from "styled-components"

const Wrap = styled.img`
  width: 100%;
  display: block;
  border: 1px solid;
  background: pink;
  height: initial;
`

// const StyledLazyLoadImage = styled("img", {
//   width: "100%",
//   display: "block",
//   border: "1px solid",
//   background: "pink",
//   height: "initial",
// })

export function LazyLoadImage2({ imgUrl, placeholderUrl, fallbackUrl }: any) {
  const { loading, imgSrc, onError } = useLazyImg(
    imgUrl,
    placeholderUrl,
    null,
    {},
    fallbackUrl
  )
  return <Wrap src={imgSrc} alt="portfolio-image" />
}
