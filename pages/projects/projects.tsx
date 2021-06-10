import React from "react"
import { useState } from "react"
import { Card, Layout } from "../../components"
import { availableTags, cardDatas } from "../../consts"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { removeA } from "../../utils/removeA"
import { styled } from "styletron-react"
import { getUrlParams } from "../../utils"

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "20px",
})

const Tags = styled("div", {
  textAlign: "right",
  marginBottom: "7px",
  whiteSpace: "nowrap",
  // move Tag's transition at here, cause it emits weird errors.
  "em::before": {
    transition: "all 0.3s ease-in-out",
  },
})

const Tag = styled("em", ({ $active }: any): any => {
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
    },
  }
})

const allTags = [...availableTags] // Make a new array. it stays as same value, after updatin states.

export function Page() {
  const params: any = getUrlParams()
  const [tags, setTags] = useState(params?.tags?.split(",") || availableTags)

  return (
    <Layout home>
      <h3>Projects</h3>
      <p>
        I'm making projects and experiments for productivity and joy in screens.
      </p>
      <br />
      <br />
      <br />
      <AnimateSharedLayout>
        <Tags>
          {allTags.map((tag, id) => (
            <Tag
              key={id}
              $active={tags.includes(tag)}
              onClick={() =>
                setTags(
                  tags.includes(tag) ? removeA(tags, tag) : [...tags, tag]
                )
              }
            >
              {tag}
            </Tag>
          ))}
        </Tags>

        <Grid>
          {cardDatas.map((item: any, id) => (
            <AnimatePresence key={id} initial={false}>
              {tagFilter(tags, item) && (
                <Card
                  title={item.title}
                  duration={item.duration}
                  description={item.description}
                  outlink={item.outlink}
                  slug={item.slug}
                  // link={item.key && `/projects/${item.key}`}
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
