import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../out/', import.meta.url))
const base = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '')
const decode = value => value.replace(/&amp;|&#x26;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'")
async function filesIn(directory) {
  const files = []
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, item.name)
    if (item.isDirectory()) files.push(...await filesIn(absolute))
    else if (item.name.endsWith('.html')) files.push(absolute)
  }
  return files
}
const files = await filesIn(root)
const htmlByFile = new Map(await Promise.all(files.map(async file => [file, await readFile(file, 'utf8')])))
const errors = []
let checked = 0
for (const [file, html] of htmlByFile) {
  const relative = path.relative(root, file)
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${relative}: missing page title`)
  if (html.includes('katex-error')) errors.push(`${relative}: broken formula`)
  const current = new URL(`${base}/${relative.replace(/index\.html$/, '')}`, 'https://docs.invalid')
  for (const match of html.matchAll(/<(a|link|script|img)\b[^>]*?\b(href|src)="([^"]+)"/g)) {
    const href = decode(match[3])
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href)) continue
    const url = new URL(href, current)
    if (base && url.pathname !== base && !url.pathname.startsWith(`${base}/`)) {
      errors.push(`${relative}: link escapes base path: ${href}`)
      continue
    }
    let target = path.join(root, decodeURIComponent(url.pathname.slice(base.length)))
    try {
      const info = await stat(target)
      if (info.isDirectory()) target = path.join(target, 'index.html')
      await stat(target)
    } catch {
      errors.push(`${relative}: missing target: ${href}`)
      continue
    }
    checked++
    if (match[1] === 'a' && url.hash && target.endsWith('.html')) {
      const id = decodeURIComponent(url.hash.slice(1))
      const targetHtml = htmlByFile.get(target)
      const ids = [...(targetHtml || '').matchAll(/\bid="([^"]+)"/g)].map(item => decode(item[1]))
      if (!ids.includes(id)) errors.push(`${relative}: missing anchor: ${href}`)
    }
  }
}
const pages = JSON.parse(await readFile(new URL('../.generated/pages.json', import.meta.url), 'utf8'))
for (const page of pages) {
  const file = path.join(root, page.href, 'index.html')
  if (!htmlByFile.has(file)) errors.push(`Missing exported page: ${page.href}`)
}
if (errors.length) throw new Error(errors.join('\n'))
console.log(`Checked ${files.length} HTML files and ${checked} local links/assets; all ${pages.length} Markdown pages exported.`)
