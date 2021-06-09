import React from "react"
import { contactMail } from "../consts"
import { useClipboard } from "../hooks/use-clipboard"
import { DesktopOnly } from "../utils/styled-components"
import { breakPoint } from "../consts"
import { Shaper } from "./shaper"
import { Header } from "./header"
import { motion } from "framer-motion"
import styled from "styled-components"

const Wrap = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: flex-start;
  @media (max-width: ${breakPoint}px) {
    gridtemplatecolumns: "5fr 1fr";
  }
`
const Footer = styled.footer`
  transform: rotate(90deg) translateX(100%);
  transform-origin: 100% 0%;
  position: sticky;
  top: 10vh;
`
const Nav = styled.div`
  position: absolute;
  display: flex;
`
const Email = styled.span`
  color: blue;
  cursor: pointer;
  display: inline-block;
  margin-left: 4px;
`
const Twitter = styled.a`
  margin-left: 4px;
`

export function Layout({ children, home = false }) {
  const { hasCopied, onCopy } = useClipboard(contactMail)

  return (
    <Wrap>
      <Header />
      <Grid>
        <motion.main
          initial={{
            opacity: 0,
            y: "5vh",
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              ease: "linear",
            },
          }}
          exit={{
            opacity: 0,
            y: "10vh",
            transition: {
              duration: 0.3,
              ease: "linear",
            },
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
