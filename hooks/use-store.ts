import { initialThemeState } from "./../consts"
import create, { UseStore } from "zustand"

export interface ThemeProps {
  baseTextSize?: number
  foregroundColorRgb?: string
  backgroundColorHsl?: string
}

export interface ThemeStoreProps extends ThemeProps {
  setTheme: (newState: ThemeProps) => void
}

export const useStore: UseStore<ThemeStoreProps> = create((set) => ({
  baseTextSize: initialThemeState.baseTextSize,
  foregroundColorRgb: initialThemeState.foregroundColorRgb,
  backgroundColorHsl: initialThemeState.backgroundColorHsl,
  setTheme: (newState) => set((state) => ({ ...state, ...newState })),
}))
