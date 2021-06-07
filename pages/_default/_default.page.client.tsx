import ReactDOM from "react-dom"
import React from "react"
import { getPage } from "vite-plugin-ssr/client"
import { PageLayout } from "./PageLayout"

hydrate()

async function hydrate() {
  import("./imports.js").then(async (m) => {
    const pageContext = await getPage()
    const { Page, pageProps } = pageContext

    ReactDOM.hydrate(
      <PageLayout>
        <Page {...pageProps} />
      </PageLayout>,
      document.getElementById("page-view")
    )
  })
}
