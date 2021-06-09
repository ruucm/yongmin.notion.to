export { addPageContext }

type PageContext = {
  pageProps: {
    search: { tags?: string }
  }
  documentProps: {
    title: string
    description: string
  }
}

async function addPageContext(pageContext): Promise<PageContext> {
  const { urlParsed } = pageContext

  return {
    pageProps: {
      search: urlParsed.search,
    },
    documentProps: {
      title: "Projects",
      description:
        "I'm making projects and experiments for productivity and joy in screens.",
    },
  }
}
