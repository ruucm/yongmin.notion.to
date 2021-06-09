import React from "react"
import { Layout } from "../../../components"
import { Summary } from "../_components/summary"
import { Gallery } from "../_components/gallery"

export function Page({ slug }) {
  return (
    <Layout>
      <Summary slug={slug} />
      <Gallery
        images={["vincent_01", "vincent_02", "vincent_03", "vincent_04"]}
      />
    </Layout>
  )
}
