import ReactDOM from "react-dom"
import React from "react"
import { getPage } from "vite-plugin-ssr/client"
import { PageLayout } from "./PageLayout"
import "./imports.js"
import "./main.js"
import { Provider as StyletronProvider, DebugEngine } from "styletron-react"
import { Client as Styletron } from "styletron-engine-atomic"

hydrate()

async function hydrate() {
  const pageContext = await getPage()
  const { Page, pageProps } = pageContext

  // 1. Create a client engine instance
  const engine = new Styletron()

  ReactDOM.hydrate(
    <StyletronProvider value={engine}>
      <PageLayout>
        <Page {...pageProps} />
      </PageLayout>
    </StyletronProvider>,
    document.getElementById("page-view")
  )
}
