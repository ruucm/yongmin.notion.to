import React from "react"
import { styled } from "styletron-react"
import {
  breakPoint,
  imageBasePath,
  placeholderBasePath,
  placeholderImages,
} from "../../../consts"
import { LazyLoadImage } from "./lazy-load-image"

const GridWrap = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  marginTop: "30px",
  gap: "30px",
  marginBottom: "30px",
  [`@media screen and (max-width: ${breakPoint}px)`]: {
    gridTemplateColumns: "1fr",
  },
})
const Img = styled("img", {
  width: "100%",
  display: "block",
  border: "1px solid",
})
const StyledLazyLoadImage = styled(LazyLoadImage, {
  width: "100%",
  display: "block",
  border: "1px solid",
})

export function Gallery({ images }) {
  return (
    <GridWrap>
      {images.map((imageName, id) => {
        const isGif = imageName.includes("gif")

        if (isGif)
          return (
            <Img
              key={id}
              src={`${imageBasePath}/${imageName}`}
              alt="portfolio-image"
            />
          )
        else {
          const placeholderImage =
            placeholderImages[`${placeholderBasePath}/${imageName}.png`].default
          return (
            <StyledLazyLoadImage
              key={id}
              placeholderImage={placeholderImage}
              imageName={imageName}
            />
          )
        }
      })}
    </GridWrap>
  )
}
