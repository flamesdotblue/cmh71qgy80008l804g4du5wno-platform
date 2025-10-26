import React from 'react'
import PptxGenJS from 'pptxgenjs'
import { milestones, series, models } from '../data/bmw'

export default function ExportPPT({ children }) {
  const makeDeck = async () => {
    const pptx = new PptxGenJS()

    // Theme-like defaults
    pptx.defineLayout({ name: 'WIDE', width: 13.33, height: 7.5 })
    pptx.layout = 'WIDE'
    const dark = '1F1F1F'
    const panel = '262626'
    const text = 'F5F5F5'
    const subText = 'B0B0B0'
    const accent = '3B82F6' // blue-500

    // Title slide
    {
      const slide = pptx.addSlide()
      slide.background = { fill: dark }
      slide.addText('The History of BMW and Its Iconic Cars', {
        x: 0.5, y: 1.2, w: 12.3, h: 1.2, fontFace: 'Inter', fontSize: 40, bold: true, color: text, align: 'center'
      })
      slide.addShape(pptx.shapes.RECTANGLE, {
        x: 4.5, y: 2.6, w: 4.3, h: 0.25, fill: { color: accent }, line: { color: accent }
      })
      slide.addText('An elegant overview of eras, lineages, and models', {
        x: 1, y: 3.2, w: 11.3, h: 0.6, fontFace: 'Inter', fontSize: 16, color: subText, align: 'center'
      })
      slide.addText(`© ${new Date().getFullYear()} Educational Presentation`, {
        x: 0.5, y: 6.9, w: 12.3, h: 0.3, fontFace: 'Inter', fontSize: 10, color: subText, align: 'center'
      })
    }

    // Timeline slides (chunked)
    const timelineChunk = 5
    for (let i = 0; i < milestones.length; i += timelineChunk) {
      const slide = pptx.addSlide()
      slide.background = { fill: dark }
      slide.addText('Key Milestones', { x: 0.6, y: 0.5, w: 6, h: 0.6, fontFace: 'Inter', fontSize: 24, bold: true, color: text })
      const rows = milestones.slice(i, i + timelineChunk)
      let y = 1.2
      rows.forEach((m) => {
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.6, y, w: 12.1, h: 0.95, fill: { color: panel }, line: { color: '2E2E2E' }, rectRadius: 0.15 })
        slide.addText(`${m.year}  —  ${m.title}`, { x: 0.8, y: y + 0.18, w: 11.7, h: 0.4, fontFace: 'Inter', fontSize: 14, bold: true, color: accent })
        slide.addText(m.text, { x: 0.8, y: y + 0.48, w: 11.7, h: 0.4, fontFace: 'Inter', fontSize: 12, color: subText })
        y += 1.1
      })
    }

    // Series overview
    {
      const slide = pptx.addSlide()
      slide.background = { fill: dark }
      slide.addText('Series Lineup Overview', { x: 0.6, y: 0.5, w: 6, h: 0.6, fontFace: 'Inter', fontSize: 24, bold: true, color: text })
      let x = 0.6
      let y = 1.2
      series.forEach((s, idx) => {
        slide.addShape(pptx.shapes.RECTANGLE, { x, y, w: 6.1, h: 1.4, fill: { color: panel }, line: { color: '2E2E2E' } })
        slide.addText(`${s.name}  •  ${s.era}`, { x: x + 0.2, y: y + 0.2, w: 5.7, h: 0.4, fontFace: 'Inter', fontSize: 14, bold: true, color: text })
        slide.addText(s.blurb, { x: x + 0.2, y: y + 0.6, w: 5.7, h: 0.6, fontFace: 'Inter', fontSize: 12, color: subText })
        if (x > 3) { x = 0.6; y += 1.55 } else { x = 6.9 }
        if (idx === series.length - 1) {}
      })
    }

    // Model index slides (3 per slide)
    const perSlide = 3
    for (let i = 0; i < models.length; i += perSlide) {
      const slide = pptx.addSlide()
      slide.background = { fill: dark }
      slide.addText('Model Profiles', { x: 0.6, y: 0.5, w: 10, h: 0.6, fontFace: 'Inter', fontSize: 24, bold: true, color: text })
      const slice = models.slice(i, i + perSlide)
      let y = 1.2
      slice.forEach((m) => {
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.6, y, w: 12.1, h: 1.7, fill: { color: panel }, line: { color: '2E2E2E' }, rectRadius: 0.15 })
        slide.addText(`${m.name}  •  ${m.years}  •  ${m.series}`, { x: 0.8, y: y + 0.2, w: 11.7, h: 0.35, fontFace: 'Inter', fontSize: 14, bold: true, color: accent })
        slide.addText(`${m.type}  •  ${m.body}`, { x: 0.8, y: y + 0.52, w: 11.7, h: 0.3, fontFace: 'Inter', fontSize: 12, color: text })
        slide.addText(`Engines: ${m.engines}   |   Power: ${m.power}   |   Drive: ${m.drivetrain}`, { x: 0.8, y: y + 0.82, w: 11.7, h: 0.3, fontFace: 'Inter', fontSize: 11, color: text })
        slide.addText(m.notes, { x: 0.8, y: y + 1.12, w: 11.7, h: 0.4, fontFace: 'Inter', fontSize: 11, color: subText })
        y += 1.9
      })
    }

    // Closing slide
    {
      const slide = pptx.addSlide()
      slide.background = { fill: dark }
      slide.addText('Danke schön!', { x: 0.5, y: 2.2, w: 12.3, h: 1, fontFace: 'Inter', fontSize: 48, bold: true, color: text, align: 'center' })
      slide.addText('This deck summarizes BMW history and representative models. For exhaustive trim-by-trim specs, consult official BMW literature and registries.', { x: 1.2, y: 3.4, w: 10.9, h: 1.2, fontFace: 'Inter', fontSize: 14, color: subText, align: 'center' })
    }

    await pptx.writeFile({ fileName: 'BMW_History_and_Models.pptx' })
  }

  return (
    <span onClick={makeDeck}>
      {children}
    </span>
  )
}
