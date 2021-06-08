import React from "react"
import { motion } from "framer-motion"
import { styled } from "styletron-react"

const Wrap = styled(motion.div, {
  position: "relative",
  padding: "30px 15px",
  border: "1px solid",
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
    ? { href: `/portfolio/${slug}` }
    : { href: outlink, target: "_blank" }

  return (
    <a
      {...linkProps}
      style={{
        textDecoration: "none",
      }}
    >
      <motion.div
        layoutId={title}
        transition={{
          duration: 0.36,
        }}
        style={
          {
            // background: "hsla(0, 0%, 100%, 0.4)",
          }
        }
      >
        <Wrap
          initial={wrap.inActive}
          animate={wrap.active}
          exit={wrap.inActive}
          transition={{
            duration: 0.36,
          }}
        >
          <h4
            style={{
              marginTop: 0,
              textTransform: "lowercase",
            }}
          >
            {title}
            {duration && ` (${duration})`}
          </h4>
          <p>{description}</p>
          <div
            style={{
              color: "blue",
            }}
          >
            {/* <Button text="More" /> */}
            {slug && "More"}
            {outlink && "More (outlink)"}
          </div>
          <em
            style={{
              position: "absolute",
              right: 15,
              bottom: 8,
            }}
          >
            {tags.map((tag, id) => (
              <span key={id}>
                {tag}
                {id < tags.length - 1 && ","}{" "}
              </span>
            ))}
          </em>
        </Wrap>
      </motion.div>
    </a>
  )
}
