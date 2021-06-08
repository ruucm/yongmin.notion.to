import { initialThemeState } from "./../consts"
import create, { UseStore } from "zustand"

export interface ThemeProps {
  baseTextSize?: number
  foregroundColorRgb?: string
}

export interface ThemeStoreProps extends ThemeProps {
  setTheme: (newState: ThemeProps) => void
}

export const useStore: UseStore<ThemeStoreProps> = create((set) => ({
  baseTextSize: initialThemeState.baseTextSize,
  foregroundColorRgb: initialThemeState.foregroundColorRgb,
  setTheme: (newState) => set((state) => ({ ...state, ...newState })),
}))
