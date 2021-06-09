import React, { useLayoutEffect, useEffect, useRef, useState } from "react"
import { darkModeStyles, getVariables } from "./variables"
import { styled } from "styletron-react"
import { useStore } from "../hooks/use-store"
import shallow from "zustand/shallow"
import { initialThemeState } from "../consts"

const baseControlStyles = {
  border: "1px solid",
  borderRadius: "1000px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const Control1 = styled("div", ({ $active }: any) => {
  return {
    ...baseControlStyles,
    ...getActiveStyles({ $active }),
    fontSize: "24px",
    width: "3rem",
    height: "3rem",
  }
})

const Control2 = styled("div", ({ $active }: any) => {
  return {
    ...baseControlStyles,
    ...getActiveStyles({ $active }),
    fontSize: "16px",
    width: "2rem",
    height: "2rem",
  }
})

const Control3 = styled("div", ({ $active }: any) => {
  return {
    ...baseControlStyles,
    ...getActiveStyles({ $active }),
    width: "1.6rem",
    height: "1.6rem",
  }
})

const Controls = styled("div", {
  border: "1px solid",
  marginLeft: "3rem",
  padding: "1rem",
  display: "flex",
  alignItems: "center",
})

export function Shaper() {
  const { baseTextSize, foregroundColorRgb, backgroundColorHsl, setTheme } =
    useStore(
      (state) => ({
        baseTextSize: state.baseTextSize,
        foregroundColorRgb: state.foregroundColorRgb,
        backgroundColorHsl: state.backgroundColorHsl,
        setTheme: state.setTheme,
      }),
      shallow
    )

  const variables = getVariables({
    baseTextSize,
    foregroundColorRgb,
    backgroundColorHsl,
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
    <Controls>
      <Control1
        $active={baseTextSize === 24}
        onClick={() =>
          setTheme({
            baseTextSize: 24,
          })
        }
      >
        Aa
      </Control1>

      <Control2
        $active={baseTextSize === 16}
        onClick={() =>
          setTheme({
            baseTextSize: 16,
          })
        }
      >
        Aa
      </Control2>
      <Control3
        onClick={() => {
          if (foregroundColorRgb === initialThemeState.foregroundColorRgb)
            setTheme({
              foregroundColorRgb: "255, 255, 255",
              backgroundColorHsl: "0, 0%, 0%",
            })
          else
            setTheme({
              foregroundColorRgb: initialThemeState.foregroundColorRgb,
              backgroundColorHsl: initialThemeState.backgroundColorHsl,
            })
        }}
      />
    </Controls>
  )
}

Shaper.defaultProps = {}

function getActiveStyles({ $active }) {
  if ($active) {
    return {
      cursor: "default",
      color: "blue",
    }
  } else {
    return {
      cursor: "pointer",
      color: "var(--foreground-color)",
    }
  }
}
