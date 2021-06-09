import React from "react"
import { Layout } from "../../../components"
import { ProjectSectionCard } from "../_components/project-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { SubTitle } from "../_components/sub-title"

export function Page({ slug }) {
  return (
    <Layout>
      <Summary slug={slug} />
      <AnimateSharedLayout>
        <SubTitle>2019 Framer Korea Meetup Website</SubTitle>
        <ProjectSectionCard
          imageName={"framer-korea-2019"}
          title=""
          description={`I developed whole websites using Gatsby.js with the other junior developer. I used Framer to communicate with a designer for motion.

          It also supports bilingual en/ko without losing the website's speed.
          `}
        />

        <SubTitle>2020 Framer Korea Meetup Website</SubTitle>
        <ProjectSectionCard
          imageName={"framer-korea-2020"}
          title=""
          description={`
          I developed whole websites using Gatsby.js. I prototyped motions of the website on Framer and moved it to the React development environment without hassle.`}
        />
      </AnimateSharedLayout>
    </Layout>
  )
}
