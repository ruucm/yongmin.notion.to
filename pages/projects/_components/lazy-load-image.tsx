import { motion } from "framer-motion"
import React from "react"
import { styled } from "styletron-react"
import { imageBasePath, imageDefaltRatio } from "../../../consts"
import { AspectRatio } from "../../../utils/aspect-ratio"

const Image = styled(motion.img, {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
})

export function LazyLoadImage({
  placeholderImage,
  imageName,
  className,
  onClick,
  layout,
  transition,
  // style,
  ...rest
}: any) {
  return (
    <AspectRatio ratio={imageDefaltRatio} {...rest}>
      <div>
        <Image
          src={placeholderImage}
          alt="projects-image-placholder"
          className={className}
          onClick={onClick}
          layout={layout}
          transition={transition}
        />
        <picture>
          <source
            srcSet={`${imageBasePath}/${imageName}.webp`}
            type="image/webp"
          />
          <source
            srcSet={`${imageBasePath}/${imageName}.png`}
            type="image/png"
          />
          <source
            srcSet={`${imageBasePath}/${imageName}.jpg`}
            type="image/jpg"
          />
          <source
            srcSet={`${imageBasePath}/${imageName}.jpeg`}
            type="image/jpeg"
          />

          <Image
            src={`${imageBasePath}/${imageName}.png`}
            alt="projects-image"
            className={className}
            onClick={onClick}
            layout={layout}
            transition={transition}
          />
        </picture>
      </div>
    </AspectRatio>
  )
}
