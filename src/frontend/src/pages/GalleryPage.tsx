import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

type Category =
  | "All"
  | "Fabrication Projects"
  | "Burners"
  | "Refrigeration"
  | "Stainless Steel"
  | "Bakery Equipment"
  | "Exhaust Systems"
  | "Kitchen Installations"
  | "Fabrication";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: Exclude<Category, "All">;
}

const GALLERY_ITEMS: GalleryItem[] = [
  // Burners
  {
    id: 1,
    src: "/assets/commercial_burners-019e4c08-b6e6-7624-b43c-373f73b4f64e.jpg",
    title: "Heavy-Duty Commercial Gas Burner Range",
    category: "Burners",
  },
  {
    id: 2,
    src: "/assets/commercial_burners-019e4c08-b6e6-7624-b43c-373f73b4f64e.jpg",
    title: "4-Burner Industrial Cooking Range",
    category: "Burners",
  },
  {
    id: 3,
    src: "/assets/commercial_burners-019e4c08-b6e6-7624-b43c-373f73b4f64e.jpg",
    title: "Professional Kitchen Burner Setup",
    category: "Burners",
  },
  {
    id: 4,
    src: "/assets/fast_food_equipment-019e4c08-b6e0-72fd-90e9-1dd48f078ad1.jpg",
    title: "Commercial Range with Fast Food Equipment",
    category: "Burners",
  },
  // Refrigeration
  {
    id: 5,
    src: "/assets/commercial_refrigirator-019e4c08-b8f9-761a-b6dc-8a126f05f477.jpg",
    title: "Commercial Upright Refrigerator",
    category: "Refrigeration",
  },
  {
    id: 6,
    src: "/assets/commercial_refrigirator1-019e4c08-b87c-759f-a394-35dc20e5cbb7.jpg",
    title: "4-Door Commercial Refrigerator Unit",
    category: "Refrigeration",
  },
  {
    id: 7,
    src: "/assets/commercial_refrigirator-019e4c08-b8f9-761a-b6dc-8a126f05f477.jpg",
    title: "Stainless Steel Reach-In Refrigerator",
    category: "Refrigeration",
  },
  {
    id: 8,
    src: "/assets/commercial_refrigirator1-019e4c08-b87c-759f-a394-35dc20e5cbb7.jpg",
    title: "Commercial Deep Freeze Refrigeration Unit",
    category: "Refrigeration",
  },
  // Stainless Steel
  {
    id: 9,
    src: "/assets/ss_tables-019e4c08-b6d9-716f-bf3e-62ae7d35c552.jpg",
    title: "SS Work Table with Under-Shelf",
    category: "Stainless Steel",
  },
  {
    id: 10,
    src: "/assets/storage_racks-019e4c08-b6d6-7529-bd00-263bcd0e9fcc.jpg",
    title: "SS Storage Rack — 5 Tier",
    category: "Stainless Steel",
  },
  {
    id: 11,
    src: "/assets/ss_tables-019e4c08-b6d9-716f-bf3e-62ae7d35c552.jpg",
    title: "Stainless Steel Prep Counter",
    category: "Stainless Steel",
  },
  {
    id: 12,
    src: "/assets/commercial_sinks-019e4c08-b908-74eb-9867-f6a5977c88f2.jpg",
    title: "Commercial SS Sink Station",
    category: "Stainless Steel",
  },
  // Bakery Equipment
  {
    id: 13,
    src: "/assets/deck_oven-019e4c08-b6c0-7101-9a2d-c864c027518a.jpg",
    title: "Multi-Deck Commercial Bakery Oven",
    category: "Bakery Equipment",
  },
  {
    id: 14,
    src: "/assets/deck_oven1-019e4c08-b950-762e-a99c-5617eba838d5.jpg",
    title: "Professional Deck Oven — 2 Deck",
    category: "Bakery Equipment",
  },
  {
    id: 15,
    src: "/assets/bakery_equipment1-019e4c08-b8ea-71cc-a713-b18935f70ddc.jpg",
    title: "Commercial Bakery Equipment Setup",
    category: "Bakery Equipment",
  },
  {
    id: 16,
    src: "/assets/deck_oven-019e4c08-b6c0-7101-9a2d-c864c027518a.jpg",
    title: "Baking Oven with Stone Deck",
    category: "Bakery Equipment",
  },
  // Exhaust Systems
  {
    id: 17,
    src: "/assets/exhaust_hood-019e4c08-b900-71d5-9277-4cc5e7dfa5d2.jpg",
    title: "Industrial Exhaust Hood — Wall Mount",
    category: "Exhaust Systems",
  },
  {
    id: 18,
    src: "/assets/exhaust_hood1-019e4c08-b8ec-769a-a6a9-1dd74eec8654.jpg",
    title: "Central Island Exhaust Canopy",
    category: "Exhaust Systems",
  },
  {
    id: 19,
    src: "/assets/exhaust_hood-019e4c08-b900-71d5-9277-4cc5e7dfa5d2.jpg",
    title: "SS Exhaust Hood with Baffle Filters",
    category: "Exhaust Systems",
  },
  {
    id: 20,
    src: "/assets/exhaust_hood1-019e4c08-b8ec-769a-a6a9-1dd74eec8654.jpg",
    title: "High-Volume Commercial Ventilation Hood",
    category: "Exhaust Systems",
  },
  // Kitchen Installations
  {
    id: 21,
    src: "/assets/custom_kitchen_counter-019e4c08-b70d-767d-a74a-ef59c51469fc.jpg",
    title: "Hotel Kitchen Full Installation",
    category: "Kitchen Installations",
  },
  {
    id: 22,
    src: "/assets/custom_kitchen_counter1-019e4c08-b6e9-74ae-b696-d11171e64c6b.jpg",
    title: "Restaurant Kitchen Counter Setup",
    category: "Kitchen Installations",
  },
  {
    id: 23,
    src: "/assets/custom_kitchen_counter-019e4c08-b70d-767d-a74a-ef59c51469fc.jpg",
    title: "Cloud Kitchen Multi-Station Counter",
    category: "Kitchen Installations",
  },
  {
    id: 24,
    src: "/assets/custom_kitchen_counter1-019e4c08-b6e9-74ae-b696-d11171e64c6b.jpg",
    title: "Industrial Canteen Kitchen Counter",
    category: "Kitchen Installations",
  },
  // Fabrication
  {
    id: 25,
    src: "/assets/custom_kitchen_counter-019e4c08-b70d-767d-a74a-ef59c51469fc.jpg",
    title: "Custom SS Workstation Fabrication",
    category: "Fabrication",
  },
  {
    id: 26,
    src: "/assets/custom_kitchen_counter1-019e4c08-b6e9-74ae-b696-d11171e64c6b.jpg",
    title: "Bespoke Kitchen Counter Unit",
    category: "Fabrication",
  },
  {
    id: 27,
    src: "/assets/exhaust_hood1-019e4c08-b8ec-769a-a6a9-1dd74eec8654.jpg",
    title: "Custom Exhaust Hood Fabrication",
    category: "Fabrication",
  },
  {
    id: 28,
    src: "/assets/ss_tables-019e4c08-b6d9-716f-bf3e-62ae7d35c552.jpg",
    title: "Modular SS Kitchen Fabrication",
    category: "Fabrication",
  },
  // Fabrication Projects (real customer installations)
  {
    id: 29,
    src: "/assets/project_fab_01.png",
    title: "Display & Serving Counter",
    category: "Fabrication Projects",
  },
  {
    id: 30,
    src: "/assets/project_fab_02.png",
    title: "Tea Stall Counter",
    category: "Fabrication Projects",
  },
  {
    id: 31,
    src: "/assets/project_fab_03.png",
    title: "Pan Shop Counter",
    category: "Fabrication Projects",
  },
  {
    id: 32,
    src: "/assets/project_fab_04.png",
    title: "Chat Stall",
    category: "Fabrication Projects",
  },
  {
    id: 33,
    src: "/assets/project_fab_05.png",
    title: "Tiffin Serving Counter",
    category: "Fabrication Projects",
  },
  {
    id: 34,
    src: "/assets/project_fab_06.png",
    title: "Kitchen Fabrication Setup",
    category: "Fabrication Projects",
  },
  {
    id: 35,
    src: "/assets/project_fab_07.png",
    title: "Custom Food Kiosk",
    category: "Fabrication Projects",
  },
  {
    id: 36,
    src: "/assets/project_fab_08.png",
    title: "Glass Display Counter",
    category: "Fabrication Projects",
  },
  {
    id: 37,
    src: "/assets/project_fab_09.png",
    title: "SS Workstation Setup",
    category: "Fabrication Projects",
  },
  {
    id: 38,
    src: "/assets/project_fab_10.png",
    title: "Commercial Serving Station",
    category: "Fabrication Projects",
  },
  {
    id: 39,
    src: "/assets/project_fab_11.png",
    title: "Tea & Beverage Counter",
    category: "Fabrication Projects",
  },
  {
    id: 40,
    src: "/assets/project_fab_12.png",
    title: "Mobile Food Kiosk",
    category: "Fabrication Projects",
  },
  {
    id: 41,
    src: "/assets/project_fab_13.png",
    title: "Pan & Snack Counter",
    category: "Fabrication Projects",
  },
  {
    id: 42,
    src: "/assets/project_fab_14.png",
    title: "Tiffin & Lunch Counter",
    category: "Fabrication Projects",
  },
  {
    id: 43,
    src: "/assets/project_fab_15.png",
    title: "Chat & Street Food Stall",
    category: "Fabrication Projects",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Fabrication Projects",
  "Burners",
  "Refrigeration",
  "Stainless Steel",
  "Bakery Equipment",
  "Exhaust Systems",
  "Kitchen Installations",
  "Fabrication",
];

const CATEGORY_GROUPS = CATEGORIES.filter(
  (c): c is Exclude<Category, "All"> => c !== "All",
);

// ── Lightbox ──────────────────────────────────────────────────────────────────
interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ items, index, onClose, onPrev, onNext }: LightboxProps) {
  const item = items[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      data-ocid="gallery.lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <button
        type="button"
        data-ocid="gallery.close_button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-[#f97316] transition-smooth"
        aria-label="Close lightbox"
      >
        <X size={22} />
      </button>

      <button
        type="button"
        data-ocid="gallery.lightbox_prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 md:left-6 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-[#f97316] transition-smooth"
        aria-label="Previous image"
      >
        <ChevronLeft size={26} />
      </button>

      <button
        type="button"
        data-ocid="gallery.lightbox_next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 md:right-6 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-[#f97316] transition-smooth"
        aria-label="Next image"
      >
        <ChevronRight size={26} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          className="flex flex-col items-center max-w-5xl w-full px-16 md:px-24"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={item.src}
            alt={item.title}
            className="max-h-[72vh] w-full object-contain rounded-lg shadow-2xl"
          />
          <div className="mt-4 text-center">
            <p className="text-[#f97316] text-sm uppercase tracking-widest mb-1 font-semibold">
              {item.category}
            </p>
            <h3 className="text-white text-xl font-semibold">{item.title}</h3>
            <p className="mt-1 text-white/50 text-sm">
              {index + 1} / {items.length}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

// ── Gallery card ──────────────────────────────────────────────────────────────
interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  ocid: string;
  onClick: () => void;
}

function GalleryCard({ item, index, ocid, onClick }: GalleryCardProps) {
  return (
    <motion.div
      data-ocid={ocid}
      className="relative group cursor-pointer overflow-hidden rounded-lg bg-white border border-[#e5e7eb] hover:border-[#f97316]/40 shadow-sm card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onClick={onClick}
    >
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-smooth flex items-center justify-center">
        <ZoomIn
          size={36}
          className="text-[#f97316] opacity-0 group-hover:opacity-100 transition-smooth scale-75 group-hover:scale-100 drop-shadow-lg"
        />
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-3 translate-y-1 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-smooth">
        <p className="text-white text-sm font-medium leading-tight truncate">
          {item.title}
        </p>
      </div>
    </motion.div>
  );
}

// ── Fabrication Showcase Section ─────────────────────────────────────────────
interface FabricationShowcaseProps {
  items: GalleryItem[];
  onOpen: (items: GalleryItem[], idx: number) => void;
}

function FabricationShowcase({ items, onOpen }: FabricationShowcaseProps) {
  return (
    <section
      className="bg-white border-b border-[#e5e7eb] py-16 md:py-20"
      data-ocid="gallery.fabrication_section"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-10 md:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="inline-block text-[#f97316] text-xs font-semibold uppercase tracking-[0.2em] mb-3 border border-[#f97316]/30 bg-[#f97316]/10 px-4 py-1.5 rounded-full">
                Real Customer Installations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight">
                Our Work —{" "}
                <span className="text-[#f97316]">
                  Real Fabrication Projects
                </span>
              </h2>
              <p className="mt-3 text-[#6b7280] text-base md:text-lg max-w-2xl">
                Custom stainless steel fabrication for tea stalls, pan shops,
                tiffin counters, chat stalls, display counters, and food kiosks
                — delivered and installed across Hyderabad &amp; Pan India.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 bg-[#f5f5f5] border border-[#e5e7eb] text-[#374151] text-sm px-4 py-2 rounded-full font-medium">
                <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
                {items.length} Completed Projects
              </span>
            </div>
          </div>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              data-ocid={`gallery.fab_project.${idx + 1}`}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-[#f5f5f5] border border-[#e5e7eb] hover:border-[#f97316]/50 shadow-sm hover:shadow-md transition-smooth"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              onClick={() => onOpen(items, idx)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-smooth flex items-center justify-center">
                <ZoomIn
                  size={32}
                  className="text-[#f97316] opacity-0 group-hover:opacity-100 transition-smooth scale-75 group-hover:scale-100 drop-shadow-lg"
                />
              </div>
              {/* Label */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-3 py-3 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-smooth">
                <p className="text-white text-xs font-semibold leading-snug truncate">
                  {item.title}
                </p>
              </div>
              {/* Project badge */}
              <div className="absolute top-2 left-2">
                <span className="bg-[#f97316] text-white text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full shadow">
                  Project {idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="mt-8 text-center text-[#9ca3af] text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          All projects custom-designed and fabricated at our Sanath Nagar
          workshop · Hyderabad, Telangana
        </motion.p>
      </div>
    </section>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxItems, setLightboxItems] = useState<GalleryItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === activeCategory);

  const openLightbox = useCallback((items: GalleryItem[], idx: number) => {
    setLightboxItems(items);
    setLightboxIndex(idx);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const prevImage = useCallback(
    () =>
      setLightboxIndex(
        (i) => (i - 1 + lightboxItems.length) % lightboxItems.length,
      ),
    [lightboxItems.length],
  );

  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i + 1) % lightboxItems.length),
    [lightboxItems.length],
  );

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setTimeout(
      () =>
        filterRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
      50,
    );
  };

  return (
    <div className="bg-background min-h-screen" data-ocid="gallery.page">
      {/* Hero */}
      <section className="relative bg-[#f5f5f5] border-b border-[#d1d5db] py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #d1d5db 0, #d1d5db 1px, transparent 0, transparent 50%),repeating-linear-gradient(180deg, #d1d5db 0, #d1d5db 1px, transparent 0, transparent 50%)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5]/40 to-[#f5f5f5]" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#f97316] text-xs font-semibold uppercase tracking-[0.2em] mb-4 border border-[#f97316]/30 bg-[#f97316]/10 px-4 py-1.5 rounded-full">
              Equipment Gallery
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#111827] mb-4">
              Gallery &amp;{" "}
              <span className="text-[#f97316]">Completed Projects</span>
            </h1>
            <p className="text-[#6b7280] text-lg md:text-xl max-w-2xl mx-auto">
              Browse our real installed equipment and custom fabrication work
            </p>
            <div className="mt-5 flex items-center justify-center gap-2 text-[#9ca3af] text-sm">
              <span className="w-8 h-px bg-[#f97316]/50" />
              <span>Pan India Service Coverage</span>
              <span className="w-8 h-px bg-[#f97316]/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real Fabrication Projects Showcase */}
      <FabricationShowcase
        items={GALLERY_ITEMS.filter(
          (i) => i.category === "Fabrication Projects",
        )}
        onOpen={openLightbox}
      />

      {/* Category Filter Tabs */}
      <div
        ref={filterRef}
        className="sticky top-[64px] z-20 bg-white/95 backdrop-blur border-b border-[#e5e7eb] shadow-sm"
        data-ocid="gallery.filter_tabs"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                data-ocid={`gallery.tab.${cat.toLowerCase().replace(/\s+/g, "_")}`}
                onClick={() => handleCategoryChange(cat)}
                className={[
                  "whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium transition-smooth flex-shrink-0",
                  activeCategory === cat
                    ? "bg-[#f97316] text-white shadow-sm"
                    : "text-[#6b7280] hover:text-[#111827] hover:bg-[#f5f5f5]",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <section
        className="container mx-auto px-4 py-14"
        data-ocid="gallery.grid_section"
      >
        <AnimatePresence mode="wait">
          {activeCategory === "All" ? (
            <motion.div
              key="all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {CATEGORY_GROUPS.map((group) => {
                const items = GALLERY_ITEMS.filter((i) => i.category === group);
                return (
                  <div key={group}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-1 h-8 bg-[#f97316] rounded-full flex-shrink-0" />
                      <h2 className="text-xl md:text-2xl font-semibold text-[#111827]">
                        {group}
                      </h2>
                      <span className="flex-1 h-px bg-[#e5e7eb]" />
                      <button
                        type="button"
                        onClick={() => handleCategoryChange(group)}
                        className="text-[#f97316] text-sm hover:underline flex items-center gap-1 transition-smooth"
                      >
                        View all <ArrowRight size={14} />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                      {items.map((item, idx) => (
                        <GalleryCard
                          key={item.id}
                          item={item}
                          index={idx}
                          ocid={`gallery.item.${item.id}`}
                          onClick={() => openLightbox(items, idx)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-1 h-8 bg-[#f97316] rounded-full flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111827]">
                  {activeCategory}
                </h2>
                <span className="text-[#9ca3af] text-sm">
                  ({filteredItems.length} items)
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {filteredItems.map((item, idx) => (
                  <GalleryCard
                    key={item.id}
                    item={item}
                    index={idx}
                    ocid={`gallery.item.${item.id}`}
                    onClick={() => openLightbox(filteredItems, idx)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* CTA */}
      <section
        className="bg-[#f5f5f5] section-divider"
        data-ocid="gallery.cta_section"
      >
        <div className="container mx-auto px-4 py-16 md:py-20">
          <motion.div
            className="relative rounded-2xl overflow-hidden p-8 md:p-14 text-center bg-white border border-[#e5e7eb] shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />

            <span className="inline-block text-[#f97316] text-xs font-semibold uppercase tracking-[0.25em] mb-4 border border-[#f97316]/30 bg-[#f97316]/10 px-4 py-1 rounded-full">
              Ready to build?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Impressed by our work?{" "}
              <span className="text-[#f97316]">
                Let&apos;s build your kitchen.
              </span>
            </h2>
            <p className="text-[#6b7280] max-w-xl mx-auto mb-8">
              From concept to commissioning — we deliver complete commercial
              kitchen solutions across Pan India.
            </p>
            <Link to="/contact">
              <Button
                data-ocid="gallery.cta_button"
                size="lg"
                className="bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold px-8 rounded-md orange-glow transition-smooth"
              >
                Get a Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            items={lightboxItems}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
