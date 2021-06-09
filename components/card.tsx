import React from "react"
import { motion } from "framer-motion"
import { styled } from "styletron-react"

const Wrap = styled(motion.div, {
  position: "relative",
  padding: "30px 15px",
  border: "1px solid",
})
const H4 = styled("h4", {
  marginTop: "0px",
  textTransform: "lowercase",
})
const More = styled("div", {
  color: "blue",
})
const Tags = styled("em", {
  position: "absolute",
  right: "15px",
  bottom: "8px",
})

const wrap = {
  active: {
    opacity: 1,
  },
  inActive: {
    opacity: 0,
  },
}

export function Card({ title, duration, description, outlink, slug, tags }) {
  const linkProps = slug
    ? { href: `/projects/${slug}` }
    : { href: outlink, target: "_blank" }

  return (
    <a {...linkProps}>
      <motion.div
        layoutId={title}
        transition={{
          duration: 0.36,
        }}
      >
        <Wrap
          initial={wrap.inActive}
          animate={wrap.active}
          exit={wrap.inActive}
          transition={{
            duration: 0.36,
          }}
        >
          <H4>
            {title}
            {duration && ` (${duration})`}
          </H4>
          <p>{description}</p>
          <More>
            {slug && "More"}
            {outlink && "More (outlink)"}
          </More>
          <Tags>
            {tags.map((tag, id) => (
              <span key={id}>
                {tag}
                {id < tags.length - 1 && ","}{" "}
              </span>
            ))}
          </Tags>
        </Wrap>
      </motion.div>
    </a>
  )
}
