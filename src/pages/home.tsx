import { CodeXml, Cpu, Github, Globe, Linkedin, Terminal } from 'lucide-react'
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

        <WindowLayout defaultDock="full" useWindowStore={allverkStore} windowName={'allverk.se'}>
          <iframe
            className={`
              w-full h-full
              ${isResizingAllverk || isDraggingAllverk ? 'pointer-events-none' : 'pointer-events-auto'}
            `}
            src="https://allverk.se/"
          ></iframe>
        </WindowLayout>

        <WindowLayout
          defaultDock="full"
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
          defaultDock="full"
          useWindowStore={myStackStore}
          windowName={<CodeXml className="text-zinc-400" />}
        >
          <div className="w-full h-full bg-zinc-50 p-6 md:p-10 flex justify-center">
            <section className="max-w-xl w-full flex flex-col gap-12">
              {/* Profile Section */}
              <div className="flex flex-wrap items-start justify-between gap-8">
                <article className="flex-shrink-0">
                  <div className="relative group">
                    <div className="absolute -inset-1 rounded-2xl blur opacity-25"></div>
                    <img
                      src={profilePic}
                      alt="profile-pic"
                      className="relative h-32 w-32 md:h-40 md:w-40 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-200"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </article>

                <article className="flex-1 min-w-[280px]">
                  <header className="mb-4">
                    <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">
                      Gustavo Oliveira
                    </h1>
                    <p className="text-zinc-500 font-medium flex items-center gap-2 mt-1">
                      <Cpu size={16} />
                      Systems Architect & Full-Stack Engineer
                    </p>
                  </header>

                  <div className="space-y-4 text-zinc-600 leading-relaxed">
                    <p>
                      I build robust, scalable systems with a focus on performance and clean
                      architecture. Passionate about low-level optimizations and modern web
                      technologies.
                    </p>
                    <div className="flex items-center gap-4 text-zinc-400">
                      <span className="w-1 h-1 rounded-full bg-zinc-300" />
                      <span className="flex items-center gap-1 text-xs uppercase tracking-widest font-bold">
                        <Globe size={12} /> Remote / Stockholm
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              {/* Skills Section */}
              <section className="border-t border-zinc-200 pt-8">
                <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <Terminal size={14} /> Core Competencies
                </h2>

                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Go', color: 'bg-sky-50 text-sky-700 border-sky-200' },
                    { name: 'C#', color: 'bg-purple-50 text-purple-700 border-purple-200' },
                    { name: 'TypeScript', color: 'bg-blue-50 text-blue-700 border-blue-200' },
                    {
                      name: 'PostgreSQL',
                      color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
                    },
                    { name: 'NoSQL', color: 'bg-green-100 text-green-700 border-green-200' },
                    { name: 'React', color: 'bg-slate-100 text-slate-700 border-slate-200' },
                  ].map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-4 py-1.5 rounded-full text-sm font-semibold border cursor-default ${skill.color}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </section>

              {/* Footer Info */}
              <footer className="mt-auto pt-8 text-[10px] text-zinc-400 uppercase tracking-widest flex justify-between items-center">
                <span>Last Updated: Feb 2026</span>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Gustavolmo"
                    className="hover:text-zinc-900 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gustavo-l-m-de-oliveira-037243108/"
                    className="hover:text-zinc-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </footer>
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
