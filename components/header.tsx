import React from "react"
import { useHover } from "../hooks/use-hover"

export function Header() {
  const [hoverRef, isHover]: any = useHover()

  return (
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
  )
}

Header.defaultProps = {}
