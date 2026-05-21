import type { Product } from "@/types/products";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "commercial-gas-burner",
    category: "Commercial Burners",
    name: "Commercial Gas Burner",
    description:
      "High-BTU heavy-duty gas burner designed for restaurants, hotels, and industrial kitchens. Available in 2, 4, and 6-burner configurations with cast-iron grates.",
    material: "SS 304 Stainless Steel + Cast Iron Grates",
    image:
      "/assets/commercial_burners-019e4c08-b6e6-7624-b43c-373f73b4f64e.jpg",
    features: [
      "Cast iron heavy-duty burner heads rated up to 30,000 BTU",
      "SS 304 stainless steel body and drip tray",
      "Pilot flame ignition for each burner",
      "Available in table-top and floor-standing models",
      "Easy-clean removable burner grates",
      "Compatible with LPG and PNG gas supply",
    ],
    specs: {
      material: "SS 304 Stainless Steel, Cast Iron Grates",
      dimensions: "600 mm × 700 mm × 850 mm (customizable)",
      capacity: "2 / 4 / 6 burner configurations",
      powerRequirement: "LPG / PNG — 0.5 to 1.5 kg/hr per burner",
      usageType: "Hotels, Restaurants, Catering, Cloud Kitchens",
      finish: "Mirror / Hairline SS Finish",
      warranty: "1 Year Manufacturing Warranty",
      customization: "Available — size, burner count, gas inlet position",
    },
    relatedSlugs: [
      "stainless-steel-work-table",
      "exhaust-hood-system",
      "french-fry-station",
    ],
  },
  {
    id: 2,
    slug: "stainless-steel-work-table",
    category: "Stainless Steel Tables",
    name: "Industrial Work Table",
    description:
      "NSF-grade stainless steel prep work table built for professional kitchen environments. Fully customizable size with optional undershelf, backsplash, and drawers.",
    material: "SS 304 Grade Stainless Steel",
    image: "/assets/ss_tables-019e4c08-b6d9-716f-bf3e-62ae7d35c552.jpg",
    features: [
      "SS 304 food-grade stainless steel top and frame",
      "Adjustable height legs with non-slip feet",
      "Optional undershelf for additional storage",
      "Reinforced corners for long-term durability",
      "Smooth edge banding — safe for kitchen staff",
      "Custom sizes available from 600 mm to 3600 mm",
    ],
    specs: {
      material: "SS 304 Stainless Steel (16 gauge top)",
      dimensions: "600–3600 mm L × 600–900 mm W × 850–900 mm H",
      capacity: "Load bearing up to 300 kg",
      powerRequirement: "Not applicable",
      usageType: "Food Prep, Pastry, Butchery, General Kitchen Work",
      finish: "No. 4 Hairline Finish",
      warranty: "2 Year Manufacturing Warranty",
      customization: "Available — size, legs, undershelf, backsplash, drawers",
    },
    relatedSlugs: [
      "commercial-gas-burner",
      "three-compartment-sink",
      "heavy-duty-storage-rack",
    ],
  },
  {
    id: 3,
    slug: "exhaust-hood-system",
    category: "Exhaust Hoods",
    name: "Exhaust Hood System",
    description:
      "Commercial-grade exhaust ventilation hood for efficient removal of smoke, grease-laden vapors, and odors from commercial kitchens. Custom fabricated to fit any kitchen layout.",
    material: "SS 304 Stainless Steel",
    image: "/assets/exhaust_hood-019e4c08-b900-71d5-9277-4cc5e7dfa5d2.jpg",
    features: [
      "Baffle-type grease filters for easy cleaning",
      "Integrated grease collection channel and drain",
      "Compatible with centrifugal and axial exhaust fans",
      "LED lighting strip for workspace illumination",
      "Available with or without make-up air plenum",
      "Custom sizes to cover any cooking equipment layout",
    ],
    specs: {
      material: "SS 304 Stainless Steel (18 gauge)",
      dimensions: "Custom — standard from 900 mm to 3600 mm width",
      capacity: "Airflow 500–3000 CFM based on kitchen load",
      powerRequirement: "Fan motor 0.5–2.2 kW (fan not included in base price)",
      usageType: "Hotels, Restaurants, Cloud Kitchens, Industrial Canteens",
      finish: "Mirror / Hairline SS Finish",
      warranty: "1 Year Manufacturing Warranty",
      customization: "Available — size, depth, duct position, lighting",
    },
    relatedSlugs: [
      "commercial-gas-burner",
      "stainless-steel-work-table",
      "custom-kitchen-counter",
    ],
  },
  {
    id: 4,
    slug: "commercial-refrigerator",
    category: "Refrigeration",
    name: "Commercial Refrigerator",
    description:
      "Energy-efficient commercial upright refrigerator with precise digital temperature control. Designed for hotels, restaurants, and food processing units requiring reliable cold storage.",
    material: "SS 304 Exterior / Interior, PUF Insulation",
    image:
      "/assets/commercial_refrigirator-019e4c08-b8f9-761a-b6dc-8a126f05f477.jpg",
    features: [
      "Digital thermostat with ±0.5 °C precision",
      "PUF-insulated door and body for energy efficiency",
      "Auto-defrost with drain tray",
      "Stainless steel interior shelves (adjustable)",
      "Anti-bacterial gasket on door seal",
      "CFC-free R290 refrigerant",
    ],
    specs: {
      material: "SS 304 Exterior & Interior, PUF Insulation",
      dimensions: "700 mm W × 800 mm D × 1900 mm H",
      capacity: "550 Litres (customizable)",
      powerRequirement: "220–240V / 50 Hz / 1-phase — 0.45 kW",
      usageType: "Hotels, Restaurants, Hospitals, Food Courts",
      finish: "Brushed SS Exterior Finish",
      warranty: "1 Year Comprehensive + 3 Year Compressor",
      customization: "Available — capacity, shelving, door type",
    },
    relatedSlugs: [
      "stainless-steel-work-table",
      "three-compartment-sink",
      "heavy-duty-storage-rack",
    ],
  },
  {
    id: 5,
    slug: "deck-oven",
    category: "Bakery Equipment",
    name: "Deck Oven",
    description:
      "Professional electric deck oven with independent top and bottom heat control. Ideal for artisan bakeries, patisseries, and hotel pastry departments.",
    material: "SS 304 Exterior, Refractory Stone Deck",
    image: "/assets/deck_oven-019e4c08-b6c0-7101-9a2d-c864c027518a.jpg",
    features: [
      "Independent top and bottom heating elements per deck",
      "Refractory baking stone for even heat distribution",
      "Digital timer with buzzer alert",
      "Steam injection system (optional)",
      "Double-glazed viewing window with internal light",
      "Available in 1, 2, and 3-deck configurations",
    ],
    specs: {
      material: "SS 304 Exterior, Refractory Baking Stone",
      dimensions: "1050 mm W × 800 mm D × 450 mm H per deck",
      capacity: "2 trays of 600×400 mm per deck",
      powerRequirement: "220–240V / 50 Hz / 3-phase — 6 kW per deck",
      usageType: "Bakeries, Hotels, Restaurants, Catering",
      finish: "Powder-coated Steel / SS Trim",
      warranty: "1 Year Manufacturing Warranty",
      customization: "Available — deck count, steam system, tray size",
    },
    relatedSlugs: [
      "commercial-gas-burner",
      "heavy-duty-storage-rack",
      "stainless-steel-work-table",
    ],
  },
  {
    id: 6,
    slug: "french-fry-station",
    category: "Fast Food Equipment",
    name: "French Fry Station",
    description:
      "High-capacity electric deep fryer with dual basket configuration. Designed for QSR, food courts, and fast food chains requiring consistent high-volume frying.",
    material: "SS 304 Stainless Steel, Nichrome Heating Element",
    image:
      "/assets/fast_food_equipment-019e4c08-b6e0-72fd-90e9-1dd48f078ad1.jpg",
    features: [
      "Dual basket design for simultaneous cooking",
      "Thermostat range 50–200 °C with safety cut-off",
      "Large oil tank with easy-drain ball valve",
      "Removable cold zone for long oil life",
      "Stainless steel oil filter basket",
      "Digital temperature display",
    ],
    specs: {
      material: "SS 304 Stainless Steel, Nichrome Heating Element",
      dimensions: "500 mm W × 600 mm D × 900 mm H",
      capacity: "16 Litres oil tank (dual 8L)",
      powerRequirement: "220–240V / 50 Hz / 1-phase — 6 kW",
      usageType: "QSR, Food Courts, Canteens, Fast Food Chains",
      finish: "Mirror SS Finish",
      warranty: "1 Year Manufacturing Warranty",
      customization: "Available — tank size, heating type",
    },
    relatedSlugs: [
      "commercial-gas-burner",
      "stainless-steel-work-table",
      "three-compartment-sink",
    ],
  },
  {
    id: 7,
    slug: "three-compartment-sink",
    category: "Commercial Sinks",
    name: "3-Compartment Sink",
    description:
      "Heavy-gauge stainless steel triple bowl commercial sink for wash, rinse, and sanitize operations. NSF-compliant with backsplash and draining boards.",
    material: "SS 304 Stainless Steel (16 gauge)",
    image: "/assets/commercial_sinks-019e4c08-b908-74eb-9867-f6a5977c88f2.jpg",
    features: [
      "Three deep bowls for wash, rinse, and sanitize workflow",
      "10-inch deep bowls with coved corners",
      "Integral draining board on both sides",
      "SS 304 legs with adjustable non-slip feet",
      "Pre-drilled for standard faucet mounting",
      "Optional waste disposal inlet",
    ],
    specs: {
      material: "SS 304 Stainless Steel (16 gauge)",
      dimensions: "2100 mm L × 700 mm W × 850 mm H",
      capacity: "3 × 500 mm × 500 mm × 300 mm bowls",
      powerRequirement: "Not applicable",
      usageType: "Restaurants, Hotels, Canteens, Food Courts",
      finish: "No. 4 Brushed / Hairline Finish",
      warranty: "2 Year Manufacturing Warranty",
      customization: "Available — bowl count, size, draining board, legs",
    },
    relatedSlugs: [
      "stainless-steel-work-table",
      "commercial-refrigerator",
      "heavy-duty-storage-rack",
    ],
  },
  {
    id: 8,
    slug: "heavy-duty-storage-rack",
    category: "Storage Racks",
    name: "Heavy-Duty Storage Rack",
    description:
      "Industrial-grade stainless steel and MS powder-coated storage racks. Modular design for flexible kitchen storage with adjustable shelf heights.",
    material: "SS 304 / MS Powder-Coated Steel",
    image: "/assets/storage_racks-019e4c08-b6d6-7529-bd00-263bcd0e9fcc.jpg",
    features: [
      "Adjustable shelf positions at 25 mm intervals",
      "Load capacity up to 200 kg per shelf",
      "Wire mesh or solid shelf panel options",
      "Rust-resistant epoxy powder coating (MS version)",
      "Compatible with standard and Euro container sizes",
      "Bolt-free snap-in assembly",
    ],
    specs: {
      material: "SS 304 or MS Powder-Coated Steel",
      dimensions: "1800 mm H × 900 mm W × 450 mm D (standard)",
      capacity: "Up to 200 kg per shelf / 800 kg total",
      powerRequirement: "Not applicable",
      usageType: "Dry Storage, Cold Rooms, Pantry, Walk-in Refrigerators",
      finish: "Epoxy Powder Coat (white) / SS Hairline",
      warranty: "2 Year Manufacturing Warranty",
      customization: "Available — size, shelf count, material, colour",
    },
    relatedSlugs: [
      "stainless-steel-work-table",
      "commercial-refrigerator",
      "three-compartment-sink",
    ],
  },
  {
    id: 9,
    slug: "custom-kitchen-counter",
    category: "Kitchen Fabrication",
    name: "Custom Kitchen Counter",
    description:
      "Precision-fabricated stainless steel kitchen countertop and pass-through counter. Ideal for hotels, QSR chains, and hospital dietary departments requiring bespoke layouts.",
    material: "SS 304 Stainless Steel",
    image:
      "/assets/custom_kitchen_counter-019e4c08-b70d-767d-a74a-ef59c51469fc.jpg",
    features: [
      "Fully custom-designed to match kitchen layout drawings",
      "Integrated cutouts for sinks, equipment, and utilities",
      "Reinforced frame with adjustable height legs",
      "Coved splash back with 50 mm upstand",
      "Smooth weld joints polished to food-grade finish",
      "Available with drawer banks and under-counter storage",
    ],
    specs: {
      material: "SS 304 Stainless Steel (16 gauge top)",
      dimensions: "Custom — as per kitchen design requirements",
      capacity: "As per design specification",
      powerRequirement: "Not applicable",
      usageType: "Hotels, QSR, Hospitals, Canteens, Cloud Kitchens",
      finish: "No. 4 Hairline / Mirror Polish",
      warranty: "1 Year Manufacturing Warranty",
      customization: "Fully customizable — size, cutouts, storage, finish",
    },
    relatedSlugs: [
      "stainless-steel-work-table",
      "exhaust-hood-system",
      "three-compartment-sink",
    ],
  },
  {
    id: 10,
    slug: "modular-kitchen-setup",
    category: "Custom Setups",
    name: "Modular Kitchen Setup",
    description:
      "Complete turnkey modular commercial kitchen installation. From design consultation and equipment selection to fabrication, delivery, and commissioning across Pan India.",
    material: "SS 304 Stainless Steel (all contact surfaces)",
    image:
      "/assets/custom_kitchen_counter1-019e4c08-b6e9-74ae-b696-d11171e64c6b.jpg",
    features: [
      "End-to-end design, supply, and installation service",
      "Equipment selection based on menu and throughput analysis",
      "All SS 304 contact surfaces for food safety compliance",
      "Fire suppression and exhaust system integration",
      "Power, gas, and plumbing layout co-ordination",
      "Post-installation training and AMC support available",
    ],
    specs: {
      material: "SS 304 Stainless Steel, Commercial Grade Equipment",
      dimensions: "Custom — based on kitchen footprint",
      capacity: "Designed for 50–500 covers or equivalent throughput",
      powerRequirement:
        "3-phase supply recommended; load calculated per layout",
      usageType: "Hotels, Restaurants, Hospitals, Cloud Kitchens, Food Courts",
      finish: "Hairline SS + Color-coded utility zones",
      warranty: "1 Year on Fabrication; Equipment warranty as per OEM",
      customization: "Fully bespoke — every project is custom designed",
    },
    relatedSlugs: [
      "commercial-gas-burner",
      "exhaust-hood-system",
      "custom-kitchen-counter",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return slugs
    .map((s) => PRODUCTS.find((p) => p.slug === s))
    .filter((p): p is Product => p !== undefined);
}
