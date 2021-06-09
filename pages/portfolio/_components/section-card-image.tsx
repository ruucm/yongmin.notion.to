import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { styled } from "styletron-react"
import { breakPoint, imageBasePath, placeholderImages } from "../../../consts"
import { LazyLoadImage } from "./lazy-load-image"
import { Responsive } from "../../../utils/styled-components"

const Wrap = styled("div", ({ $zoomed, $filter }: any) => {
  return {
    // position: "relative",
    // width: "100%",
    // height: "0px",
    // paddingTop: "66.66%",
    filter: $filter,
    ...getCursurStyles({ $zoomed }),
  }
})
const GifImage = styled(motion.img, {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  width: "100%",
  height: "100%",
  border: "1px solid",
})
const StyledLazyLoadImage = styled(LazyLoadImage, {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  width: "100%",
  height: "100%",
  border: "1px solid",
})

const defaultTransition = {
  duration: 0.36,
}

export function SectionCardImage({ imageName, grayscale, zoomed, setZoomed }) {
  let filter = ""
  if (grayscale) filter += "grayscale(1) brightness(0.5)"
  const isGif = imageName.includes("gif")

  return (
    <Wrap $zoomed={zoomed} $filter={filter}>
      <motion.div
        animate={{ opacity: zoomed ? 1 : 0 }}
        onClick={() => setZoomed(false)}
      />
      {isGif && (
        <Responsive>
          <GifImage
            src={`${imageBasePath}/${imageName}`}
            alt=""
            onClick={() => setZoomed(!zoomed)}
            layout
            transition={defaultTransition}
          />
        </Responsive>
      )}
      {!isGif && (
        <StyledLazyLoadImage
          placeholderImage={
            placeholderImages[`/pages/assets/placeholders/${imageName}.png`]
              .default
          }
          imageName={imageName}
          // motion props
          onClick={() => setZoomed(!zoomed)}
          layout
          transition={defaultTransition}
        />
      )}
    </Wrap>
  )
}

SectionCardImage.defaultProps = {}
function getCursurStyles({ $zoomed }) {
  if ($zoomed) {
    return {
      cursor: "zoom-out",
    }
  } else {
    return {
      cursor: "zoom-in",
    }
  }
}
