export interface Part {
  manufacturer: string;
  id: string;
  brand: string;
  model: string;
  yearRange: string;
  category: string;
  name: string;
  oemNumber: string;
  condition: 'New' | 'New';
  price: number;
  stock: number;
}

export const PARTS: Part[] = [
  { id: 'PT-001', manufacturer: 'Dayco', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Engine',       name: 'Timing Belt Kit',              oemNumber: '0831077',    condition: 'New',          price: 95,  stock: 12 },
  { id: 'PT-002', manufacturer: 'SKF', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Engine',       name: 'Oil Filter',                   oemNumber: '0650206',    condition: 'New',          price: 18,  stock: 45 },
  { id: 'PT-003', manufacturer: 'SKF', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Engine',       name: 'Air Filter',                   oemNumber: '1654729',    condition: 'New',          price: 22,  stock: 30 },
  { id: 'PT-004', manufacturer: 'Dayco', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Engine',       name: 'Spark Plug Set (x4)',          oemNumber: '1214067',    condition: 'New',          price: 45,  stock: 20 },
  { id: 'PT-005', manufacturer: 'SKF', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Engine',       name: 'Water Pump',                   oemNumber: '1334071',    condition: 'New',          price: 130, stock: 7  },
  { id: 'PT-006', manufacturer: 'Valeo', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Engine',       name: 'Head Gasket Set',              oemNumber: '0650328',    condition: 'New',          price: 210, stock: 5  },
  { id: 'PT-007', manufacturer: 'Valeo', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Engine',       name: 'Crankshaft Pulley',            oemNumber: '9192553',    condition: 'New',          price: 85,  stock: 8  },
  { id: 'PT-008', manufacturer: 'Brembo', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Brakes',       name: 'Front Brake Disc (each)',      oemNumber: '9004680',    condition: 'New',          price: 110, stock: 10 },
  { id: 'PT-009', manufacturer: 'Monroe', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Suspension',   name: 'Front Shock Absorber',         oemNumber: '343459',     condition: 'New',          price: 180, stock: 6  },
  { id: 'PT-010', manufacturer: 'KYB', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Suspension',   name: 'Tie Rod End (each)',           oemNumber: '352581',     condition: 'New',          price: 65,  stock: 10 },
  { id: 'PT-011', manufacturer: 'Valeo', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Electrical',   name: 'Alternator',                   oemNumber: '1204073',    condition: 'New', price: 220, stock: 4  },
  { id: 'PT-012', manufacturer: 'Bosch', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Electrical',   name: 'Starter Motor',                oemNumber: '1202109',    condition: 'New', price: 195, stock: 4  },
  { id: 'PT-013', manufacturer: 'Bosch', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Electrical',   name: 'Battery 60Ah',                 oemNumber: 'GM-60AH',    condition: 'New',          price: 270, stock: 8  },
  { id: 'PT-014', manufacturer: 'NRF', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Cooling',      name: 'Radiator',                     oemNumber: '1300272',    condition: 'New',          price: 310, stock: 3  },
  { id: 'PT-015', manufacturer: 'Nissens', brand: 'Opel', model: 'Astra G', yearRange: '1998–2004', category: 'Cooling',      name: 'Thermostat',                   oemNumber: '1338520',    condition: 'New',          price: 38,  stock: 20 },
  { id: 'PT-016', manufacturer: 'SKF', brand: 'Opel', model: 'Astra H', yearRange: '2004–2010', category: 'Engine',       name: 'Timing Belt Kit',              oemNumber: '93185388',   condition: 'New',          price: 110, stock: 10 },
  { id: 'PT-017', manufacturer: 'Dayco', brand: 'Opel', model: 'Astra H', yearRange: '2004–2010', category: 'Engine',       name: 'Oil Filter',                   oemNumber: '650849',     condition: 'New',          price: 20,  stock: 40 },
  { id: 'PT-018', manufacturer: 'Dayco', brand: 'Opel', model: 'Astra H', yearRange: '2004–2010', category: 'Engine',       name: 'Air Filter',                   oemNumber: '13271187',   condition: 'New',          price: 28,  stock: 25 },
  { id: 'PT-019', manufacturer: 'Dayco', brand: 'Opel', model: 'Astra H', yearRange: '2004–2010', category: 'Engine',       name: 'Spark Plug Set (x4)',          oemNumber: '55556799',   condition: 'New',          price: 55,  stock: 15 },
  { id: 'PT-020', manufacturer: 'TRW', brand: 'Opel', model: 'Astra H', yearRange: '2004–2010', category: 'Brakes',       name: 'Front Brake Pad Set',          oemNumber: '93179094',   condition: 'New',          price: 90,  stock: 12 },
  { id: 'PT-021', manufacturer: 'TRW', brand: 'Opel', model: 'Astra H', yearRange: '2004–2010', category: 'Brakes',       name: 'Front Brake Disc (each)',      oemNumber: '93179095',   condition: 'New',          price: 115, stock: 8  },
  { id: 'PT-022', manufacturer: 'OEM', brand: 'Opel', model: 'Astra H', yearRange: '2004–2010', category: 'Suspension',   name: 'Front Shock Absorber',         oemNumber: '1304826',    condition: 'New',          price: 190, stock: 5  },
  { id: 'PT-023', manufacturer: 'Sachs', brand: 'Opel', model: 'Astra H', yearRange: '2004–2010', category: 'Suspension',   name: 'Front Lower Control Arm',      oemNumber: '13241625',   condition: 'New',          price: 145, stock: 6  },
  { id: 'PT-024', manufacturer: 'Bosch', brand: 'Opel', model: 'Astra H', yearRange: '2004–2010', category: 'Electrical',   name: 'Alternator',                   oemNumber: '13502583',   condition: 'New', price: 240, stock: 3  },
  { id: 'PT-025', manufacturer: 'NRF', brand: 'Opel', model: 'Astra H', yearRange: '2004–2010', category: 'Cooling',      name: 'Radiator',                     oemNumber: '13129994',   condition: 'New',          price: 340, stock: 3  },
  { id: 'PT-026', manufacturer: 'Bosch', brand: 'Opel', model: 'Vectra B', yearRange: '1995–2002', category: 'Engine',      name: 'Timing Belt Kit',              oemNumber: '0831060',    condition: 'New',          price: 90,  stock: 8  },
  { id: 'PT-027', manufacturer: 'Dayco', brand: 'Opel', model: 'Vectra B', yearRange: '1995–2002', category: 'Engine',      name: 'Oil Filter',                   oemNumber: '0650206',    condition: 'New',          price: 18,  stock: 35 },
  { id: 'PT-028', manufacturer: 'Bosch', brand: 'Opel', model: 'Vectra B', yearRange: '1995–2002', category: 'Engine',      name: 'Clutch Kit',                   oemNumber: '93178842',   condition: 'New',          price: 420, stock: 4  },
  { id: 'PT-029', manufacturer: 'TRW', brand: 'Opel', model: 'Vectra B', yearRange: '1995–2002', category: 'Brakes',      name: 'Front Brake Disc (each)',      oemNumber: '9003437',    condition: 'New',          price: 105, stock: 8  },
  { id: 'PT-030', manufacturer: 'Sachs', brand: 'Opel', model: 'Vectra B', yearRange: '1995–2002', category: 'Suspension',  name: 'Front Shock Absorber',         oemNumber: '343273',     condition: 'New',          price: 175, stock: 5  },
  { id: 'PT-031', manufacturer: 'Bosch', brand: 'Opel', model: 'Vectra B', yearRange: '1995–2002', category: 'Electrical',  name: 'Ignition Coil',                oemNumber: '1208301',    condition: 'New',          price: 95,  stock: 9  },
  { id: 'PT-032', manufacturer: 'Nissens', brand: 'Opel', model: 'Vectra B', yearRange: '1995–2002', category: 'Cooling',     name: 'Thermostat',                   oemNumber: '1338518',    condition: 'New',          price: 35,  stock: 15 },
  { id: 'PT-033', manufacturer: 'LUK', brand: 'Opel', model: 'Vectra B', yearRange: '1995–2002', category: 'Transmission', name: 'Gearbox Mount',               oemNumber: '9116929',    condition: 'New',          price: 60,  stock: 7  },
  { id: 'PT-034', manufacturer: 'NGK', brand: 'Opel', model: 'Vectra B', yearRange: '1995–2002', category: 'Electrical',  name: 'Lambda / O2 Sensor',          oemNumber: '0855389',    condition: 'New',          price: 110, stock: 6  },
  { id: 'PT-035', manufacturer: 'SKF', brand: 'Opel', model: 'Vectra B', yearRange: '1995–2002', category: 'Engine',      name: 'Camshaft Position Sensor',    oemNumber: '1238340',    condition: 'New',          price: 75,  stock: 5  },
  { id: 'PT-036', manufacturer: 'OEM', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Engine',       name: 'Timing Chain Kit',             oemNumber: '93189937',   condition: 'New',          price: 135, stock: 10 },
  { id: 'PT-037', manufacturer: 'Dayco', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Engine',       name: 'Oil Filter',                   oemNumber: '93186207',   condition: 'New',          price: 16,  stock: 50 },
  { id: 'PT-038', manufacturer: 'SKF', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Engine',       name: 'Air Filter',                   oemNumber: '1654742',    condition: 'New',          price: 22,  stock: 30 },
  { id: 'PT-039', manufacturer: 'Brembo', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Brakes',       name: 'Front Brake Pad Set',          oemNumber: '93179075',   condition: 'New',          price: 80,  stock: 15 },
  { id: 'PT-040', manufacturer: 'OEM', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Brakes',       name: 'Front Brake Disc (each)',      oemNumber: '93181974',   condition: 'New',          price: 95,  stock: 12 },
  { id: 'PT-041', manufacturer: 'OEM', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Suspension',   name: 'Front Shock Absorber',         oemNumber: '344423',     condition: 'New',          price: 160, stock: 6  },
  { id: 'PT-042', manufacturer: 'Monroe', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Suspension',   name: 'Rear Shock Absorber',          oemNumber: '344424',     condition: 'New',          price: 145, stock: 6  },
  { id: 'PT-043', manufacturer: 'Valeo', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Electrical',   name: 'Alternator',                   oemNumber: '09132228',   condition: 'New', price: 200, stock: 4  },
  { id: 'PT-044', manufacturer: 'NGK', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Electrical',   name: 'Starter Motor',                oemNumber: '09132229',   condition: 'New', price: 175, stock: 4  },
  { id: 'PT-045', manufacturer: 'Valeo', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Cooling',      name: 'Radiator',                     oemNumber: '1300488',    condition: 'New',          price: 290, stock: 3  },
  { id: 'PT-046', manufacturer: 'Sachs', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Transmission', name: 'Clutch Kit',                   oemNumber: '93189801',   condition: 'New',          price: 380, stock: 4  },
  { id: 'PT-047', manufacturer: 'Dayco', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Engine',       name: 'Valve Cover Gasket',           oemNumber: '55563274',   condition: 'New',          price: 35,  stock: 18 },
  { id: 'PT-048', manufacturer: 'KYB', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Suspension',   name: 'Stabilizer Bar Link',          oemNumber: '344388',     condition: 'New',          price: 55,  stock: 12 },
  { id: 'PT-049', manufacturer: 'NGK', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Electrical',   name: 'Battery 44Ah',                 oemNumber: 'GM-44AH',    condition: 'New',          price: 230, stock: 8  },
  { id: 'PT-050', manufacturer: 'TRW', brand: 'Opel', model: 'Corsa C', yearRange: '2000–2006', category: 'Brakes',       name: 'Rear Brake Drum (each)',       oemNumber: '90496657',   condition: 'New',          price: 85,  stock: 10 },
  { id: 'PT-051', manufacturer: 'OEM', brand: 'Ford', model: 'Focus Mk1', yearRange: '1998–2004', category: 'Engine',     name: 'Timing Belt Kit',              oemNumber: '1075085',    condition: 'New',          price: 95,  stock: 10 },
  { id: 'PT-052', manufacturer: 'SKF', brand: 'Ford', model: 'Focus Mk1', yearRange: '1998–2004', category: 'Engine',     name: 'Oil Filter',                   oemNumber: '1117335',    condition: 'New',          price: 18,  stock: 40 },
  { id: 'PT-053', manufacturer: 'Dayco', brand: 'Ford', model: 'Focus Mk1', yearRange: '1998–2004', category: 'Engine',     name: 'Air Filter',                   oemNumber: '1119960',    condition: 'New',          price: 24,  stock: 25 },
  { id: 'PT-054', manufacturer: 'Dayco', brand: 'Ford', model: 'Focus Mk1', yearRange: '1998–2004', category: 'Engine',     name: 'Spark Plug Set (x4)',          oemNumber: '1079874',    condition: 'New',          price: 50,  stock: 18 },
  { id: 'PT-055', manufacturer: 'TRW', brand: 'Ford', model: 'Focus Mk1', yearRange: '1998–2004', category: 'Brakes',     name: 'Front Brake Pad Set',          oemNumber: '1110615',    condition: 'New',          price: 85,  stock: 12 },
  { id: 'PT-056', manufacturer: 'Bosch', brand: 'Ford', model: 'Focus Mk1', yearRange: '1998–2004', category: 'Brakes',     name: 'Front Brake Disc (each)',      oemNumber: '1110616',    condition: 'New',          price: 105, stock: 10 },
  { id: 'PT-057', manufacturer: 'Sachs', brand: 'Ford', model: 'Focus Mk1', yearRange: '1998–2004', category: 'Suspension', name: 'Front Shock Absorber',         oemNumber: '1096555',    condition: 'New',          price: 175, stock: 6  },
  { id: 'PT-058', manufacturer: 'Sachs', brand: 'Ford', model: 'Focus Mk1', yearRange: '1998–2004', category: 'Suspension', name: 'Rear Shock Absorber',          oemNumber: '1096556',    condition: 'New',          price: 160, stock: 6  },
  { id: 'PT-059', manufacturer: 'Bosch', brand: 'Ford', model: 'Focus Mk1', yearRange: '1998–2004', category: 'Electrical', name: 'Alternator',                   oemNumber: '1077997',    condition: 'New', price: 215, stock: 4  },
  { id: 'PT-060', manufacturer: 'OEM', brand: 'Ford', model: 'Focus Mk1', yearRange: '1998–2004', category: 'Electrical', name: 'Battery 60Ah',                 oemNumber: 'FD-60AH',    condition: 'New',          price: 265, stock: 8  },
  { id: 'PT-061', manufacturer: 'OEM', brand: 'Ford', model: 'Focus Mk1', yearRange: '1998–2004', category: 'Cooling',    name: 'Radiator',                     oemNumber: '1099616',    condition: 'New',          price: 295, stock: 3  },
  { id: 'PT-062', manufacturer: 'OEM', brand: 'Ford', model: 'Focus Mk1', yearRange: '1998–2004', category: 'Cooling',    name: 'Thermostat',                   oemNumber: '1063672',    condition: 'New',          price: 32,  stock: 20 },
  { id: 'PT-063', manufacturer: 'Valeo', brand: 'Ford', model: 'Focus Mk2', yearRange: '2004–2011', category: 'Engine',     name: 'Timing Belt Kit',              oemNumber: '1364699',    condition: 'New',          price: 105, stock: 10 },
  { id: 'PT-064', manufacturer: 'Valeo', brand: 'Ford', model: 'Focus Mk2', yearRange: '2004–2011', category: 'Engine',     name: 'Oil Filter',                   oemNumber: '1714762',    condition: 'New',          price: 20,  stock: 40 },
  { id: 'PT-065', manufacturer: 'SKF', brand: 'Ford', model: 'Focus Mk2', yearRange: '2004–2011', category: 'Engine',     name: 'Air Filter',                   oemNumber: '1360990',    condition: 'New',          price: 26,  stock: 25 },
  { id: 'PT-066', manufacturer: 'Valeo', brand: 'Ford', model: 'Focus Mk2', yearRange: '2004–2011', category: 'Engine',     name: 'Spark Plug Set (x4)',          oemNumber: '1679418',    condition: 'New',          price: 55,  stock: 15 },
  { id: 'PT-067', manufacturer: 'Brembo', brand: 'Ford', model: 'Focus Mk2', yearRange: '2004–2011', category: 'Brakes',     name: 'Front Brake Pad Set',          oemNumber: '1374018',    condition: 'New',          price: 92,  stock: 12 },
  { id: 'PT-068', manufacturer: 'TRW', brand: 'Ford', model: 'Focus Mk2', yearRange: '2004–2011', category: 'Brakes',     name: 'Front Brake Disc (each)',      oemNumber: '1374019',    condition: 'New',          price: 118, stock: 9  },
  { id: 'PT-069', manufacturer: 'KYB', brand: 'Ford', model: 'Focus Mk2', yearRange: '2004–2011', category: 'Suspension', name: 'Front Shock Absorber',         oemNumber: '1378698',    condition: 'New',          price: 185, stock: 5  },
  { id: 'PT-070', manufacturer: 'Sachs', brand: 'Ford', model: 'Focus Mk2', yearRange: '2004–2011', category: 'Suspension', name: 'Front Lower Control Arm',      oemNumber: '1362649',    condition: 'New',          price: 155, stock: 6  },
  { id: 'PT-071', manufacturer: 'NGK', brand: 'Ford', model: 'Focus Mk2', yearRange: '2004–2011', category: 'Electrical', name: 'Alternator',                   oemNumber: '1386191',    condition: 'New', price: 235, stock: 3  },
  { id: 'PT-072', manufacturer: 'Valeo', brand: 'Ford', model: 'Focus Mk2', yearRange: '2004–2011', category: 'Electrical', name: 'Ignition Coil Pack',           oemNumber: '1208791',    condition: 'New',          price: 130, stock: 8  },
  { id: 'PT-073', manufacturer: 'NRF', brand: 'Ford', model: 'Focus Mk2', yearRange: '2004–2011', category: 'Cooling',    name: 'Radiator',                     oemNumber: '1359333',    condition: 'New',          price: 315, stock: 3  },
  { id: 'PT-074', manufacturer: 'Sachs', brand: 'Ford', model: 'Focus Mk2', yearRange: '2004–2011', category: 'Transmission', name: 'Clutch Kit',                 oemNumber: '1414466',    condition: 'New',          price: 390, stock: 4  },
  { id: 'PT-075', manufacturer: 'Sachs', brand: 'Ford', model: 'Focus Mk2', yearRange: '2004–2011', category: 'Suspension', name: 'Rear Shock Absorber',          oemNumber: '1378699',    condition: 'New',          price: 165, stock: 6  },
  { id: 'PT-076', manufacturer: 'Valeo', brand: 'Ford', model: 'Fiesta Mk5', yearRange: '2001–2008', category: 'Engine',    name: 'Timing Belt Kit',              oemNumber: '1494285',    condition: 'New',          price: 88,  stock: 12 },
  { id: 'PT-077', manufacturer: 'OEM', brand: 'Ford', model: 'Fiesta Mk5', yearRange: '2001–2008', category: 'Engine',    name: 'Oil Filter',                   oemNumber: '1677119',    condition: 'New',          price: 16,  stock: 45 },
  { id: 'PT-078', manufacturer: 'Valeo', brand: 'Ford', model: 'Fiesta Mk5', yearRange: '2001–2008', category: 'Engine',    name: 'Air Filter',                   oemNumber: '1504995',    condition: 'New',          price: 22,  stock: 28 },
  { id: 'PT-079', manufacturer: 'Brembo', brand: 'Ford', model: 'Fiesta Mk5', yearRange: '2001–2008', category: 'Brakes',    name: 'Front Brake Pad Set',          oemNumber: '1425259',    condition: 'New',          price: 78,  stock: 15 },
  { id: 'PT-080', manufacturer: 'TRW', brand: 'Ford', model: 'Fiesta Mk5', yearRange: '2001–2008', category: 'Brakes',    name: 'Front Brake Disc (each)',      oemNumber: '1425260',    condition: 'New',          price: 90,  stock: 12 },
  { id: 'PT-081', manufacturer: 'Monroe', brand: 'Ford', model: 'Fiesta Mk5', yearRange: '2001–2008', category: 'Suspension', name: 'Front Shock Absorber',        oemNumber: '1493208',    condition: 'New',          price: 155, stock: 7  },
  { id: 'PT-082', manufacturer: 'Valeo', brand: 'Ford', model: 'Fiesta Mk5', yearRange: '2001–2008', category: 'Electrical', name: 'Alternator',                  oemNumber: '1440768',    condition: 'New', price: 195, stock: 4  },
  { id: 'PT-083', manufacturer: 'NGK', brand: 'Ford', model: 'Fiesta Mk5', yearRange: '2001–2008', category: 'Electrical', name: 'Battery 44Ah',                oemNumber: 'FD-44AH',    condition: 'New',          price: 225, stock: 10 },
  { id: 'PT-084', manufacturer: 'Nissens', brand: 'Ford', model: 'Fiesta Mk5', yearRange: '2001–2008', category: 'Cooling',   name: 'Thermostat',                   oemNumber: '1357121',    condition: 'New',          price: 30,  stock: 20 },
  { id: 'PT-085', manufacturer: 'OEM', brand: 'Ford', model: 'Fiesta Mk5', yearRange: '2001–2008', category: 'Cooling',   name: 'Radiator',                     oemNumber: '1363564',    condition: 'New',          price: 275, stock: 3  },
  { id: 'PT-086', manufacturer: 'Valeo', brand: 'Ford', model: 'Fiesta Mk5', yearRange: '2001–2008', category: 'Transmission', name: 'Clutch Kit',                oemNumber: '1365351',    condition: 'New',          price: 355, stock: 4  },
  { id: 'PT-087', manufacturer: 'OEM', brand: 'Ford', model: 'Mondeo Mk3', yearRange: '2000–2007', category: 'Engine',    name: 'Timing Chain Kit',             oemNumber: '1S7G6A257AA', condition: 'New',          price: 190, stock: 6  },
  { id: 'PT-088', manufacturer: 'Bosch', brand: 'Ford', model: 'Mondeo Mk3', yearRange: '2000–2007', category: 'Engine',    name: 'Oil Filter',                   oemNumber: '1S7G6714AA', condition: 'New',          price: 20,  stock: 35 },
  { id: 'PT-089', manufacturer: 'OEM', brand: 'Ford', model: 'Mondeo Mk3', yearRange: '2000–2007', category: 'Engine',    name: 'Clutch Kit',                   oemNumber: '1098506',    condition: 'New',          price: 520, stock: 3  },
  { id: 'PT-090', manufacturer: 'OEM', brand: 'Ford', model: 'Mondeo Mk3', yearRange: '2000–2007', category: 'Brakes',    name: 'Front Brake Disc (each)',      oemNumber: '1111851',    condition: 'New',          price: 125, stock: 8  },
  { id: 'PT-091', manufacturer: 'OEM', brand: 'Ford', model: 'Mondeo Mk3', yearRange: '2000–2007', category: 'Brakes',    name: 'Front Brake Pad Set',          oemNumber: '1111852',    condition: 'New',          price: 95,  stock: 10 },
  { id: 'PT-092', manufacturer: 'OEM', brand: 'Ford', model: 'Mondeo Mk3', yearRange: '2000–2007', category: 'Suspension', name: 'Front Shock Absorber',        oemNumber: '1131171',    condition: 'New',          price: 210, stock: 4  },
  { id: 'PT-093', manufacturer: 'OEM', brand: 'Ford', model: 'Mondeo Mk3', yearRange: '2000–2007', category: 'Electrical', name: 'Alternator',                  oemNumber: '1S7T10300AA', condition: 'New', price: 255, stock: 3 },
  { id: 'PT-094', manufacturer: 'Valeo', brand: 'Ford', model: 'Mondeo Mk3', yearRange: '2000–2007', category: 'Electrical', name: 'Battery 68Ah',                oemNumber: 'FD-68AH',    condition: 'New',          price: 310, stock: 7  },
  { id: 'PT-095', manufacturer: 'Nissens', brand: 'Ford', model: 'Mondeo Mk3', yearRange: '2000–2007', category: 'Cooling',   name: 'Radiator',                     oemNumber: '1126706',    condition: 'New',          price: 360, stock: 2  },
  { id: 'PT-096', manufacturer: 'Nissens', brand: 'Ford', model: 'Mondeo Mk3', yearRange: '2000–2007', category: 'Cooling',   name: 'Water Pump',                   oemNumber: '1S7G8591AA', condition: 'New',          price: 145, stock: 5  },
  { id: 'PT-097', manufacturer: 'Sachs', brand: 'Ford', model: 'Mondeo Mk3', yearRange: '2000–2007', category: 'Suspension', name: 'Rear Shock Absorber',         oemNumber: '1131172',    condition: 'New',          price: 195, stock: 5  },
  { id: 'PT-098', manufacturer: 'Castrol', brand: 'Universal', model: 'All Models', yearRange: 'Universal', category: 'Lubricants', name: 'Engine Oil 5W-30 (4L)',  oemNumber: 'OIL-5W30-4L', condition: 'New',         price: 38,  stock: 60 },
  { id: 'PT-099', manufacturer: 'Total', brand: 'Universal', model: 'All Models', yearRange: 'Universal', category: 'Lubricants', name: 'Brake Fluid DOT4 (500ml)', oemNumber: 'BRK-DOT4',  condition: 'New',         price: 16,  stock: 50 },
  { id: 'PT-100', manufacturer: 'Motul', brand: 'Universal', model: 'All Models', yearRange: 'Universal', category: 'Lubricants', name: 'Coolant G12 (1.5L)',     oemNumber: 'COOL-G12',   condition: 'New',          price: 25,  stock: 40 },
];

export const PART_BRANDS = ['All', 'Opel', 'Ford', 'Universal'];

export const OPEL_MODELS  = ['All Models', 'Astra G', 'Astra H', 'Vectra B', 'Corsa C'];
export const FORD_MODELS  = ['All Models', 'Focus Mk1', 'Focus Mk2', 'Fiesta Mk5', 'Mondeo Mk3'];

export const PART_CATEGORIES = ['All', ...Array.from(new Set(PARTS.map(p => p.category)))];
export const PART_MANUFACTURERS = ['All', ...Array.from(new Set(PARTS.map(p => p.manufacturer)))];

export function getParts(filters?: { brand?: string; model?: string; category?: string; manufacturer?: string; search?: string }): Part[] {
  let result = PARTS;
  if (filters?.brand && filters.brand !== 'All') {
    result = result.filter(p => p.brand === filters.brand);
  }
  if (filters?.model && filters.model !== 'All Models') {
    result = result.filter(p => p.model === filters.model);
  }
  if (filters?.category && filters.category !== 'All') {
    result = result.filter(p => p.category === filters.category);
  }
  if (filters?.manufacturer && filters.manufacturer !== 'All') {
    result = result.filter(p => p.manufacturer === filters.manufacturer);
  }
  if (filters?.search) {
    const q = filters.search.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.oemNumber.toLowerCase().includes(q) ||
      p.model.toLowerCase().includes(q)
    );
  }
  return result;
}
