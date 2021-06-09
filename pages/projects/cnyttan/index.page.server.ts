import { cardDatas } from "../../../consts"
import { findValueByKey } from "../../../utils"

export { addPageContext }

type PageContext = {
  pageProps: {
    slug: string
    projectsData: any
  }
  documentProps: {
    title: string
    description: string
  }
}

async function addPageContext(pageContext): Promise<PageContext> {
  const { url } = pageContext
  const slug = url.split("/")[2]
  const projectsData = findValueByKey(cardDatas, "slug", slug)

  return {
    pageProps: {
      // We remove data we don't need because we pass `pageContext.movies` to
      // the client; we want to minimize what is sent over the network.
      slug,
      projectsData,
    },
    // The page's <title>
    documentProps: {
      title: projectsData.title,
      description: projectsData.description,
    },
  }
}
