import React from "react"
import { SectionCard } from "../_components/section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { SubTitle } from "../_components/sub-title"
import { PostLayout } from "../../../components/post-layout"
import { Gallery } from "../_components/gallery"
import {
  imageBasePath,
  placeholderBasePath,
  placeholderImages,
} from "../../../consts"
import { Video } from "../_components/video"
import { useESM } from "../../../hooks/use-esm"
import { Spacing } from "../_components/spacing"

export function Page({ slug }) {
  const m: any = useESM(
    "https://module.harbor.school/dist/modules/interactions/scrolling/intersecting/reveal/react/hooks/use-intersection.js"
  )

  return (
    <PostLayout>
      <Summary slug={slug} />
      <Video
        useIntersection={m?.useIntersection}
        src="/videos/shadergradient-proto.mov"
        poster={
          placeholderImages[
            `${placeholderBasePath}/shadergradient-proto-poster.png`
          ].default
        }
        ratio={2688 / 1630}
      />
      <Spacing />
      <Video
        useIntersection={m?.useIntersection}
        src="/videos/shadergradient-customize.mov"
        poster={
          placeholderImages[
            `${placeholderBasePath}/shadergradient-customize-poster.png`
          ].default
        }
        ratio={1280 / 880}
      />
       <Spacing />
      <Video
        useIntersection={m?.useIntersection}
        src="/videos/shadergradient-landing.mp4"
        poster={
          placeholderImages[
            `${placeholderBasePath}/shadergradient-landing-poster.png`
          ].default
        }
        ratio={1280 / 880}
      />
    </PostLayout>
  )
}
