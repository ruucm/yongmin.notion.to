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
      <Video
        useIntersection={m?.useIntersection}
        src="/videos/shadergradient-landing.mp4"
        poster={placeholderImages[`${placeholderBasePath}/shadergradient-landing-poster.png`].default}
        ratio={1280 / 880}
        title="Website's Scroll Interaction (Landing Page)"
      />
      <Spacing />
      <Video
        useIntersection={m?.useIntersection}
        src="/videos/shadergradient-customize.mov"
        poster={placeholderImages[`${placeholderBasePath}/shadergradient-customize-poster.png`].default}
        ratio={1280 / 880}
        title="Customize Gradient"
      />
      <Spacing />
      <Video
        useIntersection={m?.useIntersection}
        src="/videos/shadergradient-proto.mov"
        poster={placeholderImages[`${placeholderBasePath}/shadergradient-proto-poster.png`].default}
        ratio={2688 / 1630}
        title="Early Prototypes (Figma Plugin)"
      />
      <Spacing />
      <Video
        useIntersection={m?.useIntersection}
        src="/videos/shadergradient-figma.mp4"
        poster={placeholderImages[`${placeholderBasePath}/shadergradient-figma-poster.png`].default}
        ratio={2992 / 1934}
        title="Figma Plugin"
      />
      <Spacing />
      <Video
        useIntersection={m?.useIntersection}
        src="/videos/shadergradient-framer.mp4"
        poster={placeholderImages[`${placeholderBasePath}/shadergradient-framer-poster.png`].default}
        ratio={1280 / 732}
        title="Framer Package"
      />
      <Spacing />
      <GridWrap>
        <Tweet tweetId="1627861756700762114" />
        <Tweet tweetId="1622021458724536320" />
        <Tweet tweetId="1628874572501233665" />
        <Tweet tweetId="1620978926091898881" />
      </GridWrap>
      <Spacing />
      <Description>
        <Title>Real people are using it so creatively!</Title>
      </Description>
    </PostLayout>
  )
}
