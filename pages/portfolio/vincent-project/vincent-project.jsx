import React from "react"
import { Layout } from "../../../components"
import { Summary } from "../components/summary"
import { Gallery } from "../components/gallery"
import vincent_01 from "../../../assets/vincent_01.png"
import vincent_02 from "../../../assets/vincent_02.png"
import vincent_03 from "../../../assets/vincent_03.png"
import vincent_04 from "../../../assets/vincent_04.png"

export function Page({ slug }) {
  return (
    <Layout>
      <Summary slug={slug} />
      <Gallery images={[vincent_01, vincent_02, vincent_03, vincent_04]} />
    </Layout>
  )
}
