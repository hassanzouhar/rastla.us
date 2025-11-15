import sharp from 'sharp';
import { readFileSync } from 'fs';

const svgBuffer = readFileSync('./public/og.svg');

await sharp(svgBuffer)
  .resize(1200, 630)
  .png()
  .toFile('./public/og.png');

console.log('✓ OG image generated: public/og.png');
