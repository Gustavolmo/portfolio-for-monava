import { StoreApi, UseBoundStore } from 'zustand'
import { WindowStore } from './window-types'

type StoreProp = {
  children: React.ReactNode
  useWindowStore: UseBoundStore<StoreApi<WindowStore>>
  styles?: string
}

export default function WindowButton({ children, useWindowStore, styles }: StoreProp) {
  const { openWindow, minimizeWindow, isWinMinimized, windowId } = useWindowStore()

  const handleOpenCloseWin = () => {
    if (isWinMinimized) openWindow()
    else minimizeWindow()
  }

  return (
    <button
      id={`${windowId}_button`}
      onClick={handleOpenCloseWin}
      className={styles ? styles : `${!isWinMinimized ? 'brightness-150' : 'brightness-[85%]'}`}
    >
      {children}
    </button>
  )
}
