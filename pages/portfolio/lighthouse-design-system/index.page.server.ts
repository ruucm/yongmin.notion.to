import { cardDatas } from "../../../consts"
import { findValueByKey } from "../../../utils"

export { addPageContext }
// export { prerender }

type PageContext = {
  pageProps: {
    slug: string
    portfolioData: any
    movies: any[]
  }
  documentProps: {
    title: string
    description: string
  }
}
async function addPageContext(pageContext): Promise<PageContext> {
  const { url } = pageContext
  const slug = url.split("/")[2]
  const portfolioData = findValueByKey(cardDatas, "slug", slug)

  // const movies = await getStarWarsMovies();
  return {
    pageProps: {
      // We remove data we don't need because we pass `pageContext.movies` to
      // the client; we want to minimize what is sent over the network.
      movies: ["movie 1", "movie 2"],
      slug,
      portfolioData,
    },
    // The page's <title>
    documentProps: {
      title: portfolioData.title,
      description: portfolioData.description,
    },
  }
}

// async function prerender() {
//   // const movies = await getStarWarsMovies();

//   return [
//     {
//       url: "/",
//       // We already provide `pageContext` here so that `vite-plugin-ssr`
//       // will *not* have to call the `addPageContext()` hook defined
//       // above in this file.
//       pageContext: {
//         pageProps: {
//           movies: ["movie 3", "movie 4"],
//         },
//         documentProps: { title: "Movie Title 5" },
//       },
//     },
//     // ...movies.map((movie) => {
//     //   const url = `/star-wars/${movie.id}`;
//     //   return {
//     //     url,
//     //     // Note that we can also provide the `pageContext` of other pages.
//     //     // This means that `vite-plugin-ssr` will not call any
//     //     // `addPageContext()` hook and the Star Wars API will be called
//     //     // only once (in this `prerender()` hook).
//     //     pageContext: {
//     //       pageProps: {
//     //         movie: filterMovieData(movie),
//     //       },
//     //       documentProps: { title: movie.title },
//     //     },
//     //   };
//     // }),
//   ]
// }

// function getTitle(movies: Movie[] | MovieDetails[]): string {
//   const title = `${movies.length} Star Wars Movies`;
//   return title;
// }
