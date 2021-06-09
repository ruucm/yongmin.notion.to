import React from "react"
import { ProjectSectionCard } from "../_components/project-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { SubTitle } from "../_components/sub-title"
import { PostLayout } from "../../../components/post-layout"

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <AnimateSharedLayout>
        <SubTitle>framer-code-generators</SubTitle>
      </AnimateSharedLayout>
    </PostLayout>
  )
}
