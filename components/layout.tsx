import React from "react"
import { contactMail } from "../consts"
import { useClipboard } from "../hooks/use-clipboard"
import { DesktopOnly } from "../utils/styled-components"
import { styled } from "styletron-react"
import { breakPoint } from "../consts"
import { Shaper } from "./shaper"
import { Header } from "./header"
import { motion } from "framer-motion"

const Wrap = styled("div", {
  maxWidth: "1080px",
  margin: "0 auto",
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
const Email = styled("span", {
  color: "blue",
  cursor: "pointer",
  display: "inline-block",
  marginLeft: "4px",
})
const Twitter = styled("a", {
  marginLeft: "4px",
})

export function Layout({ children, home = false }) {
  const { hasCopied, onCopy } = useClipboard(contactMail)

  return (
    <Wrap>
      <Header />
      <Grid>
        <motion.main
          initial={{
            // opacity: 0,
            // scale: 1.1,
            rotate: "90deg",
          }}
          animate={{
            // opacity: 1,
            // scale: 1,
            rotate: "0deg",
            transition: {
              duration: 0.72,
              ease: "linear",
              delay: 0.36,
            },
          }}
          exit={{
            // opacity: 0,
            // scale: 0.9,
            rotate: "90deg",
            transition: {
              duration: 0.36,
              ease: "linear",
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
                <Email onClick={onCopy}>
                  {hasCopied ? "copied" : contactMail}
                </Email>
                <br />
              </DesktopOnly>
              <Twitter
                href="http://twitter.com/ruucm"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ruucm
              </Twitter>
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
