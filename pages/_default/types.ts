export type ReactComponent = (pageProps: PageProps) => JSX.Element
export type PageProps = {
  slug?: string
}
export type PageContext = {
  Page: ReactComponent
  pageProps: PageProps
  documentProps?: {
    title?: string
    description?: string
  }
  isHydration: boolean
}
