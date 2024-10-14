import * as React from "react"

export function useMediaQuery(query) {
    const subscribe = React.useCallback(
        (callback) => {
            const matchMedia = window.matchMedia(query)

            matchMedia.addEventListener("change", callback)
            return () => {
                matchMedia.removeEventListener("change", callback)
            }
        },
        [query]
    )

    const getSnapshot = () => {
        return window.matchMedia(query).matches
    }

    const getServerSnapshot = () => {
        throw Error("useMediaQuery is a client-only hook")
    }

    return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
