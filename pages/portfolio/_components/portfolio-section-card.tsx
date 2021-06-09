import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { breakPoint } from "../../../consts"
import { SectionCardImage } from "./section-card-image"
import styled from "styled-components"

const Grid = styled(motion.div)`
  display: grid;
  gap: 30px;
  direction: ltr;
  align-items: center;
  /* ...getZoomStyles({ $zoomed }), */
  @media (max-width: ${breakPoint}px) {
    grid-template-columns: 1fr;
  }
`
const Description = styled.div`
  padding: 30px 15px;
  text-align: right;

  @media (max-width: ${breakPoint}px) {
    padding: 0px;
  }
`
const Title = styled.h4`
  text-decoration: underline;
  display: inline-block;
  font-weight: 400px;
`

const defaultTransition = {
  duration: 0.36,
}

export function PortfolioSectionCard({
  img,
  title,
  description,
  grayscale = false,
  alignRight = false,
}) {
  const [zoomed, setZoomed] = useState(false)

  return (
    <Grid $zoomed={zoomed}>
      <SectionCardImage
        img={img}
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
