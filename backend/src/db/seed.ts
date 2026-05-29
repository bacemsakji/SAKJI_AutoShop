import { db, pool } from './index';
import { services, testimonials } from './schema';

const seedServices = [
  {
    name: 'Engine Diagnostics',
    slug: 'engine-diagnostics',
    category: 'Engine',
    shortDescription: 'State-of-the-art computer diagnostic scanning to retrieve error codes and pinpoint engine anomalies.',
    description: 'Our advanced engine diagnostic service utilizes professional-grade scanning equipment to communicate directly with your vehicle\'s engine control unit (ECU). We identify malfunction codes (check engine lights), analyze live sensor data, and perform manual pressure and vacuum tests to provide a highly accurate diagnostic report.',
    priceMin: 60,
    priceMax: 150,
    estimatedHours: 2,
    iconName: 'diagnostics',
    sortOrder: 1,
  },
  {
    name: 'Full Engine Overhaul',
    slug: 'engine-overhaul',
    category: 'Engine',
    shortDescription: 'Complete engine disassembly, inspection, cleaning, precision machining, and premium component rebuild.',
    description: 'A comprehensive, industrial-grade restoration of your vehicle\'s engine. We completely extract and disassemble the engine block, inspect every moving component for tolerance wear, clean and machine key components, and replace gaskets, pistons, rings, bearings, and timing components with OEM-spec parts.',
    priceMin: 800,
    priceMax: 2500,
    estimatedHours: 16,
    iconName: 'engine',
    sortOrder: 2,
  },
  {
    name: 'Oil & Filter Change',
    slug: 'oil-filter-change',
    category: 'Maintenance',
    shortDescription: 'Premium synthetic oil replacement and high-efficiency filtration installation to preserve engine health.',
    description: 'Ensure maximum engine longevity and efficiency. This routine service includes draining old oil, replacing the engine oil filter with an OEM-grade filter, refilling with up to 5 liters of premium synthetic oil matched exactly to your manufacturer\'s specifications, and a multi-point fluid level check.',
    priceMin: 35,
    priceMax: 70,
    estimatedHours: 1,
    iconName: 'oil',
    sortOrder: 3,
  },
  {
    name: 'Brake Pads & Disc Replacement',
    slug: 'brake-pads-disc-replacement',
    category: 'Brakes',
    shortDescription: 'Precision replacement of worn brake pads and rotors to guarantee critical stopping power and safety.',
    description: 'Restore your vehicle\'s primary safety system. We replace worn brake pads and rotors with premium friction materials, inspect the brake calipers and guide pins, flush old brake fluid, and perform dynamic road testing to verify absolute braking reliability and silent performance.',
    priceMin: 150,
    priceMax: 400,
    estimatedHours: 3,
    iconName: 'brakes',
    sortOrder: 4,
  },
  {
    name: 'Battery Testing & Replacement',
    slug: 'battery-testing-replacement',
    category: 'Electrical',
    shortDescription: 'Advanced cold-cranking amp testing, terminal corrosion cleaning, and heavy-duty battery installation.',
    description: 'Ensure reliable starts in any weather. We conduct deep-cycle load testing on your starting battery, starter motor, and alternator. If replacement is needed, we install a high-performance, maintenance-free battery backed by a comprehensive warranty, and clean all power terminals.',
    priceMin: 40,
    priceMax: 180,
    estimatedHours: 1,
    iconName: 'battery',
    sortOrder: 5,
  },
  {
    name: 'Electrical System Diagnosis',
    slug: 'electrical-system-diagnosis',
    category: 'Electrical',
    shortDescription: 'Intricate parasitic draw testing, wiring harness tracing, and control module troubleshooting.',
    description: 'Solve complex electrical issues including power window failure, sensor glitches, dashboard errors, and persistent battery drains. We utilize oscilloscopes and multi-meters to perform thorough circuit tracing, check grounding integrity, and diagnose faulty relays or control units.',
    priceMin: 70,
    priceMax: 200,
    estimatedHours: 3,
    iconName: 'electrical',
    sortOrder: 6,
  },
  {
    name: 'Tire Mounting & Balancing',
    slug: 'tire-mounting-balancing',
    category: 'Tires',
    shortDescription: 'Professional tire mounting, laser-guided computer balancing, and valve stem replacements.',
    description: 'Maintain smooth handling and prevent premature tread wear. We mount your tires using advanced, non-marring equipment, calibrate balance using electronic laser spinners, and replace traditional rubber valve stems. Complete tire rotation and pressure calibration are included.',
    priceMin: 25,
    priceMax: 60,
    estimatedHours: 1,
    iconName: 'tires',
    sortOrder: 7,
  },
  {
    name: 'Air Conditioning Service',
    slug: 'air-conditioning-service',
    category: 'AC',
    shortDescription: 'Refrigerant recovery, vacuum leak testing, and precise cabin temperature recharge.',
    description: 'Keep your cabin perfectly cool. We extract remaining A/C refrigerant, place the system under a deep vacuum to pull out moisture and test for line leaks, inject specialized UV dye for future detection, and recharge the system with precise levels of R134a or R1234yf refrigerant.',
    priceMin: 100,
    priceMax: 300,
    estimatedHours: 4,
    iconName: 'ac',
    sortOrder: 8,
  },
  {
    name: 'Suspension & Shock Absorbers',
    slug: 'suspension-shock-absorbers',
    category: 'Suspension',
    shortDescription: 'Replacing worn shock absorbers, struts, control arms, and bushings to restore ride control.',
    description: 'Regain original road compliance and safety. We inspect structural components for excessive play, replace worn out strut assemblies, shock absorbers, sway bar links, ball joints, and control arm bushings, followed by a complete alignment check to prevent tire scrub.',
    priceMin: 200,
    priceMax: 600,
    estimatedHours: 5,
    iconName: 'suspension',
    sortOrder: 9,
  },
  {
    name: 'Transmission Service',
    slug: 'transmission-service',
    category: 'Transmission',
    shortDescription: 'Fluid exchange, internal pan cleaning, gasket replacement, and torque converter evaluation.',
    description: 'Ensure smooth shifting and protect your transmission gears. We extract worn transmission fluid, drop and clean the transmission pan, replace the internal filter and pan gasket, check for metal wear particles, and perform a full synthetic fluid exchange.',
    priceMin: 300,
    priceMax: 1200,
    estimatedHours: 8,
    iconName: 'transmission',
    sortOrder: 10,
  },
  {
    name: 'Body & Paint Repair',
    slug: 'body-paint-repair',
    category: 'Body',
    shortDescription: 'Professional panel beating, scratch removal, dent repair, and computer color-matched painting.',
    description: 'Restore your vehicle\'s exterior finish to factory perfection. From small parking scrapes to major collision impact repair, our body specialists utilize professional frame pulling, hand metal finishing, high-fill priming, and multi-stage computer color-matched paint in a sealed oven.',
    priceMin: 200,
    priceMax: 2000,
    estimatedHours: 12,
    iconName: 'body',
    sortOrder: 11,
  },
  {
    name: 'Cooling System Service',
    slug: 'cooling-system-service',
    category: 'Engine',
    shortDescription: 'Radiator pressure test, thermostat verification, and full-volume coolant flush and fill.',
    description: 'Prevent catastrophic engine overheating. We flush out oxidized coolant, test the radiator cap and hoses under pressure, check the water pump and thermostat operation, and refill the system with fresh, long-life corrosion-inhibiting coolant matching vehicle specifications.',
    priceMin: 100,
    priceMax: 350,
    estimatedHours: 3,
    iconName: 'cooling',
    sortOrder: 12,
  },
];

const seedTestimonials = [
  {
    clientName: 'Yassine Ben Amor',
    carModel: 'Volkswagen Golf 7',
    rating: 5,
    comment: 'The team at SAKJI AutoShop diagnosed a complex DSG transmission shutter that two other shops couldn\'t figure out. Highly professional, extremely transparent about prices, and completed the work on schedule. Highly recommended!',
    isVisible: true,
  },
  {
    clientName: 'Amira Trabelsi',
    carModel: 'Kia Rio',
    rating: 5,
    comment: 'Exceptional service! I brought my Kia in for an A/C repair that had been blowing warm air. They did a vacuum leak test, replaced a small hose, and recharged the refrigerant. The cabin is ice-cold now, and the pricing was exactly as estimated.',
    isVisible: true,
  },
  {
    clientName: 'Mohamed Ali Gharbi',
    carModel: 'Peugeot 3008',
    rating: 4,
    comment: 'Had my front brake pads and discs replaced. Excellent workmanship and they used high-quality OEM parts. The brakes feel extremely solid and silent. They are very busy, so making an appointment in advance is definitely necessary!',
    isVisible: true,
  },
  {
    clientName: 'Mariem Louati',
    carModel: 'Ford Fiesta',
    rating: 5,
    comment: 'Clean workspace, knowledgeable technicians, and honest advice. They tested my car battery and starter, and instead of pushing an expensive alternator replacement, they showed me it was just a dirty ground cable connection. Fixed it for a fraction of the price.',
    isVisible: true,
  },
  {
    clientName: 'Khaled Rekik',
    carModel: 'BMW 520i',
    rating: 5,
    comment: 'Amazing attention to detail! I brought my BMW in for full suspension work (shocks and control arm bushings). The car drives like it\'s brand new off the showroom floor. Very precise alignment and excellent customer service.',
    isVisible: true,
  },
];

async function seed() {
  try {
    console.log('Seeding services and testimonials...');

    // Clear existing records
    // Note: Due to cascade / references, clear testimonials and appointments first
    await db.delete(testimonials);
    await db.delete(services);

    // Insert services
    await db.insert(services).values(seedServices);
    console.log(`Successfully seeded ${seedServices.length} services.`);

    // Insert testimonials
    await db.insert(testimonials).values(seedTestimonials);
    console.log(`Successfully seeded ${seedTestimonials.length} testimonials.`);

    console.log('Database seeding finished successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await pool.end();
  }
}

seed();
