import React from "react"
import { useEffect, useState } from "react"

export function EmptyComp() {
  return <></>
}

export function useESMComponent(modulePath, isDefault = true) {
  const [Module, setModule] = useState(() => EmptyComp)

  useEffect(() => {
    async function update() {
      const module = await import(/* @vite-ignore */ modulePath)
      if (isDefault) setModule(module.default)
      else setModule(module)
    }
    update()
  }, [])

  return Module
}
