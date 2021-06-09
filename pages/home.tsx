import React from "react"
import { Layout } from "../components"
import { styled } from "styletron-react"

const Circle = styled("a", {
  width: "300px",
  height: "300px",
  border: "1px solid",
  borderRadius: "1000px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
})

export function Page() {
  return (
    <Layout home>
      <h3>Design Engineer</h3>
      <p>A journey of programming to solving creative people's problems.</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Circle href="/projects?tags=design-teams">Design Teams</Circle>
        <Circle href="/projects?tags=techy-designers">Techy Designers</Circle>
        <Circle href="/projects?tags=prototypers">Prototypers</Circle>
        <Circle href="/projects?tags=writers">Writers</Circle>
      </div>
    </Layout>
  )
}
