import { windowRegistry } from '../window-manager/window-store-factory'
import { useScreenState } from './screen-state'
import { useEffect } from 'react'

export default function ScreenListeners() {
  return (
    <>
      <CursorCoordinates />
      <WindowHierarchy />
    </>
  )
}

function CursorCoordinates() {
  const { setX, setY } = useScreenState()

  useEffect(() => {
    const handleWindowPosition = (e: MouseEvent) => {
      e.preventDefault()
      setX(e.clientX)
      setY(e.clientY)
    }

    document.addEventListener('pointermove', handleWindowPosition)

    return () => document.removeEventListener('pointermove', handleWindowPosition)
  }, [setX, setY])

  return <></>
}

/* FIX ME: This can be better */
function WindowHierarchy() {
  function bringWindowToFront(windowId: string) {
    for (const key of Object.keys(windowRegistry)) {
      windowRegistry[key].setState({ zIndex: 1 })
    }

    windowRegistry[windowId].setState({ zIndex: 2 })
  }

  useEffect(() => {
    const handleWindowZindexHierarchy = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null

      while (target) {
        const targetId = target.id
        if (windowRegistry[targetId]) {
          bringWindowToFront(targetId)
          break
        }

        const targetButtonId = target.id.split('_')
        if (windowRegistry[targetButtonId[0]] && targetButtonId[1] === 'button') {
          bringWindowToFront(targetButtonId[0])
          break
        }

        target = target.parentElement
      }
    }

    document.addEventListener('mousedown', handleWindowZindexHierarchy)

    return () => document.removeEventListener('mousedown', handleWindowZindexHierarchy)
  }, [])

  return <></>
}
