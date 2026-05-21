export interface Product {
  id: number;
  slug: string;
  category: ProductCategory;
  name: string;
  description: string;
  material: string;
  image: string;
  features: string[];
  specs: ProductSpec;
  relatedSlugs: string[];
}

export type ProductCategory =
  | "Commercial Burners"
  | "Stainless Steel Tables"
  | "Exhaust Hoods"
  | "Refrigeration"
  | "Bakery Equipment"
  | "Fast Food Equipment"
  | "Commercial Sinks"
  | "Storage Racks"
  | "Kitchen Fabrication"
  | "Custom Setups";

export interface ProductSpec {
  material: string;
  dimensions: string;
  capacity: string;
  powerRequirement: string;
  usageType: string;
  finish: string;
  warranty: string;
  customization: string;
}

export const FILTER_CATEGORIES: ("All" | ProductCategory)[] = [
  "All",
  "Commercial Burners",
  "Stainless Steel Tables",
  "Exhaust Hoods",
  "Refrigeration",
  "Bakery Equipment",
  "Fast Food Equipment",
  "Commercial Sinks",
  "Storage Racks",
  "Kitchen Fabrication",
  "Custom Setups",
];

export const CATEGORY_SLUGS: Record<"All" | ProductCategory, string> = {
  All: "all",
  "Commercial Burners": "commercial-burners",
  "Stainless Steel Tables": "stainless-steel-tables",
  "Exhaust Hoods": "exhaust-hoods",
  Refrigeration: "refrigeration",
  "Bakery Equipment": "bakery-equipment",
  "Fast Food Equipment": "fast-food-equipment",
  "Commercial Sinks": "commercial-sinks",
  "Storage Racks": "storage-racks",
  "Kitchen Fabrication": "kitchen-fabrication",
  "Custom Setups": "custom-setups",
};

export const SLUG_TO_CATEGORY: Record<string, "All" | ProductCategory> =
  Object.fromEntries(
    Object.entries(CATEGORY_SLUGS).map(([k, v]) => [
      v,
      k as "All" | ProductCategory,
    ]),
  );
