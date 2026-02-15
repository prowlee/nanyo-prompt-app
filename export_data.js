import { RAW } from './src/data/prompts.js';
import fs from 'fs';
fs.writeFileSync('./scraper/raw_data.json', JSON.stringify(RAW.d));
