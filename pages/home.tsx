import React from "react"
import { useState } from "react"
import { Card, Layout } from "../components"
import { cardDatas } from "../consts"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { removeA } from "../utils/removeA"
import { styled } from "styletron-react"

export function Page() {
  return (
    <Layout home>
      <h3>Design Engineer</h3>
      <p>A journey of programming to solving creative people's problems.</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <a
          style={{
            width: 300,
            height: 300,
            border: "1px solid",
            borderRadius: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          href="/projects"
        >
          Design Teams
        </a>
        <div
          style={{
            width: 300,
            height: 300,
            border: "1px solid",
            borderRadius: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Techy Designers
        </div>
        <div
          style={{
            width: 300,
            height: 300,
            border: "1px solid",
            borderRadius: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Prototypers
        </div>
        <div
          style={{
            width: 300,
            height: 300,
            border: "1px solid",
            borderRadius: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Writers
        </div>
      </div>
    </Layout>
  )
}
