import React from "react"
import { contactMail } from "../consts"
import { useClipboard } from "../hooks/use-clipboard"
import { DesktopOnly } from "../utils/styled-components"
import { styled } from "styletron-react"
import { breakPoint } from "../consts"
import { Shaper } from "./shaper"
import { Header } from "./header"

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

export function Layout({ children, home = false }) {
  const { hasCopied, onCopy } = useClipboard(contactMail)

  return (
    <Wrap>
      <Header />
      <Grid>
        <main>{children}</main>
        <footer
          style={{
            transform: "rotate(90deg) translateX(100%)",
            transformOrigin: "100% 0%",
            position: "sticky",
            top: "10vh",
          }}
        >
          <div
            style={{
              // background: "pink",
              position: "absolute",
              display: "flex",
            }}
          >
            <div>
              <DesktopOnly>
                <a
                  onClick={onCopy}
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    display: "inline-block",
                    marginLeft: "4px",
                  }}
                >
                  {hasCopied ? "copied" : contactMail}
                </a>
                <br />
              </DesktopOnly>
              <a
                href="http://twitter.com/ruucm"
                target="_blank"
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                  marginLeft: "4px",
                }}
                rel="noopener noreferrer"
              >
                @ruucm
              </a>
              <br />
              <a
                href="/about"
                style={{
                  textDecoration: "none",
                }}
              >
                /about
              </a>
            </div>
            <DesktopOnly>
              <Shaper />
            </DesktopOnly>
          </div>
        </footer>
      </Grid>
    </Wrap>
  )
}
