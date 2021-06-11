import React from "react"
import { AspectRatio } from "../../../utils/aspect-ratio"
import { useRef } from "react"
import { useEffect } from "react"

export function Video({
  src,
  ratio = 1920 / 1080,
  useIntersection = () => {
    return [null, true]
  },
  ...rest
}) {
  const [ref, visible] = useIntersection()

  return (
    <AspectRatio ratio={ratio} {...rest} $ref={ref}>
      <Inner src={src} visible={visible} />
    </AspectRatio>
  )
}

function Inner({ visible, src }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const vid: any = videoRef.current
    if (vid) {
      if (visible) {
        vid.play()
      } else vid.pause()
    }
  }, [visible, videoRef])

  return (
    <video
      // controls
      muted
      loop
      ref={videoRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  )
}
