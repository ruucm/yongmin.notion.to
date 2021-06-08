import React from "react"
import { useHover } from "../hooks/use-hover"
import { contactMail } from "../consts"
import { useClipboard } from "../hooks/use-clipboard"
import { DesktopOnly } from "../utils/styled-components"
import { styled } from "styletron-react"
import { breakPoint } from "../consts"
import { Shaper } from "./shaper"

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "3fr 1fr",
  alignItems: "flex-start",
  [`@media screen and (max-width: ${breakPoint}px)`]: {
    gridTemplateColumns: "5fr 1fr",
  },
})

export function Layout({ children, home = false }) {
  const [hoverRef, isHover]: any = useHover()
  const { hasCopied, onCopy } = useClipboard(contactMail)

  return (
    <>
      <header>
        <a href="/">
          <h2
            style={{
              // background: home ? "green" : "hsl(120 0% 65% / 1)",
              display: "inline-block",
              padding: 5,
              cursor: "pointer",
              lineHeight: "2rem",
              color: "blue",
              marginTop: "2rem",
              marginBottom: "2.5rem",
            }}
            ref={hoverRef}
          >
            {isHover ? "안녕 하세요," : "Hello,"}
            <br />
            <span
              style={{
                textDecoration: "underline",
              }}
            >
              I'm yongmin ruucm.
            </span>
          </h2>
        </a>
      </header>

      <Grid>
        <main>{children}</main>
        <footer
          style={{
            display: "flex",
            transform: "rotate(90deg) translateX(100%)",
            transformOrigin: "100% 0%",
            // background: "skyblue",
            position: "sticky",
            top: "10vh",
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
        </footer>
      </Grid>
    </>
  )
}
