import reactRefresh from "@vitejs/plugin-react-refresh"
import ssr from "vite-plugin-ssr/plugin"
import { UserConfig } from "vite"
import babel from "vite-babel-plugin"

const config: UserConfig = {
  // @ts-ignore
  plugins: [reactRefresh(), ssr(), babel()],
}

export default config
