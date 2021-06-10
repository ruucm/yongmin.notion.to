import React from "react"
import { SectionCard } from "../_components/section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { SubTitle } from "../_components/sub-title"
import { PostLayout } from "../../../components/post-layout"
import { VideoGrid } from "../_components/video-grid"

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <VideoGrid videos={["EpMYSzYMaEE", "npEEZecqi4g"]} />
      <AnimateSharedLayout>
        <SubTitle>framer-code-generators</SubTitle>
      </AnimateSharedLayout>
    </PostLayout>
  )
}
