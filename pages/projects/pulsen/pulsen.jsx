import React from "react"
import { Summary } from "../_components/summary"
import { Gallery } from "../_components/gallery"
import { PostLayout } from "../../../components/post-layout"

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <Gallery images={["pulsen.gif"]} />
    </PostLayout>
  )
}
