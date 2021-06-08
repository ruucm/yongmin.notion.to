import { motion } from "framer-motion"
import React from "react"
// import logo from "./logo.svg"
import "./PageLayout.css"
import { styled } from "styletron-react"

const Wrap = styled(motion.div, {
  transformOrigin: "50% 0%",
})
export { PageLayout }

type Children = React.ReactNode

function PageLayout({ children }: { children: Children }) {
  return (
    <React.StrictMode>
      <Wrap
        initial={{ scale: 0.5 }}
        animate={{
          scale: 1,
          transition: {
            duration: 1,
            delay: 1,
          },
        }}
      >
        {children}
      </Wrap>
      {/* <Layout>
        <Sidebar>
          <Logo />
          <a className="navitem" href="/">Home</a>
          <a className="navitem" href="/about">About</a>
        </Sidebar>
        <Content>{children}</Content>
      </Layout> */}
    </React.StrictMode>
  )
}
