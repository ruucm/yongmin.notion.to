import React from "react"
import { Summary } from "../_components/summary"
import { PostLayout } from "../../../components/post-layout"
import { Gallery } from "../_components/gallery"
import { Image } from "../_components/image"
import { Spacing } from "../_components/spacing"
import { SubTitle } from "../_components/sub-title"

export function Page({ slug }) {
  return (
    <PostLayout slug={slug}>
      <Summary slug={slug} />

      <SubTitle>Workflow Overview</SubTitle>
      <Image imageName="pds_10" />
      <Spacing />

      <SubTitle>{`1. Designer - Draw views and add interactions with real components.
      
      Basic components like Button, Input, Checkbox, Radio, etc. are also be drawn and maintained by designers without codes.`}</SubTitle>
      <Image imageName="pds_01" />
      <Spacing />
      <Image imageName="pds_02" />
      <Spacing />
      <Image imageName="pds_03" />

      <SubTitle>{`2. Developer - Use the automatically generated codes like other React components.

Developers don't need to care about view codes cause it is automatically drawn by designers. It reduces tons of time to sync between designs and codes (HTML & CSS) on the developer side.

After this workflow, developers can focus on the business logic not the tedious work anymore.`}</SubTitle>
      <Image imageName="pds_05" />
      <Spacing />
      <Image imageName="pds_04" />
      <Spacing />
      <Image imageName="pds_06" />
      <Spacing />

      {/* <Gallery images={["pds_05", "pds_06", "pds_10"]} /> */}
    </PostLayout>
  )
}
