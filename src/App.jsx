import React from 'react'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import SeriesGrid from './components/SeriesGrid'
import ModelIndex from './components/ModelIndex'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Hero />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Timeline />
        <SeriesGrid />
        <ModelIndex />
      </main>
      <footer className="mt-20 border-t border-neutral-800/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-400 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
          <p>Unofficial educational overview. Specs are summarized; verify locally for exact figures.</p>
          <p>© {new Date().getFullYear()} BMW History Showcase</p>
        </div>
      </footer>
    </div>
  )
}
