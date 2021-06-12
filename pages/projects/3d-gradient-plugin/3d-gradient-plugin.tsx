import React from "react"
import { SectionCard } from "../_components/section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { SubTitle } from "../_components/sub-title"
import { PostLayout } from "../../../components/post-layout"
import { Gallery } from "../_components/gallery"
import { imageBasePath } from "../../../consts"
import { Video } from "../_components/video"
import { useESM } from "../../../hooks/use-esm"

export function Page({ slug }) {
  const m: any = useESM(
    "https://module.harbor.school/dist/modules/interactions/scrolling/intersecting/reveal/react/hooks/use-intersection.js"
  )

  return (
    <PostLayout>
      <Summary slug={slug} />
      <Video
        useIntersection={m?.useIntersection}
        src="/videos/3d-gradient-plugin.mov"
        ratio={2688 / 1630}
        poster="/images/3d-gradient-plugin-poster.webp"
      />

      <AnimateSharedLayout>
        <SubTitle>3d-gradient-plugin</SubTitle>
      </AnimateSharedLayout>
    </PostLayout>
  )
}
