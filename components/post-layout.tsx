import React from "react"
import { isBrowser } from "../utils"
import { Layout } from "./layout"

export function PostLayout({ children }) {
  return (
    <Layout>
      {children}
      <button
        style={{
          display: "block",
          marginTop: "2rem",
          marginBottom: "2.5rem",
          marginLeft: "auto",
        }}
        onClick={() => {
          isBrowser && history.back()
        }}
      >
        Back
      </button>
    </Layout>
  )
}
