import ReactDOMServer from "react-dom/server"
import React from "react"
import { PageLayout } from "./PageLayout"
import { html } from "vite-plugin-ssr"
import { PageContext, ReactComponent } from "./types"
import favicon from "../assets/favicons/favicon-32x32.png"
import { Provider as StyletronProvider } from "styletron-react"
import { Server as Styletron } from "styletron-engine-atomic"
import { defaultMeta } from "../../consts"
import Loading from "../../components/loading"
import { AnimatePresence } from "framer-motion"

export { render }
export { passToClient }

// See https://github.com/brillout/vite-plugin-ssr#data-fetching
const passToClient = ["pageProps", "documentProps"]

async function render(pageContext: PageContext) {
  const { Page, pageProps } = pageContext

  // 1. Create a server engine instance
  const engine = new Styletron()

  const readstream = ReactDOMServer.renderToNodeStream(
    <StyletronProvider value={engine}>
      <PageLayout>
        <Loading />
        <AnimatePresence exitBeforeEnter initial={false}>
          <div>
            <Page {...pageProps} />
          </div>
        </AnimatePresence>
      </PageLayout>
    </StyletronProvider>
  )
  const pageHtml: any = await streamToString(readstream)

  // 3. Extract critical styles after SSR
  const styles = engine.getStylesheetsHtml()

  // See https://github.com/brillout/vite-plugin-ssr#html-head
  const { documentProps } = pageContext
  const title = documentProps?.title || defaultMeta.title
  const desc = documentProps?.description || defaultMeta.description

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${favicon}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        ${html.dangerouslySkipEscape(styles)}
      </head>
      <body>
        <div id="page-view">${html.dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}

function streamToString(stream) {
  const chunks: any = []
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)))
    stream.on("error", (err) => reject(err))
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")))
  })
}
