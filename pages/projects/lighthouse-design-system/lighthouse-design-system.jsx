import React from "react"
import { Summary } from "../_components/summary"
import { Gallery } from "../_components/gallery"
import { PostLayout } from "../../../components/post-layout"

export function Page({ slug }) {
  return (
    <PostLayout slug={slug}>
      <Summary />
      <Gallery
        images={[
          "lighthouse_10",
          "lighthouse_09",
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
    </PostLayout>
  )
}
