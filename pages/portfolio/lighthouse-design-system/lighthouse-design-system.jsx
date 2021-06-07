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
          "/images/lighthouse_01",
          "/images/lighthouse_02",
          "/images/lighthouse_03",
          "/images/lighthouse_04",
          "/images/lighthouse_05",
          "/images/lighthouse_06",
          "/images/lighthouse_07",
          "/images/lighthouse_08",
        ]}
      />
    </Layout>
  )
}
