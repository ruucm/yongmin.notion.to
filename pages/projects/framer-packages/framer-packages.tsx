import React from "react"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { SubTitle } from "../_components/sub-title"
import { PostLayout } from "../../../components/post-layout"
import { YoutubeVideo } from "../_components/youtube-video"
import { Video } from "../_components/video"
import { Tweet } from "../_components/tweet"
import { Gallery } from "../_components/gallery"
import {
  placeholderBasePath,
  placeholderImages,
  youtubeVideoDefaltRatio,
} from "../../../consts"
import { LazyLoadImage } from "../_components/lazy-load-image"
import { Spacing } from "../_components/spacing"
import { useESM } from "../../../hooks/use-esm"

export function Page({ slug }) {
  const m: any = useESM(
    "https://module.harbor.school/dist/modules/interactions/scrolling/intersecting/reveal/react/hooks/use-intersection.js"
  )

  return (
    <PostLayout>
      <Summary slug={slug} />
      <Gallery images={["enhanced-lottie-01"]} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <LazyLoadImage
          placeholderImage={
            placeholderImages[`${placeholderBasePath}/enhanced-lottie-02.png`]
              .default
          }
          imageName={"enhanced-lottie-02"}
          style={{
            display: "block",
          }}
        />
        <Video
          useIntersection={m?.useIntersection}
          src="/videos/enhanced-lottie.mov"
          ratio={2688 / 1630}
        />
      </div>
      <Spacing />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        <Video
          useIntersection={m?.useIntersection}
          src="/videos/bed-time-movie.mp4"
          ratio={1 / 1}
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 3,
          }}
        />
        <Tweet
          tweetId="1263573216091467777"
          style={{
            gridColumnStart: 3,
            gridColumnEnd: 5,
          }}
        />
      </div>
      <Spacing />

      <Video
        useIntersection={m?.useIntersection}
        src="/videos/balloon-slider.mp4"
      />
      <Spacing />

      <Gallery images={["number-count-01"]} />
      <Video
        useIntersection={m?.useIntersection}
        src="/videos/basic-counter.mp4"
        ratio={1 / 1}
        style={{
          gridColumnStart: 1,
          gridColumnEnd: 3,
        }}
      />
      <Spacing />

      <Gallery images={["confetti-plus-01"]} />
      <Tweet tweetId="1351806402990272514" />
      <Spacing />

      <Gallery images={["saturation-gradients-01"]} />
      <Video
        useIntersection={m?.useIntersection}
        src="/videos/saturation-gradients.mov"
        ratio={2688 / 1630}
      />

      <AnimateSharedLayout>
        <SubTitle>framer-packages</SubTitle>
      </AnimateSharedLayout>
    </PostLayout>
  )
}
