import React from "react"
import { motion } from "framer-motion"
import { styled } from "styletron-react"
import {
  imageBasePath,
  imageDefaltRatio,
  placeholderBasePath,
  placeholderImages,
} from "../../../consts"
import { LazyLoadImage } from "./lazy-load-image"
import { AspectRatio } from "../../../utils/aspect-ratio"
import { Video } from "./video"
import { useESM } from "../../../hooks/use-esm"

const Wrap = styled("div", ({ $zoomed, $filter }: any) => {
  return {
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

export function SectionCardMedia({
  imageName,
  videoInfo = { path: "", posterName: "", ratio: 1 / 1 },
  grayscale,
  zoomed,
  setZoomed,
}) {
  let filter = ""
  if (grayscale) filter += "grayscale(1) brightness(0.5)"
  const isGif = imageName.includes("gif")
  const m: any = useESM(
    "https://module.harbor.school/dist/modules/interactions/scrolling/intersecting/reveal/react/hooks/use-intersection.js"
  )
  const motionProps = {
    onClick: () => setZoomed(!zoomed),
    layout: true,
    transition: defaultTransition,
  }

  return (
    <Wrap $zoomed={zoomed} $filter={filter}>
      <motion.div
        animate={{ opacity: zoomed ? 1 : 0 }}
        onClick={() => setZoomed(false)}
      />
      {isGif && (
        <AspectRatio ratio={imageDefaltRatio}>
          <GifImage
            // gif imageName has it's extension
            src={`${imageBasePath}/${imageName}`}
            alt=""
            {...motionProps}
          />
        </AspectRatio>
      )}
      {!isGif && imageName && (
        <StyledLazyLoadImage
          placeholderImage={
            placeholderImages[`${placeholderBasePath}/${imageName}.png`].default
          }
          imageName={imageName}
          {...motionProps}
        />
      )}
      {videoInfo.path && (
        <Video
          useIntersection={m?.useIntersection}
          src={videoInfo.path}
          poster={
            placeholderImages[
              `${placeholderBasePath}/${videoInfo.posterName}.png`
            ].default
          }
          ratio={videoInfo.ratio}
          {...motionProps}
        />
      )}
    </Wrap>
  )
}

SectionCardMedia.defaultProps = {}
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
