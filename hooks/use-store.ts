import { initialThemeState } from "./../consts"
import create from "zustand"

export const useStore = create((set) => ({
  baseTextSize: initialThemeState.baseTextSize,
  foregroundColorRgb: initialThemeState.foregroundColorRgb,
  setTheme: (newState) => set((state) => ({ ...state, ...newState })),
}))
