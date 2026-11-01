#!/usr/bin/env node
// Tiny static server that mimics GitHub Pages: serves _site/ under the SITE_URL path prefix,
// /dir -> 301 /dir/, /dir/ -> dir/index.html, unknown paths -> 404 status with the root 404.html.
//   SITE_URL=https://arcueidshiki.github.io/seo PORT=8080 node scripts/serve.mjs
import http from 'node:http';
import { existsSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '_site');
const PREFIX = new URL(process.env.SITE_URL || 'https://arcueidshiki.github.io/seo').pathname.replace(/\/$/, '');
const PORT = +(process.env.PORT || 8080);
const TYPES = { html: 'text/html; charset=utf-8', css: 'text/css', js: 'text/javascript', json: 'application/json', xml: 'application/xml', txt: 'text/plain; charset=utf-8', svg: 'image/svg+xml', png: 'image/png', webp: 'image/webp', webmanifest: 'application/manifest+json', md: 'text/markdown; charset=utf-8' };

http.createServer((req, res) => {
  const u = new URL(req.url, 'http://x');
  let p = decodeURIComponent(u.pathname);
  const notFound = () => {
    const f = path.join(root, '404.html');
    res.writeHead(404, { 'content-type': TYPES.html });
    res.end(req.method === 'HEAD' ? undefined : existsSync(f) ? readFileSync(f) : 'Not found');
  };
  if (!p.startsWith(PREFIX + '/') && p !== PREFIX) return notFound();
  let file = path.join(root, p.slice(PREFIX.length));
  if (!file.startsWith(root)) return notFound();
  if (existsSync(file) && statSync(file).isDirectory()) {
    if (!p.endsWith('/')) { res.writeHead(301, { location: p + '/' + u.search }); return res.end(); }
    file = path.join(file, 'index.html');
  }
  if (!existsSync(file)) return notFound();
  const ext = path.extname(file).slice(1);
  const body = readFileSync(file);
  res.writeHead(200, { 'content-type': TYPES[ext] || 'application/octet-stream', 'content-length': body.length, 'cache-control': 'max-age=600' });
  res.end(req.method === 'HEAD' ? undefined : body);
}).listen(PORT, () => console.log(`serving _site at http://localhost:${PORT}${PREFIX}/`));
