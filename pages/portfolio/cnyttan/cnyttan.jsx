import React from "react"
import { Layout } from "../../../components"
import { Summary } from "../_components/summary"
import { Gallery } from "../_components/gallery"

export function Page({ slug }) {
  return (
    <Layout>
      <Summary slug={slug} />
      <Gallery
        images={[
          "/images/cynttan_01",
          "/images/cynttan_02",
          "/images/cynttan_03",
          "/images/cynttan_04",
        ]}
      />
      <p>
        I handled whole WordPress shopping functions (cart, checkout, refund,
        membership, shipping) as REST API for making dynamic checkout front page
        with React.
      </p>
    </Layout>
  )
}
