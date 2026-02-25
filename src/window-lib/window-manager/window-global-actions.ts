import { windowRegistry } from './window-store-factory'

export const stopAllDragAndResize = () => {
  for (const key of Object.keys(windowRegistry)) {
    windowRegistry[key].getState().stopDragAndResize()
  }
}

export const resetAllWindows = () => {
  for (const key of Object.keys(windowRegistry)) {
    windowRegistry[key].getState().reset()
  }
}
