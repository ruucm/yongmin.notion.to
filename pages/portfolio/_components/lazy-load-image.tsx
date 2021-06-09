import React from "react"
import useLazyImg from "../../../hooks/use-lazy-image"
import dummy from "../../assets/dummy.png"

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
  const Comp: any = as

  const { loading, imgSrc, onError } = useLazyImg(
    imgUrl,
    dummy,
    null,
    {},
    fallbackUrl
  )
  return (
    <Comp
      src={imgSrc}
      alt="portfolio-image"
      className={className}
      onClick={onClick}
      layout={layout}
      transition={transition}
    />
  )
}
