import React from "react"

export function Shaper() {
  return (
    <div
      style={{
        // width: 200,
        // height: 200,
        border: "1px solid",
        marginLeft: "1rem",
        padding: "1rem",
      }}
    >
      {/* <h4>Typography</h4> */}
      <p>Text increment</p>
      <input
        type="range"
        id="cowbell"
        name="cowbell"
        min="0"
        max="100"
        // value="90"
        step="30"
      />

      <p>Base size</p>
      <input
        type="range"
        id="cowbell"
        name="cowbell"
        min="0"
        max="100"
        // value="90"
        step="30"
      />
    </div>
  )
}

Shaper.defaultProps = {}
