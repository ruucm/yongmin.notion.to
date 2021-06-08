import React, { useLayoutEffect, useEffect, useRef, useState } from "react"
import { darkModeStyles, getVariables } from "./variables"
import { styled } from "styletron-react"

const initialState = {
  fontFamily: "system-ui, sans-serif",
  textSizeIncrement: "1.47",
  baseTextSize: 16,
  textFrameRatio: "2.37",
  textFrameY: "0.8",
  spaceIncrement: "1.65",
  unit: "0.5",
  accentHue: "254",
  accentSaturation: "31",
  accentLightness: "50",
  greySaturation: "5",
  radius: "0.4",
  fieldBorderWidth: "2",
  buttonRound: false,
}

const Control = styled("div", ({ $active }: any) => {
  return {
    border: "1px solid",
    borderRadius: "1000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    color: $active ? "blue" : "initial",
  }
})

const styles = {
  controlWrap: {
    border: "1px solid",
    marginLeft: "3rem",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
  },
}

export function Shaper() {
  const [baseTextSize, setBaseTextSize] = useState(initialState.baseTextSize)

  const variables = getVariables({
    baseTextSize,
    // textSizeIncrement,
    // fontFamily,
    // unit,
    // spaceIncrement,
    // textFrameRatio,
    // textFrameY,
    // accentHue,
    // accentSaturation,
    // accentLightness,
    // greySaturation,
    // radius,
    // fieldBorderWidth,
  })

  const styleRef: any = useRef()

  useEffect(() => {
    // Only create style element once
    if (!styleRef.current) {
      const style = document.createElement("style")
      document.head.appendChild(style)
      styleRef.current = style
    }

    styleRef.current.innerHTML = `
      :root{
        ${Object.values(variables).join("")}
      }
      ${darkModeStyles}
    `
  }, [variables])
  return (
    <div style={styles.controlWrap}>
      <Control
        style={{
          fontSize: 24,
          width: "3rem",
          height: "3rem",
        }}
        $active={baseTextSize === 24}
        onClick={() => setBaseTextSize(24)}
      >
        Aa
      </Control>

      <Control
        style={{
          fontSize: 16,
          width: "2rem",
          height: "2rem",
        }}
        $active={baseTextSize === 16}
        onClick={() => setBaseTextSize(16)}
      >
        Aa
      </Control>
      <Control
        style={{
          width: "1.6rem",
          height: "1.6rem",
        }}
      />
    </div>
  )
}

Shaper.defaultProps = {}
