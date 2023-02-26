import ReactDOMServer from "react-dom/server"
import React from "react"
import { PageLayout } from "./PageLayout"
import { html } from "vite-plugin-ssr"
import { PageContext, ReactComponent } from "./types"
import favicon from "../assets/favicons/favicon-32x32.png"
import { Provider as StyletronProvider } from "styletron-react"
import { Server as Styletron } from "styletron-engine-monolithic"
import { defaultMeta } from "../../consts"
import Loading from "../../components/loading"
import { AnimatePresence } from "framer-motion"

export { render }
export { passToClient }

// See https://github.com/brillout/vite-plugin-ssr#data-fetching
const passToClient = ["pageProps", "documentProps", "urlParsed"]

// @ts-ignore
const GA_ID = import.meta.env.VITE_GA_ID

async function render(pageContext: PageContext) {
  const { Page, pageProps, urlParsed } = pageContext

  // 1. Create a server engine instance
  const engine = new Styletron()

  const readstream = ReactDOMServer.renderToNodeStream(
    <StyletronProvider value={engine}>
      <Loading />
      <PageLayout>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Page {...pageProps} urlParsed={urlParsed} />
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
        <meta property="og:url" content="https://www.ruucm.work" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:image" content="https://www.ruucm.work/images/brand/og.png" />
        <meta property="og:image:alt" content="${title}" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IE" />
        <link rel="canonical" href="https://www.ruucm.work" />
        ${html.dangerouslySkipEscape(styles)}

        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
        <script>
          window.dataLayer = window.dataLayer || []
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag("js", new Date())
          gtag("config", "${GA_ID}")
        </script>
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
