import React from "react"

export function SubTitle({ children }) {
  return (
    <h4
      style={{
        textAlign: "right",
        fontWeight: 400,
        color: "blue",
        marginTop: 64,
      }}
    >
      {children}
    </h4>
  )
}

SubTitle.defaultProps = {}
