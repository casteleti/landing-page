// Converts imagens-originais/*.png (928x1152 AI masters) into optimized WebP
// assets under public/images/. Re-run after replacing any master:
//   node scripts/build-images.mjs
import sharp from 'sharp';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'imagens-originais');
const LOGO = path.join(ROOT, 'logo');
const OUT = path.join(ROOT, 'public', 'images');

// The OG card bakes the price in, so read it from config instead of duplicating it.
const config = await readFile(path.join(ROOT, 'src', 'config.ts'), 'utf8');
const PRICE = config.match(/export const PRICE = '([^']+)'/)?.[1] ?? '$0';

// master file -> cover slug (guide it belongs to).
// `crop` (optional) is a pre-resize extract in master pixel space, used when the
// master frames more than the cover should show.
const COVERS = {
  'site-001.png': { slug: 'blueprint-main' },
  'site-002.png': { slug: 'side-effect-survival' },
  'site-003.png': { slug: 'first-30-days' },
  'site-004.png': { slug: 'protein-priority' },
  'site-005.png': { slug: 'muscle-preservation' },
  'site-006.png': { slug: 'face-body-defense' },
  'site-007.png': { slug: 'plateau-breaker' },
  'site-008.png': { slug: 'life-after-glp1' },
  // site-009 renders an outdoor walk, not food — it closes the page instead (see CTA below).
  // Recipe cover reuses the plating master, cropped tight on the food so it reads
  // differently from the protein-priority cover.
  'site-004.png#food': {
    slug: 'high-protein-recipes',
    crop: { left: 180, top: 327, width: 660, height: 825 },
  },
  'site-010.png': { slug: 'food-noise-workbook' },
  'site-011.png': { slug: 'restaurant-social' },
};

await mkdir(path.join(OUT, 'covers'), { recursive: true });

// Bonus-card covers: rendered at 160 CSS px (4:5) -> 480x600 covers 3x displays.
for (const [key, { slug, crop }] of Object.entries(COVERS)) {
  const file = key.split('#')[0];
  let pipeline = sharp(path.join(SRC, file));
  if (crop) pipeline = pipeline.extract(crop);
  await pipeline
    .resize(480, 600, { fit: 'cover', position: 'centre' })
    .webp({ quality: 80, effort: 6 })
    .toFile(path.join(OUT, 'covers', `${slug}.webp`));
  console.log('cover  ', slug);
}

// ---- Brand logo -------------------------------------------------------------
// 02-* is the horizontal lockup (mark + wordmark); 04-positivo is the mark alone.
// Resize by HEIGHT only. Passing both dimensions with fit:'contain' padded the
// lockup to a ratio that no longer matched the master, and the markup then
// declared that wrong ratio to the browser.
const LOGO_H = 120; // 3x the 40px desktop render
for (const [src, out] of [
  ['02-positivo.png', 'logo-full.webp'],
  ['02-negativo.png', 'logo-full-neg.webp'],
]) {
  const { width, height } = await sharp(path.join(LOGO, src))
    .resize({ height: LOGO_H })
    .webp({ quality: 92, effort: 6, alphaQuality: 100 })
    .toFile(path.join(OUT, out));
  console.log(`logo    ${out} ${width}x${height}`);
}
await sharp(path.join(LOGO, '04-positivo.png'))
  .resize(128, 128)
  .webp({ quality: 92, effort: 6, alphaQuality: 100 })
  .toFile(path.join(OUT, 'logo-mark.webp'));
console.log('logo    logo-mark 128x128');

// Favicons come from the mark so the tab icon matches the brand.
await sharp(path.join(LOGO, '04-positivo.png'))
  .resize(48, 48)
  .png({ compressionLevel: 9 })
  .toFile(path.join(ROOT, 'public', 'favicon-48.png'));
await sharp(path.join(LOGO, '04-positivo.png'))
  .resize(180, 180)
  .flatten({ background: '#F7F5EF' })
  .png({ compressionLevel: 9 })
  .toFile(path.join(ROOT, 'public', 'apple-touch-icon.png'));
console.log('icons   favicon-48 / apple-touch-icon');

// ---- "It's digital" imagery -------------------------------------------------
// The copy promises instant access on any device; these show exactly that.
await sharp(path.join(SRC, 'digital-01.png'))
  .extract({ left: 150, top: 0, width: 920, height: 1150 })
  .resize(800, 1000, { fit: 'cover' })
  .webp({ quality: 80, effort: 6 })
  .toFile(path.join(OUT, 'digital-tablet.webp'));
console.log('device  digital-tablet');

// Shared hero for both landing pages: examining the injector pen in her own
// kitchen. Master is 1283x1395, cropped to the 4:5 the hero slot renders.
await sharp(path.join(SRC, '90893ss7.png'))
  .extract({ left: 62, top: 0, width: 1116, height: 1395 })
  .resize(928, 1160, { fit: 'cover' })
  .webp({ quality: 78, effort: 6 })
  .toFile(path.join(OUT, 'hero-pen.webp'));
console.log('hero    hero-pen');

// Front card of the Section 8 collage. Renders around 235 CSS px wide, so it
// needs a tighter framing on her and the tablet than the Section 9 version.
await sharp(path.join(SRC, 'digital-01.png'))
  .extract({ left: 369, top: 203, width: 620, height: 775 })
  .resize(480, 600, { fit: 'cover' })
  .webp({ quality: 80, effort: 6 })
  .toFile(path.join(OUT, 'digital-tablet-tight.webp'));
console.log('device  digital-tablet-tight');

await sharp(path.join(SRC, 'digital-04.png'))
  .extract({ left: 50, top: 0, width: 752, height: 940 })
  .resize(640, 800, { fit: 'cover' })
  .webp({ quality: 80, effort: 6 })
  .toFile(path.join(OUT, 'digital-phone.webp'));
console.log('device  digital-phone');

// Section 4 companion. Wider, more environmental crop than the plateau-breaker
// cover built from the same master, so the two don't read as a duplicate.
await sharp(path.join(SRC, 'site-007.png'))
  .extract({ left: 0, top: 96, width: 928, height: 1044 })
  .resize(560, 630, { fit: 'cover', position: 'centre' })
  .webp({ quality: 78, effort: 6 })
  .toFile(path.join(OUT, 'problem-companion.webp'));
console.log('side    problem-companion');

// Final-CTA background band: golden-hour balcony read on a tablet — closes the
// page on the product actually being used. Sits under a dark overlay.
await sharp(path.join(SRC, 'digital-02.png'))
  .extract({ left: 0, top: 63, width: 1824, height: 1026 })
  .resize(1600, 900, { fit: 'cover' })
  .webp({ quality: 68, effort: 6 })
  .toFile(path.join(OUT, 'final-cta-bg.webp'));
console.log('band    final-cta-bg');

// Social share card (og:image, 1200x630): brand panel on the left, real photo on
// the right. Text is baked in because social crawlers only fetch the image.
const OG_W = 1200;
const OG_H = 630;
const PHOTO_W = 520;

// Same master as the hero, so an ad click lands on a page that looks like the
// card the visitor just tapped.
const ogPhoto = await sharp(path.join(SRC, '90893ss7.png'))
  .extract({ left: 66, top: 0, width: 1151, height: 1395 })
  .resize(PHOTO_W, OG_H, { fit: 'cover', position: 'centre' })
  .toBuffer();

const ogText = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${OG_W}" height="${OG_H}">
  <rect width="${OG_W}" height="${OG_H}" fill="#344426"/>
  <text x="64" y="150" font-family="Helvetica, Arial, sans-serif" font-size="15"
        font-weight="600" letter-spacing="2.2" fill="#8F995E">FOR ADULTS USING PRESCRIBED GLP-1 MEDICATIONS</text>
  <text x="64" y="240" font-family="Georgia, serif" font-size="56" fill="#F7F5EF">Your Practical</text>
  <text x="64" y="308" font-family="Georgia, serif" font-size="56" fill="#F7F5EF">GLP-1 Roadmap</text>
  <text x="64" y="368" font-family="Helvetica, Arial, sans-serif" font-size="22" fill="#E1DBCE">A 4-phase system + 10 practical guides.</text>
  <rect x="64" y="424" width="332" height="60" rx="11" fill="#A85428"/>
  <text x="230" y="462" text-anchor="middle" font-family="Helvetica, Arial, sans-serif"
        font-size="21" font-weight="bold" fill="#FFFFFF">Get Instant Access &#8212; ${PRICE}</text>
  <text x="64" y="556" font-family="Helvetica, Arial, sans-serif" font-size="15" fill="#8F995E">Educational product. Not medical advice.</text>
</svg>`);

await sharp(ogText)
  .composite([{ input: ogPhoto, left: OG_W - PHOTO_W, top: 0 }])
  .png({ compressionLevel: 9 })
  .toFile(path.join(OUT, 'og-image.png'));
console.log('social  og-image');

console.log('done');
