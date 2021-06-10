import React from "react"
import { SectionCard } from "../_components/section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { SubTitle } from "../_components/sub-title"
import { PostLayout } from "../../../components/post-layout"
import { Gallery } from "../_components/gallery"
import { imageBasePath } from "../../../consts"

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <Gallery images={["3d-gradient-plugin.gif"]} />

      <AnimateSharedLayout>
        <SubTitle>3d-gradient-plugin</SubTitle>
      </AnimateSharedLayout>
    </PostLayout>
  )
}
