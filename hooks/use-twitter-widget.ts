import { useState, useRef, useEffect } from "react"
import loadjs from "loadjs"

const twScriptUrl = "https://platform.twitter.com/widgets.js"
const twScriptWindowFieldName = "twttr"
const twScriptName = twScriptWindowFieldName

const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
)

function twLoad() {
  loadjs(twScriptUrl, twScriptName)
}

function twWidgetFactory() {
  return new Promise((resolve, reject) => {
    const rejectWithError = () =>
      reject(new Error("Could not load remote twitter widgets js"))
    loadjs.ready(twScriptName, {
      success: () => {
        // Ensure loaded
        const twttr = window[twScriptWindowFieldName]
        if (!twttr || !twttr.widgets) {
          rejectWithError()
        }
        resolve(twttr.widgets)
      },
      error: rejectWithError,
    })
  })
}

function removeChildrenWithAttribute(node, attribute) {
  if (node) {
    node.querySelectorAll("*").forEach((child) => {
      if (child.hasAttribute(attribute)) {
        child.remove()
      }
    })
  }
}

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y
  } else {
    return x !== x && y !== y
  }
}
function isShallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true
  }

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false
  }

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  if (keysA.length !== keysB.length) {
    return false
  }

  for (let i = 0; i < keysA.length; i++) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false
    }
  }

  return true
}

function useShallowCompareMemoize(value) {
  const ref = useRef()
  if (!isShallowEqual(value, ref.current)) {
    ref.current = value
  }
  return ref.current
}

function cloneShallow(value) {
  return typeof value === "object" ? { ...value } : value
}

if (canUseDOM) {
  twLoad()
}

const childDivIdentifyingAttribute = "twdiv"

export function useTwitterWidget(
  factoryFunctionName,
  primaryArg,
  options,
  onLoad
) {
  const [error, setError] = useState(null)

  const ref: any = useRef(null)

  // noop if ssr
  if (!canUseDOM) {
    return { ref, error }
  }

  // Make deps for useEffect.
  // options, and possibly primaryArg, are objects that should be compared (shallow).
  // There currently aren't any nested arrays or objects, so they
  // can be cloned in a shallow manner.
  // NOTE onLoad is used in useCallback, but it is not listed as a dependency.
  // Listing it would likely cause unnecessary loads. The latest onLoad should be
  // used regardless, since it will not be called unless the other dependencies
  // change, so it works out.
  const deps = [
    factoryFunctionName,
    useShallowCompareMemoize(primaryArg),
    useShallowCompareMemoize(options),
  ]

  useEffect(() => {
    // Reset error
    setError(null)

    // Protect against race conditions
    // (set to true in cleanup function;
    // checked if canceled in async loadWidget)
    let isCanceled = false

    if (ref.current) {
      removeChildrenWithAttribute(ref.current, childDivIdentifyingAttribute)

      async function loadWidget() {
        if (!ref || !ref.current) {
          return
        }

        const childEl = document.createElement("div")
        childEl.setAttribute(childDivIdentifyingAttribute, "yes")
        ref.current.appendChild(childEl)

        try {
          const wf: any = await twWidgetFactory()

          // primaryArg (possibly an object) and options must be cloned
          // since twitter mutates them (gah!).
          // There currently aren't any nested arrays or objects, so they
          // can be cloned in a shallow manner.
          const resultMaybe = await wf[factoryFunctionName](
            cloneShallow(primaryArg),
            childEl,
            cloneShallow(options)
          )

          // Twitter returns undefined if widget creation fails.
          // However, if deps are stale (isCanceled), suppress error (likely race condition).
          if (!resultMaybe && !isCanceled) {
            throw new Error(
              "Twitter could not create widget. If it is a Timeline or " +
                "Tweet, ensure the screenName/tweetId exists."
            )
          }
        } catch (e) {
          console.error(e)
          setError(e)
          return
        }

        if (!ref || !ref.current) {
          return
        }

        if (isCanceled) {
          if (childEl) {
            childEl.remove()
          }
          return
        }

        if (onLoad) {
          onLoad()
        }
      }

      loadWidget()
    }

    return () => {
      isCanceled = true
    }
  }, deps)

  return { ref, error }
}
