export { addPageContext }

type PageContext = {
  pageProps: {
    // slug: string
    // portfolioData: any
  }
  documentProps: {
    title: string
    // description: string
  }
}

async function addPageContext(pageContext): Promise<PageContext> {
  // const { url } = pageContext
  // const slug = url.split("/")[2]
  // const portfolioData = findValueByKey(cardDatas, "slug", slug)

  return {
    pageProps: {
      // We remove data we don't need because we pass `pageContext.movies` to
      // the client; we want to minimize what is sent over the network.
      // slug,
      // portfolioData,
    },
    // The page's <title>
    documentProps: {
      title: "About",
      // description: portfolioData.description,
    },
  }
}
