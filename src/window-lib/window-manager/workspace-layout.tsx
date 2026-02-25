import ScreenListeners from '../screen-manager/screen-listeners'
import { stopAllDragAndResize } from './window-global-actions'

type Props = {
  children: React.ReactNode
}

export default function WorkspaceLayout({ children }: Props) {
  return (
    <main
      onMouseLeave={stopAllDragAndResize}
      onMouseUp={stopAllDragAndResize}
      className="absolute flex flex-col overflow-visible h-full w-full workspace-grid-background"
    >
      <ScreenListeners />
      {children}
    </main>
  )
}
