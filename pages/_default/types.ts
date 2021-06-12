export type ReactComponent = (pageProps: PageProps) => JSX.Element
export type PageProps = {
  slug?: string
  urlParsed?: string
}
export type PageContext = {
  Page: ReactComponent
  pageProps: PageProps
  urlParsed?: string
  documentProps?: {
    title?: string
    description?: string
  }
  isHydration: boolean
}
