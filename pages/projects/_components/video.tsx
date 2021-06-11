import React from "react"
import { AspectRatio } from "../../../utils/aspect-ratio"
import { useRef } from "react"
import { useEffect } from "react"

export function Video({
  src,
  ratio = 1920 / 1080,
  useIntersection = (): any => {
    return [null, false]
  },
  ...rest
}) {
  const [ref, visible] = useIntersection()

  return (
    <AspectRatio ratio={ratio} ref={ref} {...rest}>
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
        border: "1px solid",
      }}
    >
      <source src={`${src}#t=0.001`} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  )
}
