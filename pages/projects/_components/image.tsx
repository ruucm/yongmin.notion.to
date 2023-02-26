import React from "react"
import { styled } from "styletron-react"
import { placeholderBasePath, placeholderImages } from "../../../consts"
import { LazyLoadImage } from "./lazy-load-image"

const StyledLazyLoadImage = styled(LazyLoadImage, {
  width: "100%",
  display: "block",
  border: "1px solid",
})

export function Image({ imageName, ...rest }) {
  const placeholderImage = placeholderImages[`${placeholderBasePath}/${imageName}.png`].default
  return <StyledLazyLoadImage placeholderImage={placeholderImage} imageName={imageName} {...rest} />
}
