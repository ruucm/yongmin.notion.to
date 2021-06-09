import React from "react"
import { useState } from "react"
import { Card, Layout } from "../../components"
import { cardDatas } from "../../consts"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { removeA } from "../../utils/removeA"
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
      <AnimateSharedLayout>
        <Tags>
          <Tag
            $active={tags.includes("develop")}
            onClick={() =>
              setTags(
                tags.includes("develop")
                  ? removeA(tags, "develop")
                  : [...tags, "develop"]
              )
            }
          >
            Develop
          </Tag>
          <Tag
            $active={tags.includes("design")}
            onClick={() =>
              setTags(
                tags.includes("design")
                  ? removeA(tags, "design")
                  : [...tags, "design"]
              )
            }
          >
            Design
          </Tag>
          <Tag
            $active={tags.includes("marketing")}
            onClick={() =>
              setTags(
                tags.includes("marketing")
                  ? removeA(tags, "marketing")
                  : [...tags, "marketing"]
              )
            }
          >
            Marketing
          </Tag>
        </Tags>

        <Grid>
          {data.map((item: any, id) => (
            <AnimatePresence key={id} initial={false}>
              {tagFilter(tags, item) && (
                <Card
                  title={item.title}
                  duration={item.duration}
                  description={item.description}
                  outlink={item.outlink}
                  slug={item.slug}
                  // link={item.key && `/portfolio/${item.key}`}
                  tags={item.tags}
                />
              )}
            </AnimatePresence>
          ))}
        </Grid>
      </AnimateSharedLayout>
    </Layout>
  )
}

function tagFilter(tags, item) {
  for (let i = 0; i < item.tags.length; i++) {
    const tag = item.tags[i]
    if (tags.includes(tag)) return true
  }
}
