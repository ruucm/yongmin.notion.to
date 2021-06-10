import React from "react"
import { ProjectSectionCard } from "../_components/project-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { SubTitle } from "../_components/sub-title"
import { PostLayout } from "../../../components/post-layout"
import { AspectRatio } from "../../../utils/aspect-ratio"

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <AspectRatio ratio={3584 / 2240}>
          <iframe
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            src="https://www.youtube.com/embed/EpMYSzYMaEE?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Fharbor.school&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
          ></iframe>
        </AspectRatio>
        <AspectRatio ratio={3584 / 2240}>
          <iframe
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            src="https://www.youtube.com/embed/npEEZecqi4g?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Fharbor.school&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
          ></iframe>
        </AspectRatio>
      </div>
      <AnimateSharedLayout>
        <SubTitle>framer-code-generators</SubTitle>
      </AnimateSharedLayout>
    </PostLayout>
  )
}
