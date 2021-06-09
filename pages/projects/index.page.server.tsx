export { addPageContext }

type PageContext = {
  pageProps: {}
  documentProps: {
    title: string
    description: string
  }
}

async function addPageContext(pageContext): Promise<PageContext> {
  return {
    pageProps: {},
    documentProps: {
      title: "Projects",
      description:
        "I'm making projects and experiments for productivity and joy in screens.",
    },
  }
}
