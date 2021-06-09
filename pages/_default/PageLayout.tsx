import { motion } from "framer-motion"
import React from "react"
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
    </React.StrictMode>
  )
}
