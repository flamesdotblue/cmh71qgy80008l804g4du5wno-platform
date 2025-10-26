import React from 'react'
import { Car, Rocket, History, Download } from 'lucide-react'
import ExportPPT from './ExportPPT'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-300 mb-6">
            <Rocket className="h-3.5 w-3.5" />
            Elegant Presentation — BMW Through the Ages
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            The History of BMW and Its Iconic Cars
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-300">
            A curated, elegant walkthrough of key eras, series lineages, and landmark models with essential specs and context.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.bmw.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 text-sm font-medium"
            >
              <Car className="h-4 w-4" />
              Visit BMW.com
            </a>
            <a
              href="#timeline"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 transition-colors px-4 py-2 text-sm font-medium"
            >
              <History className="h-4 w-4" />
              Explore Timeline
            </a>
            <ExportPPT>
              <button className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-colors px-4 py-2 text-sm font-medium text-blue-300">
                <Download className="h-4 w-4" />
                Download PPTX
              </button>
            </ExportPPT>
          </div>
        </div>
      </div>
    </section>
  )
}
