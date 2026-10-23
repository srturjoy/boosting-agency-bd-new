import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const mapFile = path.join(rootDir, "scripts", "campaign-images-map.json");
const mediaDir = path.join(rootDir, ".aistudio", "artifacts", "brain", "f1d49a8d-c516-4a7f-8e63-81b182330436", ".tempmediaStorage");

if (!fs.existsSync(mapFile)) {
  console.warn("⚠️ [ASSETS] campaign-images-map.json not found, skipping sync.");
  process.exit(0);
}

const map = JSON.parse(fs.readFileSync(mapFile, "utf8"));
const totalEntries = Object.keys(map).length;
console.log(`🚀 [ASSETS] Preparing ${totalEntries} real campaign screenshot images...`);

let synced = 0;
let fromMedia = 0;
let fromPublic = 0;

for (const [urlPath, mediaFilename] of Object.entries(map)) {
  const publicRelPath = urlPath.startsWith("/") ? urlPath.slice(1) : urlPath;
  const publicDest = path.join(rootDir, "public", publicRelPath);
  const outDest = path.join(rootDir, "out", publicRelPath);
  const mediaSrc = path.join(mediaDir, mediaFilename);

  // Ensure target directories exist
  fs.mkdirSync(path.dirname(publicDest), { recursive: true });

  let srcBuffer = null;

  if (fs.existsSync(mediaSrc)) {
    srcBuffer = fs.readFileSync(mediaSrc);
    fromMedia++;
  } else if (fs.existsSync(publicDest)) {
    srcBuffer = fs.readFileSync(publicDest);
    fromPublic++;
  }

  if (srcBuffer) {
    // Copy to public if needed
    if (!fs.existsSync(publicDest) || fs.statSync(publicDest).size !== srcBuffer.length) {
      fs.writeFileSync(publicDest, srcBuffer);
    }

    // If out directory exists (static export), also guarantee out/ has the image
    const outDir = path.join(rootDir, "out");
    if (fs.existsSync(outDir)) {
      fs.mkdirSync(path.dirname(outDest), { recursive: true });
      if (!fs.existsSync(outDest) || fs.statSync(outDest).size !== srcBuffer.length) {
        fs.writeFileSync(outDest, srcBuffer);
      }
    }

    synced++;
  } else {
    console.warn(`⚠️ [ASSETS] Source missing for ${urlPath}`);
  }
}

console.log(`✅ [ASSETS] Successfully verified & synced ${synced}/${totalEntries} campaign screenshots (${fromMedia} from permanent media store, ${fromPublic} from public fallback).`);
