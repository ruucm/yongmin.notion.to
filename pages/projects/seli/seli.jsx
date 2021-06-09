import React from "react"
import { ProjectSectionCard } from "../_components/project-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { Gallery } from "../_components/gallery"
import { SubTitle } from "../_components/sub-title"
import { styled } from "styletron-react"
import { PostLayout } from "../../../components/post-layout"

const Spacing = styled("div", {
  height: "100px",
})

const Grid = styled("div", {
  display: "grid",
  gap: "30px",
})

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <Gallery images={["seli_01", "seli_02", "seli_03", "seli_04"]} />
      <Spacing />
      <AnimateSharedLayout>
        <SubTitle>Delight Writing Experience for Magazine Website</SubTitle>
        <Grid>
          <ProjectSectionCard
            imageName={"seli-cms-problem"}
            title="[Problems] - There are no excellent editors for Web projects."
            description={`When developing web projects from scratch, there is only an old WYSIWYG editor for the admin side. I think it could be progressed.`}
            // grayscale
          />
          <ProjectSectionCard
            imageName={"seli-cms-notion"}
            title="[Solution] - Use Notion as CMS(Content Management System)"
            description={`I've seen many people use Notion(notion.so) as their daily notes, blogs, projectss, even for job postings. And it has a straightforward block-style editing system. It seems much better it linked to the front-end, but there was no official API yet (2020). So I decided to develop my own for this project. I used Github CI (Continous Integration) to link changes from Notion to the website. Python3 was also a good choice for getting Notion contents and performances.`}
          />
        </Grid>
      </AnimateSharedLayout>
    </PostLayout>
  )
}
