import React from "react"
import { Layout } from "../../../components"
import { PortfolioSectionCard } from "../_components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { Gallery } from "../_components/gallery"
import { SubTitle } from "../_components/sub-title"

export function Page({ slug }) {
  return (
    <Layout>
      <Summary slug={slug} />
      <Gallery
        images={[
          "/images/seli_01",
          "/images/seli_02",
          "/images/seli_03",
          "/images/seli_04",
        ]}
      />
      <div
        style={{
          height: 100,
        }}
      />
      <AnimateSharedLayout>
        <SubTitle>Delight Writing Experience for Magazine Website</SubTitle>
        <div
          style={{
            display: "grid",
            gap: 30,
          }}
        >
          <PortfolioSectionCard
            img={"/images/seli-cms-problem"}
            title="[Problems] - There are no excellent editors for Web projects."
            description={`When developing web projects from scratch, there is only an old WYSIWYG editor for the admin side. I think it could be progressed.`}
            // grayscale
          />
          <PortfolioSectionCard
            img={"/images/seli-cms-notion"}
            title="[Solution] - Use Notion as CMS(Content Management System)"
            description={`I've seen many people use Notion(notion.so) as their daily notes, blogs, portfolios, even for job postings. And it has a straightforward block-style editing system. It seems much better it linked to the front-end, but there was no official API yet (2020). So I decided to develop my own for this project. I used Github CI (Continous Integration) to link changes from Notion to the website. Python3 was also a good choice for getting Notion contents and performances.`}
          />
        </div>
      </AnimateSharedLayout>
    </Layout>
  )
}
