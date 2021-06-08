import ReactDOM from "react-dom"
import React from "react"
import "./debug.js"
import { useClientRouter } from "vite-plugin-ssr/client/router"
import { PageContext } from "./types"
import { defaultMeta } from "../../consts"
import { Client as Styletron } from "styletron-engine-atomic"
import { PageLayout } from "./PageLayout"
import { Provider as StyletronProvider, DebugEngine } from "styletron-react"
import { LoadingClass } from "./loading-class"

async function hydrate(page) {
  import("./imports.js").then(async (m) => {
    ReactDOM.hydrate(page, document.getElementById("page-view"))
  })
}

const { hydrationPromise } = useClientRouter({
  async render(pageContext: PageContext) {
    const { Page, pageProps } = pageContext

    // Hydrating Server-rendered Styles
    const hydratedStyles: any = document.getElementsByClassName(
      "_styletron_hydrate_"
    )
    const engine = new Styletron({
      hydrate: hydratedStyles,
    })

    const page = (
      <StyletronProvider value={engine}>
        <PageLayout>
          <LoadingClass
            ref={(LoadingClass) => {
              window.LoadingClass = LoadingClass
            }}
          />
          <Page {...pageProps} />
        </PageLayout>
      </StyletronProvider>
    )
    const container = document.getElementById("page-view")
    // Render the page
    if (pageContext.isHydration) {
      // This is the first page rendering; the page has been rendered to HTML
      // and we now make it interactive.
      hydrate(page)
    } else {
      // Render a new page
      ReactDOM.render(page, container)
    }

    // We use `pageContext.documentProps.title` to update `<title>`.
    // (Make sure to add it to `export const passToClient = ['pageProps, 'documentProps']`,
    // and your pages can then return `documentProps` in their `addPageContext()` hook.)
    document.title = pageContext.documentProps?.title || defaultMeta.title
  },
  onTransitionStart,
  onTransitionEnd,
})

// hydrationPromise.then(() => {
//   console.log("Hydration finished; page is now interactive.")
// })

function onTransitionStart() {
  // console.log("Page transition start")
  window.LoadingClass.setState({
    isRouteChanging: true,
    loadingKey: window.LoadingClass.state.loadingKey + 1,
  })
}
function onTransitionEnd() {
  // console.log("Page transition end")
  window.LoadingClass.setState({ isRouteChanging: false })
}
