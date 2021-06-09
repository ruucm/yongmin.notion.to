import React from "react"
import { useState } from "react"
import { Card, Layout } from "../components"
import { cardDatas } from "../consts"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { removeA } from "../utils/removeA"
import { styled } from "styletron-react"

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "20px",
})

const Tag = styled("em", ({ $active }: any) => {
  return {
    position: "relative",
    textDecoration: "none",
    cursor: "pointer",
    marginLeft: "10px",
    "::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "1px",
      bottom: 0,
      left: 0,
      backgroundColor: "blue",
      visibility: $active ? "visible" : "hidden",
      transform: $active ? "scaleX(1)" : "scaleX(0)",
      transition: "all 0.3s ease-in-out 0s",
    },
  }
})

const Tags = styled("div", {
  textAlign: "right",
  marginBottom: "7px",
})

export function Page() {
  const [data, setData] = useState(cardDatas)
  const [tags, setTags] = useState(["develop", "design", "marketing"])

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
        <a
          style={{
            width: 300,
            height: 300,
            border: "1px solid",
            borderRadius: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          href="/projects"
        >
          Design teams who want to close gap between their designs and real
          products.
        </a>
        <div
          style={{
            width: 300,
            height: 300,
            border: "1px solid",
            borderRadius: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Designers who want to learn codes.
        </div>
        <div
          style={{
            width: 300,
            height: 300,
            border: "1px solid",
            borderRadius: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          UI designers
        </div>
        <div
          style={{
            width: 300,
            height: 300,
            border: "1px solid",
            borderRadius: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Content writers, who wants to integrate his writing experiences.
        </div>
      </div>
    </Layout>
  )
}

function tagFilter(tags, item) {
  for (let i = 0; i < item.tags.length; i++) {
    const tag = item.tags[i]
    if (tags.includes(tag)) return true
  }
}
