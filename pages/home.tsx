import React from "react"
import { Layout } from "../components"
import { styled } from "styletron-react"
import { availableTags } from "../consts"
import { titleCase } from "../utils"

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
      <br />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {availableTags.map((tag, id) => (
          <Circle key={id} href={`/projects?tags=${tag}`}>
            <div>
              <em>for</em>
              <br />
              {titleCase(tag.replace("-", " "))}
            </div>
          </Circle>
        ))}
      </div>
    </Layout>
  )
}
