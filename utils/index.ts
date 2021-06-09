export function findValueByKey(arr, key, match) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (element[key] === match) return element
  }
}

export const isBrowser = typeof window !== "undefined"

export function getUrlParams() {
  if (isBrowser) {
    const urlSearchParams: any = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())
    return params
  }
}

export function titleCase(string) {
  var sentence = string.toLowerCase().split(" ")
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
  }

  return sentence.join(" ")
}
