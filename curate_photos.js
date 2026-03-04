const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public/all_images');
const imagesJsonPath = path.join(__dirname, 'src/images.json');

// Read all files
const files = fs.readdirSync(imagesDir).filter(f => !f.startsWith('.') && (f.endsWith('.jpg') || f.endsWith('.JPG')));

// To avoid sequences of burst photos (which share very similar names/timestamps),
// we will sort them alphabetically, then sample every Nth photo to get a distributed
// cross-section of the entire event, discarding the lookalikes adjacent to it.
files.sort();

const targetCount = 30;
const step = Math.max(1, Math.floor(files.length / targetCount));

const curatedFiles = [];
for (let i = 0; i < files.length; i += step) {
    curatedFiles.push(files[i]);
    if (curatedFiles.length >= targetCount) break;
}

fs.writeFileSync(imagesJsonPath, JSON.stringify(curatedFiles, null, 2));
console.log(`Curated ${files.length} raw photos down to ${curatedFiles.length} distinct shots.`);
