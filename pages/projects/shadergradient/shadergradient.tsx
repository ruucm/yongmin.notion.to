import React from "react"
import { Description, SectionCard, Title } from "../_components/section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { SubTitle } from "../_components/sub-title"
import { PostLayout } from "../../../components/post-layout"
import { Gallery, GridWrap } from "../_components/gallery"
import { imageBasePath, placeholderBasePath, placeholderImages } from "../../../consts"
import { Video } from "../_components/video"
import { useESM } from "../../../hooks/use-esm"
import { Spacing } from "../_components/spacing"
import { Tweet } from "../_components/tweet"

export function Page({ slug }) {
  const m: any = useESM(
    "https://module.harbor.school/dist/modules/interactions/scrolling/intersecting/reveal/react/hooks/use-intersection.js"
  )

  return (
    <PostLayout>
      <Summary slug={slug} />

      <SectionCard
        videoInfo={{
          path: "/videos/shadergradient-landing.mp4",
          posterName: "shadergradient-landing-poster",
          ratio: 1280 / 880,
        }}
        isZoomed
        title="Website's Scroll Interaction (Landing Page)"
      />
      <Spacing />

      <SectionCard
        videoInfo={{
          path: "/videos/shadergradient-customize.mov",
          posterName: "shadergradient-customize-poster",
          ratio: 1280 / 880,
        }}
        isZoomed
        title="Customize Gradient"
      />
      <Spacing />

      <SectionCard
        videoInfo={{
          path: "/videos/shadergradient-proto.mov",
          posterName: "shadergradient-proto-poster",
          ratio: 2688 / 1630,
        }}
        isZoomed
        title="Early Prototypes (Figma Plugin)"
      />
      <SectionCard
        videoInfo={{
          path: "/videos/shadergradient-figma.mp4",
          posterName: "shadergradient-figma-poster",
          ratio: 2992 / 1934,
        }}
        isZoomed
        title="Figma Plugin"
      />

      <SectionCard
        videoInfo={{
          path: "/videos/shadergradient-framer.mp4",
          posterName: "shadergradient-framer-poster",
          ratio: 1280 / 732,
        }}
        isZoomed
        title="Framer Package"
      />

      <Spacing />
      <GridWrap>
        <Tweet tweetId="1627861756700762114" />
        <Tweet tweetId="1622021458724536320" />
        <Tweet tweetId="1628874572501233665" />
        <Tweet tweetId="1620978926091898881" />
      </GridWrap>

      <Description>
        <Title>Real people are using it so creatively!</Title>
      </Description>
    </PostLayout>
  )
}
