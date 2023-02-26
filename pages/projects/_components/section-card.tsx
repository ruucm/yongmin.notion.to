import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { styled } from "styletron-react"
import { breakPoint } from "../../../consts"
import { SectionCardMedia } from "./section-card-media"

const Grid = styled(motion.div, ({ $zoomed }: any) => {
  return {
    display: "grid",
    gap: "30px",
    direction: "ltr",
    alignItems: "center",
    ...getZoomStyles({ $zoomed }),
    [`@media screen and (max-width: ${breakPoint}px)`]: {
      gridTemplateColumns: "1fr",
    },
  }
})
export const Description = styled("div", {
  padding: "30px 0px",
  textAlign: "right",
  [`@media screen and (max-width: ${breakPoint}px)`]: {
    padding: "0px",
  },
})
export const Title = styled(motion.h4, {
  textDecoration: "underline",
  display: "inline-block",
  fontWeight: 400,
})

const defaultTransition = {
  duration: 0.36,
}

export function SectionCard({
  imageName = "",
  videoInfo = { path: "", posterName: "", ratio: 1 / 1, title: "" },
  title,
  description = "",
  grayscale = false,
  alignRight = false,
  isZoomed = false,
}: any) {
  const [zoomed, setZoomed] = useState(isZoomed)

  return (
    <Grid $zoomed={zoomed}>
      <SectionCardMedia
        imageName={imageName}
        videoInfo={videoInfo}
        grayscale={grayscale}
        zoomed={zoomed}
        setZoomed={setZoomed}
      />
      <Description>
        {title && (
          <>
            <Title layout transition={defaultTransition}>
              {title}
            </Title>
            <br />
          </>
        )}
        <motion.p layout transition={defaultTransition} style={{ whiteSpace: "pre-wrap" }}>
          {description}
        </motion.p>
      </Description>
    </Grid>
  )
}

function getZoomStyles({ $zoomed }) {
  if ($zoomed) {
    return {
      gridTemplateColumns: "1fr",
    }
  } else {
    return {
      gridTemplateColumns: "1fr 1fr",
    }
  }
}
