import * as React from "react"
import { AspectRatio } from "../../../utils/aspect-ratio"

export function Video({ src, ratio = 1920 / 1080, ...rest }) {
  return (
    <AspectRatio ratio={ratio} {...rest}>
      <video
        // controls
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </AspectRatio>
  )
}

Video.defaultProps = {}
