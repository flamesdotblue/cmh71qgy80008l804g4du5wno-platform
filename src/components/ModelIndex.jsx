import React, { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { models as MODELS } from '../data/bmw'

const SERIES_FILTERS = ['All', 'Classic', 'Neue Klasse', '02 Series', '3 Series', '5 Series', '7 Series', '8 Series', 'Z', 'X', 'M', 'i']

export default function ModelIndex() {
  const [q, setQ] = useState('')
  const [series, setSeries] = useState('All')

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return MODELS.filter(m => {
      const matchesSeries = series === 'All' || m.series === series
      const matchesQuery = !query || [m.name, m.series, m.type, m.body, m.engines, m.notes].join(' ').toLowerCase().includes(query)
      return matchesSeries && matchesQuery
    })
  }, [q, series])

  return (
    <section className="mt-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Comprehensive Model Index</h2>
          <p className="text-neutral-300 text-sm mt-1">Search and filter notable BMW models across eras, with key specs.</p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-full sm:w-72">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search models, engines, notes..."
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-9 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
          </div>
          <select
            value={series}
            onChange={(e) => setSeries(e.target.value)}
            className="rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {SERIES_FILTERS.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m) => (
          <article key={`${m.name}-${m.years}`} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 hover:bg-neutral-900/60 transition-colors">
            <header className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-neutral-50 font-medium leading-tight">{m.name}</h3>
                <div className="text-xs text-neutral-400 mt-0.5">{m.years} • {m.series}</div>
              </div>
              <span className="text-[10px] uppercase tracking-wide text-blue-300/90 bg-blue-500/10 border border-blue-500/30 rounded px-2 py-0.5">{m.type}</span>
            </header>
            <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
              <dt className="text-neutral-400">Body</dt><dd className="text-neutral-200">{m.body}</dd>
              <dt className="text-neutral-400">Engines</dt><dd className="text-neutral-200">{m.engines}</dd>
              <dt className="text-neutral-400">Power</dt><dd className="text-neutral-200">{m.power}</dd>
              <dt className="text-neutral-400">Drive</dt><dd className="text-neutral-200">{m.drivetrain}</dd>
            </dl>
            <p className="text-neutral-300 text-sm mt-3">{m.notes}</p>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-8 text-sm text-neutral-400">No models match your filters.</div>
      )}

      <div className="mt-10 text-xs text-neutral-400">
        Data is summarized from publicly available specifications and model histories. For full trim-by-trim details, consult official BMW documentation and model registries.
      </div>
    </section>
  )
}
