import React from "react"
import { useHover } from "../hooks/use-hover"
import { contactMail } from "../consts"
import { useClipboard } from "../hooks/use-clipboard"
import { DesktopOnly } from "../utils/styled-components"

export function Layout({ children, home = false }) {
  const [hoverRef, isHover] = useHover()
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          alignItems: "flex-start",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            display: "flex",
            transform: "rotate(90deg) translateX(100%)",
            transformOrigin: "100% 0%",
            background: "skyblue",
            position: "sticky",
            top: "10vh",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
            }}
          >
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
          <div
            style={{
              width: 200,
              height: 200,
              border: "1px solid",
            }}
          >
            <h4>Typography</h4>
            <p>Text increment</p>
            <input
              type="range"
              id="cowbell"
              name="cowbell"
              min="0"
              max="100"
              // value="90"
              step="30"
            />
          </div>
        </footer>
      </div>
    </>
  )
}
