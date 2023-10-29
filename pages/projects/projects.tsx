import React from "react"
import { useState } from "react"
import { Card, Layout } from "../../components"
import { availableTags, breakPoint, cardDatas } from "../../consts"
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"
import { styled } from "styletron-react"
import { getUrlParams, removeA } from "../../utils"
import { useEffect } from "react"

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  rowGap: "var(--row-gap)",
})

const Tags = styled("div", {
  textAlign: "right",
  marginBottom: "var(--blockSpacingBottom)",
  whiteSpace: "nowrap",
  [`@media screen and (max-width: ${breakPoint}px)`]: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: "12px",
  },
})

const Tag = styled("em", ({ $active }: any): any => {
  return {
    position: "relative",
    textDecoration: "none",
    cursor: "pointer",
    marginLeft: "10px",
  }
})

const Line = styled(motion.div, ({ $active }: any) => ({
  position: "absolute",
  width: "100%",
  height: "1px",
  bottom: 0,
  left: 0,
  backgroundColor: "blue",
}))

const allTags = [...availableTags] // Make a new array. it stays as same value, after updatin states.

export function Page({ urlParsed: { search } }) {
  const tagsFromServer = search?.tags?.split(",") // server prop not works on SSG
  const tagsFromBrowser = getUrlParams()?.tags?.split(",")

  const [tags, setTags] = useState(tagsFromServer || tagsFromBrowser || [])

  useEffect(() => {
    // set all availableTags, if there is no available tags.
    // It fires on client routings too.
    if (!tagsFromServer && !tagsFromBrowser) setTags(availableTags)
  }, [tagsFromServer, tagsFromBrowser])

  return (
    <Layout home>
      <h3>Projects</h3>
      <p>I'm making projects and experiments for productivity and pleasure in screens.</p>
      <br />
      <br />
      <br />
      <AnimateSharedLayout>
        <Tags>
          {allTags.map((tag, id) => (
            <Tag key={id} onClick={() => setTags(tags.includes(tag) ? removeA(tags, tag) : [...tags, tag])}>
              {tag}
              <Line
                animate={{
                  scaleX: tags.includes(tag) ? 1 : 0,
                }}
              />
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
                  description={item.excerpt || item.description}
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
