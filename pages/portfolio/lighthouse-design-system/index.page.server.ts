export { addPageContext }
// export { prerender }

type PageContext = {
  pageProps: {
    movies: any[]
  }
  documentProps: {
    title: string
  }
}

async function addPageContext(): Promise<PageContext> {
  // const movies = await getStarWarsMovies();
  return {
    pageProps: {
      // We remove data we don't need because we pass `pageContext.movies` to
      // the client; we want to minimize what is sent over the network.
      movies: ["movie 1", "movie 2"],
    },
    // The page's <title>
    documentProps: { title: "Movie Title 2832" },
  }
}
