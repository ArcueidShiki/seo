// Generates demo images with headless Chromium (Playwright) + Pillow.
// after/: optimized WebP/PNG at the exact rendered size.  before/: a deliberately huge PNG.
import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const after = path.join(root, 'demos/after/assets');
const before = path.join(root, 'demos/before');
const tmp = path.join(root, '.lighthouse-tmp');
mkdirSync(tmp, { recursive: true });

const chart = (w, h, title) => `<!doctype html><html><body style="margin:0">
<div style="width:${w}px;height:${h}px;background:linear-gradient(135deg,#0f172a,#134e4a);font-family:system-ui,sans-serif;color:#fff;position:relative;overflow:hidden">
  <svg width="${w}" height="${h}" viewBox="0 0 640 420" preserveAspectRatio="none" style="position:absolute;inset:0;opacity:.95">
    <polyline points="20,330 80,300 130,315 190,250 240,270 300,200 350,215 410,150 470,170 530,110 620,80" fill="none" stroke="#5eead4" stroke-width="5"/>
    <line x1="20" y1="215" x2="620" y2="215" stroke="#fbbf24" stroke-dasharray="10 8" stroke-width="3"/>
    <line x1="20" y1="265" x2="620" y2="265" stroke="#f87171" stroke-dasharray="10 8" stroke-width="3"/>
  </svg>
  <div style="position:absolute;left:4%;top:6%;font-size:${Math.round(h / 12)}px;font-weight:700">${title}</div>
  <div style="position:absolute;right:4%;top:47%;font-size:${Math.round(h / 22)}px;color:#fbbf24">Entry $50</div>
  <div style="position:absolute;right:4%;top:59%;font-size:${Math.round(h / 22)}px;color:#f87171">Stop $48</div>
  <div style="position:absolute;left:4%;bottom:6%;font-size:${Math.round(h / 16)}px;background:#0f766e;padding:.3em .6em;border-radius:.4em">Risk $100 → 50 shares</div>
</div></body></html>`;

const logo = (s) => `<!doctype html><html><body style="margin:0"><div style="width:${s}px;height:${s}px;background:#0f766e;border-radius:${s * 0.22}px;display:flex;align-items:center;justify-content:center">
<svg width="${s * 0.8}" height="${s * 0.8}" viewBox="0 0 64 64"><path d="M14 44 L26 30 L34 37 L50 18" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="18" r="4" fill="#99f6e4"/></svg></div></body></html>`;

const avatar = `<!doctype html><html><body style="margin:0"><div style="width:128px;height:128px;border-radius:64px;background:linear-gradient(135deg,#14b8a6,#0f172a);display:flex;align-items:center;justify-content:center;color:#fff;font:700 44px system-ui">VX</div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
async function shot(html, w, h, file) {
  await page.setViewportSize({ width: w, height: h });
  await page.setContent(html);
  await page.screenshot({ path: file, omitBackground: true });
}
await shot(chart(1280, 840, 'Position size calculator'), 1280, 840, `${tmp}/hero.png`);
await shot(chart(1200, 630, 'Vexlora Position Size Calculator'), 1200, 630, `${after}/og-image.png`);
await shot(logo(512), 512, 512, `${after}/logo-512.png`);
await shot(logo(180), 180, 180, `${after}/apple-touch-icon.png`);
await shot(avatar, 128, 128, `${tmp}/author.png`);
// BEFORE: 2400x1600 screenshot, saved as an uncompressed-ish PNG with noise so it is several MB
await shot(chart(2400, 1600, 'Vexlora'), 2400, 1600, `${tmp}/before-hero.png`);
await browser.close();

execFileSync('python3', ['-c', `
from PIL import Image
import random
Image.open('${tmp}/hero.png').convert('RGB').save('${after}/hero.webp','WEBP',quality=78,method=6)
Image.open('${tmp}/author.png').convert('RGB').save('${after}/author.webp','WEBP',quality=80)
im=Image.open('${tmp}/before-hero.png').convert('RGB')
px=im.load(); w,h=im.size
random.seed(1)
for y in range(0,h,1):
    for x in range(0,w,3):
        r,g,b=px[x,y]; n=random.randint(-18,18)
        px[x,y]=(max(0,min(255,r+n)),max(0,min(255,g+n)),max(0,min(255,b+n)))
im=im.resize((2000,1333)); im.save('${before}/hero.png','PNG',optimize=True)
og=Image.open('${after}/og-image.png').convert('RGB'); og.quantize(colors=128,method=Image.Quantize.MEDIANCUT).save('${after}/og-image.png',optimize=True)
`]);
console.log('assets generated');
