import React from "react"
import { Layout } from "../components"

export { Page }

function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return (
      <Layout>
        <h1>404 Page Not Found</h1>
        This page could not be found.
      </Layout>
    )
  } else {
    return (
      <Layout>
        <h1>500 Internal Server Error</h1>
        Something went wrong.
      </Layout>
    )
  }
}
