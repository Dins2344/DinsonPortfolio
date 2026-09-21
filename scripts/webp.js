// Usage: npm run img -- public/foo.png [public/bar.jpg ...]
// Writes a .webp next to each source (max 1600px wide, q80). Delete the source yourself once swapped.
// sharp is provided transitively by @netlify/plugin-nextjs.
const sharp = require("sharp");
const fs = require("fs");

(async () => {
  for (const f of process.argv.slice(2)) {
    const out = f.replace(/\.(png|jpe?g)$/i, ".webp");
    const meta = await sharp(f).metadata();
    let img = sharp(f);
    if (meta.width > 1600) img = img.resize({ width: 1600 });
    await img.webp({ quality: 80 }).toFile(out);
    console.log(`${f} -> ${out} ${Math.round(fs.statSync(out).size / 1024)} KB`);
  }
})();
