import { motion } from "framer-motion"
import React from "react"
import { styled } from "styletron-react"
import { Responsive } from "../../../utils/styled-components"

const Image = styled(motion.img, {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  width: "100%",
  height: "100%",
})

export function LazyLoadImage({
  placeholderImage,
  imageName,
  className,
  onClick,
  layout,
  transition,
}: any) {
  return (
    <Responsive>
      <Image
        src={placeholderImage}
        alt="portfolio-image-placholder"
        className={className}
        onClick={onClick}
        layout={layout}
        transition={transition}
      />
      <picture>
        <source srcSet={`/public/images/${imageName}.webp`} type="image/webp" />
        <source srcSet={`/public/images/${imageName}.png`} type="image/png" />
        <source srcSet={`/public/images/${imageName}.jpg`} type="image/jpg" />
        <source srcSet={`/public/images/${imageName}.jpeg`} type="image/jpeg" />

        <Image
          src={`/public/images/${imageName}.png`}
          alt="portfolio-image"
          className={className}
          onClick={onClick}
          layout={layout}
          transition={transition}
        />
      </picture>
    </Responsive>
  )
}
