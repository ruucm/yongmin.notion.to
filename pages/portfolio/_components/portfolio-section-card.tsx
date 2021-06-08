import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { styled } from "styletron-react"
import { breakPoint } from "../../../consts"
import { LazyLoadImage } from "./lazy-load-image"

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
  img,
  title,
  description,
  grayscale = false,
  alignRight = false,
}) {
  const [zoomed, setZoomed] = useState(false)

  return (
    <Grid $zoomed={zoomed}>
      <Image
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

const Wrap = styled("div", ({ $zoomed, $filter }: any) => {
  return {
    position: "relative",
    width: "100%",
    height: "0",
    paddingTop: "66.66%",
    filter: $filter,
    ...getCursurStyles({ $zoomed }),
  }
})

const GifImage = styled(motion.img, {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  width: "100%",
  height: "100%",
  border: "1px solid",
})

const Image = ({ img, grayscale, zoomed, setZoomed }) => {
  let filter = ""
  if (grayscale) filter += "grayscale(1) brightness(0.5)"
  const isGif = img.includes("gif")

  return (
    <Wrap $zoomed={zoomed} $filter={filter}>
      <motion.div
        animate={{ opacity: zoomed ? 1 : 0 }}
        className="shade"
        onClick={() => setZoomed(false)}
      />
      {isGif && (
        <GifImage
          src={img}
          alt=""
          onClick={() => setZoomed(!zoomed)}
          layout
          transition={defaultTransition}
        />
      )}
      {!isGif && (
        <LazyLoadImage
          $as={motion.img}
          imgUrl={`${img}.webp`}
          placeholderUrl={`${img}-sharp.webp`}
          fallbackUrl={`${img}-sharp.webp`}
          onClick={() => setZoomed(!zoomed)}
          layout
          transition={defaultTransition}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            width: "100%",
            height: "100%",
            border: "1px solid",
          }}
        />
      )}
    </Wrap>
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

function getCursurStyles({ $zoomed }) {
  if ($zoomed) {
    return {
      cursor: "zoom-out",
    }
  } else {
    return {
      cursor: "zoom-in",
    }
  }
}
