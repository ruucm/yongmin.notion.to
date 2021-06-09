import React from "react"
import { Layout } from "./layout"

export function PostLayout({ children }) {
  return (
    <Layout>
      {children}
      <a
        href="/projects"
        style={{
          display: "block",
          textAlign: "right",
          fontSize: "1.5rem",
        }}
      >
        ← Back
      </a>
    </Layout>
  )
}
