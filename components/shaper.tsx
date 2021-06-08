import React, { useLayoutEffect, useEffect, useRef, useState } from "react"
import { darkModeStyles, getVariables } from "./variables"
import { styled } from "styletron-react"
import { useStore } from "../hooks/use-store"
import shallow from "zustand/shallow"
import { initialThemeState } from "../consts"

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
  const { baseTextSize, foregroundColorRgb, setTheme } = useStore(
    (state: any) => ({
      baseTextSize: state.baseTextSize,
      foregroundColorRgb: state.foregroundColorRgb,
      setTheme: state.setTheme,
    }),
    shallow
  )

  const variables = getVariables({
    baseTextSize,
    foregroundColorRgb,
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
        onClick={() =>
          setTheme({
            baseTextSize: 24,
          })
        }
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
        onClick={() =>
          setTheme({
            baseTextSize: 16,
          })
        }
      >
        Aa
      </Control>
      <Control
        style={{
          width: "1.6rem",
          height: "1.6rem",
        }}
        onClick={() => {
          if (foregroundColorRgb === initialThemeState.foregroundColorRgb)
            setTheme({
              foregroundColorRgb: "255, 255, 255",
            })
          else
            setTheme({
              foregroundColorRgb: initialThemeState.foregroundColorRgb,
            })
        }}
      />
    </div>
  )
}

Shaper.defaultProps = {}
