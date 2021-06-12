import React from "react"
import { DesktopOnly } from "../utils/styled-components"
import { styled } from "styletron-react"
import { breakPoint } from "../consts"
import { Shaper } from "./shaper"
import { Header } from "./header"
import { motion } from "framer-motion"

const Wrap = styled("div", {
  maxWidth: "1080px",
  margin: "0 auto",
  paddingBottom: "2rem",
})
const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "3fr 1fr",
  alignItems: "flex-start",
  [`@media screen and (max-width: ${breakPoint}px)`]: {
    gridTemplateColumns: "5fr 1fr",
  },
})
const Footer = styled("footer", {
  transform: "rotate(90deg) translateX(100%)",
  transformOrigin: "100% 0%",
  position: "sticky",
  top: "10vh",
})
const Nav = styled("div", {
  // background: "pink",
  position: "absolute",
  display: "flex",
})

export function Layout({ children, home = false }) {
  return (
    <Wrap>
      <Header />
      <Grid>
        <motion.main
          initial={{
            opacity: 0,
            // scale: 1.1,
            // rotate: "90deg",
            y: "-5vh",
          }}
          animate={{
            opacity: 1,
            // scale: 1,
            // rotate: "0deg",
            y: "0vh",
            transition: {
              duration: 0.36,
              // ease: "linear",
              // delay: 0.36,
            },
          }}
          exit={{
            opacity: 0,
            // scale: 0.9,
            // rotate: "90deg",
            y: "5vh",
            transition: {
              duration: 0.28,
              // ease: "linear",
            },
          }}
          style={{
            transformOrigin: "0% 0%",
          }}
        >
          {children}
        </motion.main>
        <Footer>
          <Nav>
            <div>
              <DesktopOnly>
                <a href="/">/home</a>
                <br />
              </DesktopOnly>
              <a href="/projects">/projects</a>
              <br />
              <a href="/about">/about</a>
            </div>
            <DesktopOnly>
              <Shaper />
            </DesktopOnly>
          </Nav>
        </Footer>
      </Grid>
    </Wrap>
  )
}
