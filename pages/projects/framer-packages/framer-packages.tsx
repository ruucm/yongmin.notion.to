import React from "react"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { SubTitle } from "../_components/sub-title"
import { PostLayout } from "../../../components/post-layout"
import { YoutubeVideo } from "../_components/youtube-video"
import { Video } from "../_components/video"
import { Tweet } from "../_components/tweet"

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        <Tweet
          tweetId="1263573216091467777"
          style={{
            gridColumnStart: 2,
            gridColumnEnd: 5,
          }}
        />
        <Tweet
          tweetId="1351806402990272514"
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 4,
          }}
        />
        <YoutubeVideo
          videoId="NXhWymPSCpc"
          style={{
            gridColumnStart: 2,
            gridColumnEnd: 5,
          }}
        />

        <Video
          src="/videos/balloon-slider.mp4"
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 5,
          }}
        />

        <Video
          src="/videos/basic-counter.mp4"
          ratio={1 / 1}
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 3,
          }}
        />

        <Video
          src="/videos/bed-time-movie.mp4"
          ratio={1 / 1}
          style={{
            gridColumnStart: 3,
            gridColumnEnd: 5,
          }}
        />
      </div>

      <AnimateSharedLayout>
        <SubTitle>framer-packages</SubTitle>
      </AnimateSharedLayout>
    </PostLayout>
  )
}
