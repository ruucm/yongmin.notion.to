import React from "react"
import { navigate } from "vite-plugin-ssr/client/router"

export { Link }

function Link({ href, children }) {
  const base = import.meta.env.BASE_URL
  if (!href.startsWith("/")) throw new Error("Link href should start with /")
  href = href.slice(1) // We remove the leading '/'
  return (
    <a
      href={base + href}
      onClick={() => navigate(`${base + href}`, { keepScrollPosition: true })}
    >
      {children}
    </a>
  )
}
