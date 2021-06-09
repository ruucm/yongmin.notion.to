import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { styled } from "styletron-react"
import { breakPoint } from "../../../consts"
import { SectionCardImage } from "./section-card-image"

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
const Description = styled("div", {
  padding: "30px 15px",
  textAlign: "right",
  [`@media screen and (max-width: ${breakPoint}px)`]: {
    padding: "0px",
  },
})
const Title = styled(motion.h4, {
  textDecoration: "underline",
  display: "inline-block",
  fontWeight: 400,
})

const defaultTransition = {
  duration: 0.36,
}

export function PortfolioSectionCard({
  imageName,
  title,
  description,
  grayscale = false,
  alignRight = false,
}) {
  const [zoomed, setZoomed] = useState(false)

  return (
    <Grid $zoomed={zoomed}>
      <SectionCardImage
        imageName={imageName}
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
        <motion.p layout transition={defaultTransition}>
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
