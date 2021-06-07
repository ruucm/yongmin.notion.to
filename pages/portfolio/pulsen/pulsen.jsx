import React from "react"
import { Layout } from "../../../components"
import { Summary } from "../_components/summary"
import { Gallery } from "../_components/gallery"

export function Page({ slug }) {
  return (
    <Layout>
      <Summary slug={slug} />
      <Gallery images={["/images/pulsen.gif"]} />
    </Layout>
  )
}
