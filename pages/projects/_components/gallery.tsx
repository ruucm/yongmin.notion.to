import React from "react"
import { styled } from "styletron-react"
import { breakPoint, imageBasePath } from "../../../consts"
import { Image } from "./image"

export const GridWrap = styled("div", ({ $flex }: any) => ({
  display: $flex ? "flex" : "grid",
  flexWrap: "wrap",
  gap: "var(--blockSpacingBottom)",
  gridTemplateColumns: "1fr 1fr",
  [`@media screen and (max-width: ${breakPoint}px)`]: {
    gridTemplateColumns: "1fr",
  },
}))
const Img = styled("img", {
  width: "100%",
  display: "block",
  border: "1px solid",
})

export function Gallery({ images, flex = true }) {
  return (
    <GridWrap $flex={flex}>
      {images.map((imageName, id) => {
        const isGif = imageName.includes("gif")

        if (isGif)
          return (
            <Img
              key={id}
              // gif imageName has it's extension
              src={`${imageBasePath}/${imageName}`}
              alt="projects-image"
            />
          )
        else return <Image key={id} imageName={imageName} />
      })}
    </GridWrap>
  )
}
