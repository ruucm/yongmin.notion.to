import React from "react"
import { SectionCard } from "../_components/section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { SubTitle } from "../_components/sub-title"
import { PostLayout } from "../../../components/post-layout"
import { useTwitterWidget } from "../../../hooks/use-twitter-widget"

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <Tweet tweetId="1351806402990272514" />
      <AnimateSharedLayout>
        <SubTitle>framer-packages</SubTitle>
      </AnimateSharedLayout>
    </PostLayout>
  )
}

export const Tweet = ({ tweetId, options, onLoad, renderError }: any) => {
  const { ref, error } = useTwitterWidget(
    "createTweet",
    tweetId,
    options,
    onLoad
  )
  return <div ref={ref}>{error && renderError && renderError(error)}</div>
}
