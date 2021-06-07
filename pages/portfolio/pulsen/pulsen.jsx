import React from "react"
import { Layout } from "../../../components"
import { Summary } from "../components/summary"
import { Gallery } from "../components/gallery"
import pulsen from "../../../assets/pulsen.gif"

export function Page({ slug }) {
  return (
    <Layout>
      <Summary slug={slug} />
      <Gallery images={[pulsen]} />
    </Layout>
  )
}
