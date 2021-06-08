// import tinycolor from "tinycolor2"

export const getVariables = ({
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
}) => {
  // const getAccentButtonColor = () => {
  //   const accentButtonBgLuminance = tinycolor(
  //     `hsl(${accentHue} ${accentSaturation} ${accentLightness})`
  //   ).getLuminance()
  //   const lightness = accentButtonBgLuminance < 0.3 ? 95 : 15

  //   return `hsl(var(--accentH), var(--accentS), ${lightness}%)`
  // }

  return {
    type: `
      --baseTextSize: ${baseTextSize}px;
      --foreground-color-rgb: ${foregroundColorRgb};
    `,
  }
}

export const darkModeStyles = `body.darkMode {
  --c-border: hsla(var(--greyH), var(--greyS), var(--grey1L), 0.1);
  --c-overlay: hsla(var(--greyH), var(--greyS), var(--grey1L), 0.07);
  --c-background: var(--c-grey8);
  --c-body: var(--c-grey1);
  --c-bodyDimmed: hsla(var(--greyH), var(--greyS), var(--grey1L), 0.5);
  --c-fieldBorder: var(--c-grey6);
  --c-buttonBg: var(--c-grey6);
}`
