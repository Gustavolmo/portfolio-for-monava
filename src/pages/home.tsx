import { CodeXml, Github, Linkedin } from 'lucide-react'
import WindowButton from '../window-lib/window-manager/window-button'
import WindowLayout from '../window-lib/window-manager/window-layout'
import { createWindowStore } from '../window-lib/window-manager/window-store-factory'
import WorkspaceLayout from '../window-lib/window-manager/workspace-layout'
import { resetAllWindows } from '../window-lib/window-manager/window-global-actions'
import profilePic from '../assets/profile-pic-circlewhite.png'

const myStackStore = createWindowStore('window-myStack')

const allverkStore = createWindowStore('window-allverk')
const offertAllverkStore = createWindowStore('window-offert-allverk')

export default function Home() {
  const { isResizing: isResizingOffert, isDragging: isDraggingOffert } = offertAllverkStore()
  const { isResizing: isResizingAllverk, isDragging: isDraggingAllverk } = allverkStore()
  return (
    <>
      <WorkspaceLayout>
        <div className="p-8 w-full h-full flex flex-col items-center mb-32">
          <p className="font-sans text-white opacity-80 font-thin mt-4 max-w-xl">
            Hi Monava, my name is Gustavo. Most of my work contains sensitive Scania data, so I was
            not sure how to communicate my experience. I wanted to put together something to
            showcase my know-how so I built this page with a window manager library I wrote myself.
          </p>

          <div className="flex flex-col gap-4 items-center justify-center mt-16 max-w-xl w-full">
            <p className="font-mono w-full text-white text-2xl uppercase tracking-[0.4em] mb-0 block opacity-50">
              Case Studies
            </p>
            <div className="font-sans w-full text-white opacity-80 font-thin max-w-xl">
              <WindowButton useWindowStore={allverkStore} styles="underline">
                allverk.se
              </WindowButton>{' '}
              - embeddings and AI powered search engine
            </div>
            <div className="font-sans w-full text-white opacity-80 font-thin max-w-xl">
              <WindowButton useWindowStore={offertAllverkStore} styles="underline">
                offert.allverk.se
              </WindowButton>{' '}
              - multi-tenant application + google ads integration
            </div>
          </div>
        </div>

        <WindowLayout defaultDock="right" useWindowStore={allverkStore} windowName={'allverk.se'}>
          <iframe
            className={`
              w-full h-full
              ${isResizingAllverk || isDraggingAllverk ? 'pointer-events-none' : 'pointer-events-auto'}
            `}
            src="https://allverk.se/"
          ></iframe>
        </WindowLayout>

        <WindowLayout
          defaultDock="left"
          useWindowStore={offertAllverkStore}
          windowName={'offert.allverk.se'}
        >
          <iframe
            className={`
              w-full h-full
              ${isResizingOffert || isDraggingOffert ? 'pointer-events-none' : 'pointer-events-auto'}
            `}
            src="https://offert.allverk.se/"
          ></iframe>
        </WindowLayout>

        <WindowLayout
          useWindowStore={myStackStore}
          windowName={<CodeXml className="text-zinc-400" />}
        >
          <div className="w-full h-full bg-zinc-200 p-4 flex justify-center">
            <section className="max-w-4xl max-auto flex w-full justify-between flex-wrap gap-8">
              <article>
                <img src={profilePic} alt="profile-pic" className="h-32 w-32" />
              </article>
              <article>bla bla bla</article>
            </section>
          </div>
        </WindowLayout>
      </WorkspaceLayout>

      <nav className="fixed bottom-0 left-0 w-full h-12 bg-neutral-900 flex gap-2 py-2 px-4 justify-between">
        <div className="flex gap-2 items-center">
          <WindowButton useWindowStore={myStackStore} styles="px-2">
            <CodeXml className="text-zinc-400 hover:text-zinc-50" />
          </WindowButton>
        </div>

        <button onClick={resetAllWindows} className="uppercase text-white opacity-50 text-xs">
          Reset All Windows
        </button>

        <div className="flex gap-4 items-center">
          <a target="_blank" href="https://www.linkedin.com/in/gustavo-l-m-de-oliveira-037243108/">
            <Linkedin className="text-zinc-400 hover:text-zinc-50" />
          </a>
          <a target="_blank" href="https://github.com/Gustavolmo">
            <Github className="text-zinc-400 hover:text-zinc-50" />
          </a>
        </div>
      </nav>
    </>
  )
}
