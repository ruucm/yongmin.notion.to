import ReactDOMServer from "react-dom/server"
import React from "react"
import { PageLayout } from "./PageLayout"
import { html } from "vite-plugin-ssr"
import { PageContext, ReactComponent } from "./types"
import favicon from "../assets/favicons/favicon-32x32.png"

export { render }
export { passToClient }

// See https://github.com/brillout/vite-plugin-ssr#data-fetching
const passToClient = ["pageProps"]

function render(pageContext: PageContext) {
  const { Page, pageProps } = pageContext
  const pageHtml = ReactDOMServer.renderToString(
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>
  )

  // See https://github.com/brillout/vite-plugin-ssr#html-head
  const { documentProps } = pageContext
  const title = documentProps?.title || "yongmin ruucm"
  const desc =
    documentProps?.description ||
    "yongmin ruucm is an experienced front-end developer who loves to deliver useful and joyful software."

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${favicon}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${html.dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}
