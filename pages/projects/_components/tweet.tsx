import * as React from "react"
import { useTwitterWidget } from "../../../hooks/use-twitter-widget"

export const Tweet = ({
  tweetId,
  options,
  onLoad,
  renderError,
  ...rest
}: any) => {
  const { ref, error } = useTwitterWidget(
    "createTweet",
    tweetId,
    options,
    onLoad
  )
  return (
    <div ref={ref} {...rest}>
      {error && renderError && renderError(error)}
    </div>
  )
}
