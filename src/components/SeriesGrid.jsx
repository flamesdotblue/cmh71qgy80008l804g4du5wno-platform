import React from 'react'
import { series as SERIES } from '../data/bmw'

export default function SeriesGrid() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Series Lineup Overview</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERIES.map((s) => (
          <div key={s.name} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 hover:bg-neutral-900/60 transition-colors">
            <div className="text-neutral-50 font-medium">{s.name}</div>
            <div className="text-xs text-neutral-400 mt-1">{s.era}</div>
            <div className="text-neutral-300 text-sm mt-3">{s.blurb}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
