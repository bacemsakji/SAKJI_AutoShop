import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/parts.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Update Part interface
content = content.replace(
  "export interface Part {",
  "export interface Part {\n  manufacturer: string;"
);

// Map categories to brands
const categoryBrands = {
  'Engine': ['Bosch', 'Dayco', 'SKF', 'OEM', 'Valeo'],
  'Brakes': ['Brembo', 'Bosch', 'TRW', 'OEM'],
  'Suspension': ['Monroe', 'KYB', 'Sachs', 'OEM'],
  'Electrical': ['Bosch', 'Valeo', 'NGK', 'OEM'],
  'Cooling': ['Valeo', 'Nissens', 'NRF', 'OEM'],
  'Transmission': ['LUK', 'Sachs', 'Valeo', 'OEM'],
  'Lubricants': ['Castrol', 'Motul', 'Total', 'Liqui Moly']
};

function getRandomBrand(category) {
  const brands = categoryBrands[category] || ['OEM', 'Bosch'];
  return brands[Math.floor(Math.random() * brands.length)];
}

// Regex to find all object lines in PARTS array
const objectRegex = /\{ id: 'PT-\d{3}'.*? \},?/g;

content = content.replace(objectRegex, (match) => {
  // Extract category
  const catMatch = match.match(/category:\s*'([^']+)'/);
  const category = catMatch ? catMatch[1] : 'Engine';
  const brand = getRandomBrand(category);
  
  // Insert manufacturer after id
  return match.replace(
    /(id:\s*'PT-\d{3}',)\s*/,
    `$1 manufacturer: '${brand}', `
  );
});

// Add PART_MANUFACTURERS export
if (!content.includes('export const PART_MANUFACTURERS')) {
  content = content.replace(
    /export const PART_CATEGORIES = .*;/,
    "export const PART_CATEGORIES = ['All', ...Array.from(new Set(PARTS.map(p => p.category)))];\nexport const PART_MANUFACTURERS = ['All', ...Array.from(new Set(PARTS.map(p => p.manufacturer)))];"
  );
}

// Update getParts function
if (!content.includes('manufacturer?: string')) {
  content = content.replace(
    /export function getParts\(filters\?: \{ brand\?: string; model\?: string; category\?: string; search\?: string \}\): Part\[\] \{/,
    "export function getParts(filters?: { brand?: string; model?: string; category?: string; manufacturer?: string; search?: string }): Part[] {"
  );
  
  content = content.replace(
    /if \(filters\?.category && filters.category !== 'All'\) \{[\s\S]*?result = result.filter\(p => p.category === filters.category\);[\s\S]*?\}/,
    "if (filters?.category && filters.category !== 'All') {\n    result = result.filter(p => p.category === filters.category);\n  }\n  if (filters?.manufacturer && filters.manufacturer !== 'All') {\n    result = result.filter(p => p.manufacturer === filters.manufacturer);\n  }"
  );
}

fs.writeFileSync(filePath, content);
console.log('parts.ts updated successfully.');
