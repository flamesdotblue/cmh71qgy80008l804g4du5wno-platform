import React from 'react'
import { milestones } from '../data/bmw'

export default function Timeline() {
  return (
    <section id="timeline" className="mt-16">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Timeline of Key Milestones</h2>
      <div className="mt-6 grid gap-4 sm:gap-6">
        {milestones.map((m, i) => (
          <div key={i} className="grid grid-cols-[80px_1fr] items-start gap-4 rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
            <div className="text-blue-300 font-semibold tabular-nums">{m.year}</div>
            <div>
              <div className="font-medium text-neutral-100">{m.title}</div>
              <div className="text-neutral-300 text-sm mt-1">{m.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
