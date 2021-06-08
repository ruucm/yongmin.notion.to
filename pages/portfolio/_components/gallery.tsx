import React from "react"
import { styled } from "styletron-react"
import { breakPoint } from "../../../consts"

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

export function Gallery({ images }) {
  return (
    <GridWrap>
      {images.map((image, id) => {
        const isGif = image.includes("gif")

        if (isGif)
          return (
            <img
              key={id}
              src={image}
              alt="portfolio-image"
              style={{
                width: "100%",
                display: "block",
                border: "1px solid",
              }}
            />
          )
        else
          return (
            <picture key={id}>
              <source srcSet={`${image}.webp`} type="image/webp" />
              <source srcSet={`${image}.png`} type="image/png" />
              <source srcSet={`${image}.jpg`} type="image/jpg" />
              <source srcSet={`${image}.jpeg`} type="image/jpeg" />
              <img
                src={`${image}.png`}
                alt="portfolio-image"
                style={{
                  width: "100%",
                  display: "block",
                  border: "1px solid",
                }}
              />
            </picture>
          )
      })}
    </GridWrap>
  )
}
