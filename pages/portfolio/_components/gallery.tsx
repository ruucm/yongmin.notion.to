import React from "react"
import { useMobile } from "../../../hooks/use-mobile"

function gridWrap({ isMobile }) {
  let styles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    marginTop: 30,
    gap: 30,
    marginBottom: 30,
  }
  if (isMobile)
    styles = {
      ...styles,
      gridTemplateColumns: "1fr",
    }

  return styles
}

export function Gallery({ images }) {
  const isMobile = useMobile()

  return (
    <div style={gridWrap({ isMobile })}>
      {images.map((image, id) => (
        <img
          key={id}
          src={image}
          style={{
            width: "100%",
            display: "block",
            border: "1px solid black",
          }}
        />
      ))}
    </div>
  )
}
