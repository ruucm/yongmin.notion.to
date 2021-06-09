import React from "react"
import { Summary } from "../_components/summary"
import { Gallery } from "../_components/gallery"
import { PostLayout } from "../../../components/post-layout"

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <Gallery
        images={["cynttan_01", "cynttan_02", "cynttan_03", "cynttan_04"]}
      />
      <p>
        I handled whole WordPress shopping functions (cart, checkout, refund,
        membership, shipping) as REST API for making dynamic checkout front page
        with React.
      </p>
    </PostLayout>
  )
}
