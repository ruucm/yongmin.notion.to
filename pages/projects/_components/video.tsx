import React from "react"
import { AspectRatio } from "../../../utils/aspect-ratio"
import { useRef } from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"

const MotionAspectRatio = motion(AspectRatio)

export function Video({
  src,
  poster,
  ratio = 1920 / 1080,
  useIntersection = (opt): any => {
    return [null, false]
  },
  ...rest
}) {
  const [ref, visible] = useIntersection({ threshold: 0.7 })

  return (
    // enable intersect watching
    <div ref={ref}>
      {/* enable layout motion */}
      <MotionAspectRatio ratio={ratio} {...rest}>
        <Inner src={src} poster={poster} visible={visible} />
      </MotionAspectRatio>
    </div>
  )
}

function Inner({ visible, src, poster }) {
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
      poster={poster}
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
