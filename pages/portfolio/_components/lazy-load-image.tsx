import React from "react"
import useLazyImg from "../../../hooks/use-lazy-image"

export function LazyLoadImage({
  imgUrl,
  placeholderUrl,
  fallbackUrl,
  $as = "img",
  ...rest
}: any) {
  const Comp: any = $as
  const { loading, imgSrc, onError } = useLazyImg(
    imgUrl,
    placeholderUrl,
    null,
    {},
    fallbackUrl
  )
  return (
    <Comp
      src={imgSrc}
      alt="portfolio-image"
      style={{
        width: "100%",
        display: "block",
        border: "1px solid",
      }}
      {...rest}
    />
  )
}
