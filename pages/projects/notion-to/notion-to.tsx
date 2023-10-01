import React from "react"
import { Summary } from "../_components/summary"
import { PostLayout } from "../../../components/post-layout"
import { YoutubeVideo } from "../_components/youtube-video"

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <YoutubeVideo videoId="f6oQmORjMnc" />
    </PostLayout>
  )
}
