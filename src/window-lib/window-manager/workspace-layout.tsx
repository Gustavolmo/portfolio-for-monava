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
      className="overflow-hidden h-full w-full"
    >
      <ScreenListeners />
      {children}
    </main>
  )
}
