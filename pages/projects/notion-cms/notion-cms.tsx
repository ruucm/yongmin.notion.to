import React from "react"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { PostLayout } from "../../../components/post-layout"
import { Gallery } from "../_components/gallery"
import { Spacing } from "../_components/spacing"

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <AnimateSharedLayout>
        {/* <SubTitle>framer-packages</SubTitle> */}
        <Gallery
          images={[
            "notion-seli-02",
            "notion-seli-03",
            "notion-cms-progress-1",
            "notion-cms-progress-2",
            "notion-seli-04",
            "notion-seli-06",
            "notion-seli-07",
          ]}
        />
        <Spacing />
        <Gallery images={["notion-seli-01", "notion-seli-05"]} />
      </AnimateSharedLayout>
    </PostLayout>
  )
}
