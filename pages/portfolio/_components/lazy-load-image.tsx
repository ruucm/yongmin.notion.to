import React, { useEffect, useState } from "react"
import { styled } from "styletron-react"

const FixedSize = styled("div", ({ $zoomed, $filter }: any) => {
  return {
    position: "relative",
    width: "100%",
    height: "0px",
    paddingTop: "66.66%",
  }
})

export function LazyLoadImage({
  imgUrl,
  placeholderImage,
  as = "img",
  className,
  onClick,
  layout,
  transition,
}: any) {
  const ImageComp = styled(as, {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    height: "100%",
  })

  return (
    <FixedSize>
      <ImageComp
        src={placeholderImage}
        alt="portfolio-image"
        className={className}
        onClick={onClick}
        layout={layout}
        transition={transition}
      />
      <ImageComp
        src={imgUrl}
        alt="portfolio-image"
        className={className}
        onClick={onClick}
        layout={layout}
        transition={transition}
      />
    </FixedSize>
  )
}
