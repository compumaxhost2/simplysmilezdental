import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const polyfillFile = path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'build', 'polyfills', 'polyfill-module.js');

try {
  if (fs.existsSync(polyfillFile)) {
    fs.writeFileSync(polyfillFile, '/* modern baseline: legacy polyfills removed */');
    console.log('Successfully stripped legacy polyfills from Next.js build bundle.');
  }
} catch (err) {
  console.warn('Could not modify polyfill-module.js:', err.message);
}
