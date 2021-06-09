import React from "react"
import useLazyImg from "../../../hooks/use-lazy-image"
import dummy from "../../assets/dummy.png"
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
  placeholderUrl,
  fallbackUrl,
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

  const { loading, imgSrc, onError } = useLazyImg(
    imgUrl,
    placeholderUrl,
    null,
    {},
    fallbackUrl
  )

  return (
    <FixedSize>
      <ImageComp
        src={dummy}
        alt="portfolio-image"
        className={className}
        onClick={onClick}
        layout={layout}
        transition={transition}
        style={{}}
      />
      <ImageComp
        src={imgSrc}
        alt="portfolio-image"
        className={className}
        onClick={onClick}
        layout={layout}
        transition={transition}
      />
    </FixedSize>
  )
}
