'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import pages from '@/.generated/search.json'

export function Search() {
  const dialog = useRef<HTMLDialogElement>(null)
  const input = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [includeSources, setIncludeSources] = useState(false)
  function open() { dialog.current?.showModal(); input.current?.focus() }
  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        if (dialog.current?.open) dialog.current.close()
        else open()
      }
    }
    window.addEventListener('keydown', shortcut)
    return () => window.removeEventListener('keydown', shortcut)
  }, [])
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  const score = (page: typeof pages[number]) => terms.reduce((sum, term) => sum + 10 * Number(page.title.toLowerCase().includes(term)), 0)
    + (page.section === 'Reading guide' ? 1 : 0)
  const results = terms.length ? pages.filter(page => (includeSources || !page.archive)
    && terms.every(term => `${page.title} ${page.text}`.toLowerCase().includes(term)))
    .sort((a, b) => score(b) - score(a)) : []
  return <>
    <button className="search-trigger" type="button" onClick={open}>Search<span className="search-long"> documentation</span><kbd>⌘ K</kbd></button>
    <dialog ref={dialog} className="search-dialog" aria-label="Search AI safety material" onClick={event => {
      if (event.target === event.currentTarget) dialog.current?.close()
    }}>
      <div className="search-input-row">
        <label className="sr-only" htmlFor="search">Search AI safety material</label>
        <input ref={input} id="search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search topics, questions, and papers…" />
        <button type="button" onClick={() => dialog.current?.close()}>Close</button>
      </div>
      <label className="search-sources"><input type="checkbox" checked={includeSources} onChange={event => setIncludeSources(event.target.checked)} />Include source archive</label>
      <div className="search-results" aria-live="polite">
        {!terms.length ? <p>Try “scaling”, “cross-entropy”, or “activation steering”.</p> : results.length ? <>
          <p>{results.length} matching {results.length === 1 ? 'page' : 'pages'}</p>
          <ul>{results.map(page => <li key={page.href}><Link href={page.href} onClick={() => dialog.current?.close()}>
            <span className="result-section">{page.section}</span><strong>{page.title}</strong><span>{page.description}</span>
          </Link></li>)}</ul>
        </> : <p>No matching pages. Try fewer or different words.</p>}
      </div>
    </dialog>
  </>
}
