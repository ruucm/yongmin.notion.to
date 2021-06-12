import React from "react"
import { SectionCard } from "../_components/section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { SubTitle } from "../_components/sub-title"
import { PostLayout } from "../../../components/post-layout"
import { YoutubeVideoGrid } from "../_components/youtube-video-grid"
import { Spacing } from "../_components/spacing"

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <YoutubeVideoGrid videos={["EpMYSzYMaEE", "npEEZecqi4g"]} />
      <Spacing />
      <p>
        When I taught codes to designers for high-fidelity prototypes, I learned
        it is different how designers accept code worlds. They usually want to
        express themselves directly, like paintings.
        <br />
        <br />
        So they feel more depressed when they meet code errors and struggles to
        fix them. If they met minor errors from missing spells or indentings,
        situations are worse. They feel coding is not fit for them. Cause they
        used to in the world what they draw and what they get(!).
        <br />
        <br />
        So I made a plugin called "Framer Code Generators" that designers could
        code by clicking like saying words.
        <br />
        <br />
        For example, if they want to make a prototype about when clicking a
        button and it makes scaling box. All they need to do is click the
        "Override" button for the box, and click the "onTap" button then the
        "Scale" button. All codes are generated automatically without errors.
        <br />
        <br />
        As a result, designers could join the code worlds with a more familiar
        path. And they successfully reached their purposes (high-fidelity
        prototypes) without hassle.
      </p>
    </PostLayout>
  )
}
