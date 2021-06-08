import React from "react"
import { useNProgress } from "@tanem/react-nprogress"

const Loading: React.FC<{ isRouteChanging?: boolean }> = ({
  isRouteChanging,
}) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging,
  })

  return (
    <>
      <style>{`
        .container {
          opacity: ${isFinished ? 0 : 1};
          pointerevents: none;
          transition: opacity 0ms linear;
        }

        .bar {
          background: #00AAAA;
          height: 8px;
          left: 0;
          margin-left: ${(-1 + progress) * 100}%;
          position: fixed;
          top: 0;
          transition: margin-left ${animationDuration}ms linear;
          width: 100%;
          z-index: 1031;
        }
      `}</style>
      <div className="container">
        <div className="bar" />
      </div>
    </>
  )
}

export default Loading
