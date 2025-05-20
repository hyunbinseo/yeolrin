import { globSync, readFileSync, writeFileSync } from 'node:fs';
import ttf2woff2 from 'ttf2woff2';

for (const path of globSync('*.ttf')) {
	writeFileSync(
		path.replace('.ttf', '.woff2'), //
		ttf2woff2(readFileSync(path)),
	);
}
