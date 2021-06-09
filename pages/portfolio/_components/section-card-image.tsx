import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { breakPoint } from "../../../consts"
import { LazyLoadImage } from "./lazy-load-image"
import styled from "styled-components"

const Wrap2 = styled.div`
  position: relative;
  width: 100%;
  height: 0px;
  padding-top: 66.66%;
`
const GifImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: 1px solid;
`
const StyledLazyLoadImage = styled(LazyLoadImage)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: 1px solid;
`

const defaultTransition = {
  duration: 0.36,
}

export function SectionCardImage({ img, grayscale, zoomed, setZoomed }) {
  let filter = ""
  if (grayscale) filter += "grayscale(1) brightness(0.5)"
  const isGif = img.includes("gif")

  return (
    <Wrap2 $zoomed={zoomed} $filter={filter}>
      <motion.div
        animate={{ opacity: zoomed ? 1 : 0 }}
        onClick={() => setZoomed(false)}
      />
      {isGif && (
        <GifImage
          src={img}
          alt=""
          onClick={() => setZoomed(!zoomed)}
          layout
          transition={defaultTransition}
        />
      )}
      {!isGif && (
        <StyledLazyLoadImage
          imgUrl={`${img}.webp`}
          placeholderUrl={`${img}-sharp.webp`}
          fallbackUrl={`${img}-sharp.webp`}
          onClick={() => setZoomed(!zoomed)}
          as={motion.img}
          layout
          transition={defaultTransition}
        />
      )}
    </Wrap2>
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
