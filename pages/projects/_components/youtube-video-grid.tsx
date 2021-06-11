import * as React from "react"
import { YoutubeVideo } from "./youtube-video"

export function YoutubeVideoGrid({ videos }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {videos.map((videoId, id) => (
        <YoutubeVideo key={id} videoId={videoId} />
      ))}
    </div>
  )
}

YoutubeVideoGrid.defaultProps = {}
