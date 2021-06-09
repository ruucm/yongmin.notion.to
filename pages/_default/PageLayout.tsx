import { motion } from "framer-motion"
import React from "react"
import "./PageLayout.css"
import { styled } from "styletron-react"
import fish from "../assets/fish-illustration-1-rotated.png"
import BasicPlane from "../../components/BasicPlane"
import SimplePlane from "../../components/SimplePlane"

const Wrap = styled(motion.div, {
  transformOrigin: "50% 0%",
  // background: `center / contain no-repeaturl(${fish})`,
})
export { PageLayout }

type Children = React.ReactNode

function PageLayout({ children }: { children: Children }) {
  return (
    <React.StrictMode>
      <SimplePlane />
      {/* <BasicPlane /> */}
      <Wrap
        initial={{ scale: 0.5 }}
        animate={{
          scale: 0.99999, // prevent transform: none; (fix safari position error)
          transition: {
            duration: 1,
            delay: 1,
          },
        }}
      >
        {/* <img
          src="/pages/assets/fish-illustration-1-rotated.png"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            // mixBlendMode: "multiply",
            // opacity: 0.5,
          }}
        /> */}
        {children}
      </Wrap>
    </React.StrictMode>
  )
}
