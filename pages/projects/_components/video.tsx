import React from "react"
import { AspectRatio } from "../../../utils/aspect-ratio"
import { useRef } from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { useHover } from "../../../hooks/use-hover"

import { styled } from "styletron-react"
import { breakPoint } from "../../../consts"

const Title = styled(motion.h3, {
  background: "white",
  color: "blue",
  fontSize: "16px",
  fontWeight: 400,
  padding: "10px 20px",

  position: "absolute",
  bottom: "16px",
  right: "16px",

  [`@media screen and (max-width: ${breakPoint}px)`]: {
    bottom: "0px",
    right: "0px",
    margin: "0px",
    padding: "6px 8px",
    fontSize: "14px",
  },
})

const MotionAspectRatio = motion(AspectRatio)

export function Video({
  src,
  poster,
  ratio = 1920 / 1080,
  useIntersection = (opt): any => {
    return [null, false]
  },
  title = "",
  ...rest
}) {
  const [ref, visible] = useIntersection({ threshold: 0.7 })

  return (
    // enable intersect watching
    <div ref={ref}>
      {/* enable layout motion */}
      <MotionAspectRatio ratio={ratio} {...rest}>
        <Inner src={src} poster={poster} visible={visible} title={title} />
      </MotionAspectRatio>
    </div>
  )
}

function Inner({ visible, src, poster, title }) {
  const videoRef = useRef(null)
  const [, isHover]: any = useHover({ passedRef: videoRef })

  useEffect(() => {
    const vid: any = videoRef.current
    if (vid) {
      if (visible) {
        vid.play()
      } else vid.pause()
    }
  }, [visible, videoRef])

  return (
    <>
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
          objectFit: "cover",
        }}
      >
        <source src={`${src}#t=0.001`} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <Title animate={{ opacity: isHover ? 0 : 0.9 }}>{title}</Title>
    </>
  )
}
