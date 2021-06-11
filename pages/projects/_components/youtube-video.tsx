import * as React from "react"
import { youtubeVideoDefaltRatio } from "../../../consts"
import { AspectRatio } from "../../../utils/aspect-ratio"

export function YoutubeVideo({ videoId, ...rest }) {
  return (
    <AspectRatio ratio={youtubeVideoDefaltRatio} {...rest}>
      <iframe
        frameBorder="0"
        // allowFullScreen="1"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Fharbor.school&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"`}
      ></iframe>
    </AspectRatio>
  )
}

YoutubeVideo.defaultProps = {}
