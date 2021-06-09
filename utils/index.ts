export function findValueByKey(arr, key, match) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (element[key] === match) return element
  }
}

export const isBrowser = typeof window !== "undefined"
