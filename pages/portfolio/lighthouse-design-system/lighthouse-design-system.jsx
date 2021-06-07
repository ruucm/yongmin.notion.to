import React from "react"
import { Layout } from "../../../components"
import { Summary } from "../_components/summary"
import { Gallery } from "../_components/gallery"

export function Page() {
  return (
    <Layout>
      <Summary />
      <Gallery
        images={[
          "lighthouse_01",
          "lighthouse_02",
          "lighthouse_03",
          "lighthouse_04",
          "lighthouse_05",
          "lighthouse_06",
          "lighthouse_07",
          "lighthouse_08",
        ]}
      />
    </Layout>
  )
}
