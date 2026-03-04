const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public/all_images');
const htmlPath = path.join(__dirname, 'public/curation.html');

const files = fs.readdirSync(imgDir).filter(f => !f.startsWith('.') && (f.endsWith('.jpg') || f.endsWith('.JPG')));

let html = `<html><head><style>
  body { font-family: sans-serif; background: #222; color: #fff; margin: 0; padding: 20px; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
  .card { background: #000; padding: 10px; position: relative; border-radius: 8px; }
  .card img { width: 100%; height: 250px; object-fit: contain; }
  .label { font-size: 11px; word-break: break-all; margin-top: 10px; color: #ccc; text-align: center; }
  .num { position: absolute; top: -10px; left: -10px; background: red; padding: 5px 10px; font-weight: bold; border-radius: 50%; font-size: 14px; }
</style></head><body><h1>Manual Photo Curation Directory</h1><div class="grid">`;

files.forEach((f, i) => {
    html += `<div class="card"><div class="num">${i}</div><img src="/all_images/${f}"><div class="label">${f}</div></div>`;
});
html += `</div></body></html>`;

fs.writeFileSync(htmlPath, html);
console.log('Preview generated at public/curation.html');
