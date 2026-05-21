import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChefHat,
  HeartPulse,
  Layers,
  MapPin,
  Settings,
  Shield,
  ShoppingBag,
  Star,
  Truck,
  Utensils,
  Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ── Scroll-reveal wrapper ──────────────────────────────────────────────────
function FadeSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────
const HIGHLIGHTS = [
  {
    Icon: MapPin,
    title: "Pan India Service Coverage",
    desc: "End-to-end delivery and installation across all 28 states and 8 UTs",
  },
  {
    Icon: Layers,
    title: "Premium SS Fabrication",
    desc: "Food-grade 304 stainless steel fabricated to exact commercial standards",
  },
  {
    Icon: Settings,
    title: "Industrial Grade Equipment",
    desc: "Heavy-duty machinery rated for continuous high-volume kitchen operations",
  },
  {
    Icon: Wrench,
    title: "Custom Kitchen Solutions",
    desc: "Bespoke layouts designed around your space, menu, and throughput needs",
  },
  {
    Icon: Truck,
    title: "Installation & Maintenance",
    desc: "Turnkey setup by certified technicians with annual maintenance contracts",
  },
  {
    Icon: Shield,
    title: "Trusted Commercial Solutions",
    desc: "Reliable supply chain, genuine spares, and certified after-sales support",
  },
];

const PRODUCT_CATEGORIES = [
  {
    name: "Commercial Burners",
    slug: "commercial-burners",
    img: "/assets/commercial_burners-019e4c08-b6e6-7624-b43c-373f73b4f64e.jpg",
  },
  {
    name: "Stainless Steel Tables",
    slug: "ss-tables",
    img: "/assets/ss_tables-019e4c08-b6d9-716f-bf3e-62ae7d35c552.jpg",
  },
  {
    name: "Exhaust Hoods & Ventilation",
    slug: "exhaust-hoods",
    img: "/assets/exhaust_hood-019e4c08-b900-71d5-9277-4cc5e7dfa5d2.jpg",
  },
  {
    name: "Refrigeration Equipment",
    slug: "refrigeration",
    img: "/assets/commercial_refrigirator1-019e4c08-b87c-759f-a394-35dc20e5cbb7.jpg",
  },
  {
    name: "Bakery Equipment",
    slug: "bakery",
    img: "/assets/deck_oven-019e4c08-b6c0-7101-9a2d-c864c027518a.jpg",
  },
  {
    name: "Fast Food Equipment",
    slug: "fast-food",
    img: "/assets/fast_food_equipment-019e4c08-b6e0-72fd-90e9-1dd48f078ad1.jpg",
  },
  {
    name: "Commercial Sinks",
    slug: "sinks",
    img: "/assets/commercial_sinks-019e4c08-b908-74eb-9867-f6a5977c88f2.jpg",
  },
  {
    name: "Storage Racks",
    slug: "storage-racks",
    img: "/assets/storage_racks1-019e4c08-b8d5-7368-9889-467967873d7d.jpg",
  },
  {
    name: "Kitchen Fabrication",
    slug: "fabrication",
    img: "/assets/custom_kitchen_counter-019e4c08-b70d-767d-a74a-ef59c51469fc.jpg",
  },
  {
    name: "Custom Kitchen Setups",
    slug: "custom-setups",
    img: "/assets/custom_kitchen_counter1-019e4c08-b6e9-74ae-b696-d11171e64c6b.jpg",
  },
];

const INDUSTRIES = [
  { label: "Hotels", Icon: Building2, desc: "5-star to budget hotel kitchens" },
  {
    label: "Restaurants",
    Icon: Utensils,
    desc: "Fine dining to casual dining",
  },
  { label: "Cafes", Icon: Star, desc: "Specialty and chain cafes" },
  { label: "Bakeries", Icon: ChefHat, desc: "Artisan & industrial bakeries" },
  {
    label: "Cloud Kitchens",
    Icon: ShoppingBag,
    desc: "Delivery-first dark kitchens",
  },
  {
    label: "Hospitals",
    Icon: HeartPulse,
    desc: "Healthcare catering facilities",
  },
  {
    label: "Catering Services",
    Icon: Truck,
    desc: "Bulk event catering operations",
  },
  { label: "Food Courts", Icon: Layers, desc: "Mall and campus food courts" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Consultation",
    desc: "We assess your kitchen requirements, budget, and space constraints in detail.",
  },
  {
    num: "02",
    title: "Kitchen Planning",
    desc: "Our designers create a space-optimised commercial kitchen layout for your needs.",
  },
  {
    num: "03",
    title: "Manufacturing",
    desc: "Equipment fabricated using premium 304-grade stainless steel in our facility.",
  },
  {
    num: "04",
    title: "Installation",
    desc: "Certified technicians handle complete turnkey installation at your premises.",
  },
  {
    num: "05",
    title: "Support & AMC",
    desc: "Annual maintenance contracts with rapid on-site response and spare parts.",
  },
];

const INDIA_CITIES = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Surat",
  "Kochi",
  "Chandigarh",
  "Coimbatore",
  "Nagpur",
  "Bhopal",
  "Patna",
  "Indore",
];

const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Happy Clients" },
  { value: "Pan India", label: "Coverage" },
];

const EQUIPMENT_TYPES = [
  "Commercial Burners",
  "Stainless Steel Tables",
  "Exhaust Hoods",
  "Refrigeration Equipment",
  "Bakery Equipment",
  "Storage Racks",
  "Commercial Sinks",
  "Fast Food Equipment",
  "Kitchen Fabrication",
  "Other / Multiple",
];

// ── Inquiry Form ───────────────────────────────────────────────────────────
function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    equipment: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        data-ocid="inquiry.success_state"
        className="flex flex-col items-center justify-center py-16 gap-4"
      >
        <CheckCircle2 className="w-16 h-16 text-brand" />
        <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
        <p className="text-muted-foreground text-center max-w-sm">
          We've received your inquiry. Our team will contact you within 24
          hours.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setSubmitted(false)}
          className="mt-2"
        >
          Submit Another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-5"
    >
      <div className="flex flex-col gap-1.5">
        <Label
          htmlFor="inq-name"
          className="text-sm font-medium text-foreground"
        >
          Full Name *
        </Label>
        <Input
          id="inq-name"
          name="name"
          required
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          data-ocid="inquiry.name_input"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label
          htmlFor="inq-phone"
          className="text-sm font-medium text-foreground"
        >
          Phone Number *
        </Label>
        <Input
          id="inq-phone"
          name="phone"
          required
          type="tel"
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={handleChange}
          data-ocid="inquiry.phone_input"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label
          htmlFor="inq-email"
          className="text-sm font-medium text-foreground"
        >
          Email Address
        </Label>
        <Input
          id="inq-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          data-ocid="inquiry.email_input"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label
          htmlFor="inq-city"
          className="text-sm font-medium text-foreground"
        >
          City / State
        </Label>
        <Input
          id="inq-city"
          name="city"
          placeholder="Hyderabad, Telangana"
          value={form.city}
          onChange={handleChange}
          data-ocid="inquiry.city_input"
        />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <Label
          htmlFor="inq-equipment"
          className="text-sm font-medium text-foreground"
        >
          Type of Equipment *
        </Label>
        <select
          id="inq-equipment"
          name="equipment"
          required
          value={form.equipment}
          onChange={handleChange}
          data-ocid="inquiry.equipment_select"
          className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-orange-400/60"
        >
          <option value="">Select equipment type...</option>
          {EQUIPMENT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <Label
          htmlFor="inq-message"
          className="text-sm font-medium text-foreground"
        >
          Message / Requirements
        </Label>
        <Textarea
          id="inq-message"
          name="message"
          rows={4}
          placeholder="Describe your kitchen setup or specific requirements..."
          value={form.message}
          onChange={handleChange}
          data-ocid="inquiry.message_textarea"
          className="resize-none"
        />
      </div>
      <div className="sm:col-span-2">
        <Button
          type="submit"
          data-ocid="inquiry.submit_button"
          className="w-full sm:w-auto bg-brand text-white hover:bg-orange-600 orange-glow font-semibold px-10 py-3 text-base"
        >
          Send Inquiry <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </form>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section
        data-ocid="hero.section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <img
          src="/assets/generated/hero-kitchen.dim_1920x1080.jpg"
          alt="Commercial kitchen equipment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* multi-layer premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#1a0f00]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        {/* animated steel shimmer strip */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-[#f97316] to-transparent opacity-80" />
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        {/* subtle grid overlay texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.8) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.8) 40px)",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
          <Badge
            data-ocid="hero.pan_india_badge"
            className="bg-[#f97316]/20 text-[#fdba74] border-[#f97316]/50 text-xs font-semibold uppercase tracking-widest px-5 py-2"
          >
            🇮🇳 Pan India Service Coverage — All 28 States
          </Badge>

          <div className="max-w-5xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-extrabold text-white leading-[1.08] tracking-tight text-balance">
              Pan India Commercial{" "}
              <span className="text-[#f97316] relative inline-block">
                Kitchen Equipment
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#f97316]/40 rounded-full" />
              </span>{" "}
              Solutions
            </h1>
          </div>

          <p className="text-base sm:text-xl text-white/75 max-w-2xl leading-relaxed">
            Premium stainless steel fabrication, custom kitchen design, and
            turnkey installation services for hotels, restaurants, bakeries, and
            cloud kitchens across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              asChild
              data-ocid="hero.explore_products_button"
              size="lg"
              className="bg-[#f97316] text-white hover:bg-orange-600 font-bold px-10 py-6 text-base shadow-[0_0_32px_rgba(249,115,22,0.50)] hover:shadow-[0_0_44px_rgba(249,115,22,0.65)] transition-all duration-300"
            >
              <Link to="/products">
                Explore Products <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              data-ocid="hero.get_quote_button"
              size="lg"
              variant="outline"
              className="border-white/50 text-white bg-white/5 hover:bg-white/15 hover:border-white font-bold px-10 py-6 text-base backdrop-blur-sm transition-all duration-300"
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* divider */}
          <div className="w-16 h-px bg-white/20 mt-2" />

          {/* quick stats strip */}
          <div
            data-ocid="hero.stats_strip"
            className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-white/60 text-sm"
          >
            {[
              { val: "500+", label: "Projects Completed" },
              { val: "10+", label: "Years Experience" },
              { val: "Pan India", label: "Coverage" },
              { val: "24/7", label: "Support" },
            ].map((s, i) => (
              <span key={s.label} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="hidden sm:inline w-px h-8 bg-white/15" />
                )}
                <span className="flex flex-col items-center">
                  <span className="text-white font-bold text-lg leading-tight">
                    {s.val}
                  </span>
                  <span className="text-white/50 text-[11px] uppercase tracking-widest">
                    {s.label}
                  </span>
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span className="uppercase tracking-widest text-[10px]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-bounce" />
        </div>
      </section>

      {/* ── 2. COMPANY HIGHLIGHTS ───────────────────────────────────────── */}
      <section
        data-ocid="highlights.section"
        className="bg-light-section py-20 px-4 sm:px-6 lg:px-8"
      >
        <FadeSection>
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-brand text-xs font-semibold uppercase tracking-widest">
                Why Standard Commercial Kitchen Equipments
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                Built for Commercial Excellence
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                Everything your commercial kitchen needs — from a single piece
                of equipment to complete turnkey installations.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {HIGHLIGHTS.map(({ Icon, title, desc }, i) => (
                <div
                  key={title}
                  data-ocid={`highlights.item.${i + 1}`}
                  className="bg-white border border-gray-200 rounded-xl p-6 card-hover card-shadow group"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center mb-4 group-hover:bg-[#f97316]/15 transition-smooth">
                    <Icon className="w-5 h-5 text-[#f97316]" />
                  </div>
                  <h3 className="text-gray-900 font-bold text-base mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── 3. STATS BAR ────────────────────────────────────────────────── */}
      <section
        data-ocid="stats.section"
        className="bg-[#f97316] py-14 px-4 sm:px-6 lg:px-8"
      >
        <FadeSection>
          <div className="container mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {STATS.map(({ value, label }, i) => (
                <div
                  key={label}
                  data-ocid={`stats.item.${i + 1}`}
                  className="flex flex-col gap-1"
                >
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {value}
                  </span>
                  <span className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-widest">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── 4. PRODUCT CATEGORIES ───────────────────────────────────────── */}
      <section
        data-ocid="categories.section"
        className="bg-white py-20 px-4 sm:px-6 lg:px-8"
      >
        <FadeSection>
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-brand text-xs font-semibold uppercase tracking-widest">
                What We Supply
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                Our Product Categories
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                Complete range of commercial kitchen equipment for every segment
                of the food service industry.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {PRODUCT_CATEGORIES.map((cat, i) => (
                <Link
                  key={cat.name}
                  to="/products"
                  search={{ category: cat.slug } as Record<string, string>}
                  data-ocid={`categories.item.${i + 1}`}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white hover:border-[#f97316] hover:shadow-lg transition-smooth cursor-pointer block"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="w-5 h-0.5 bg-[#f97316] mb-1.5 group-hover:w-8 transition-smooth" />
                    <p className="text-white font-semibold text-sm leading-snug">
                      {cat.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button
                asChild
                variant="outline"
                data-ocid="categories.view_all_button"
                className="border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold"
              >
                <Link to="/products">
                  Browse All Products <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── 5. INDUSTRIES SERVED ────────────────────────────────────────── */}
      <section
        data-ocid="industries.section"
        className="bg-light-section py-20 px-4 sm:px-6 lg:px-8"
      >
        <FadeSection>
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-brand text-xs font-semibold uppercase tracking-widest">
                Sectors We Cover
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                Industries We Serve
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                Supplying kitchen solutions to every segment of India's food
                &amp; hospitality sector.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {INDUSTRIES.map(({ label, Icon, desc }, i) => (
                <div
                  key={label}
                  data-ocid={`industries.item.${i + 1}`}
                  className="flex flex-col items-center text-center gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:border-[#f97316] hover:shadow-md transition-smooth group card-hover"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-[#f97316]/15 transition-smooth">
                    <Icon className="w-5 h-5 text-[#f97316]" />
                  </div>
                  <span className="text-sm font-bold text-gray-900 leading-snug">
                    {label}
                  </span>
                  <span className="text-xs text-gray-500 leading-snug hidden sm:block">
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── 6. PROCESS TIMELINE ─────────────────────────────────────────── */}
      <section
        data-ocid="process.section"
        className="bg-white py-20 px-4 sm:px-6 lg:px-8"
      >
        <FadeSection>
          <div className="container mx-auto">
            <div className="text-center mb-14">
              <span className="text-brand text-xs font-semibold uppercase tracking-widest">
                How We Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                Our Process
              </h2>
              <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm sm:text-base">
                From first conversation to final commissioning — a seamless,
                professional end-to-end experience.
              </p>
            </div>

            {/* Desktop horizontal timeline */}
            <div className="hidden lg:flex items-start gap-0 relative">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  data-ocid={`process.item.${i + 1}`}
                  className="flex-1 flex flex-col items-center text-center px-4 relative"
                >
                  {/* connector line */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="absolute top-7 left-1/2 right-0 h-px bg-gray-200 z-0" />
                  )}
                  {/* numbered circle */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#f97316] text-white font-extrabold text-lg flex items-center justify-center shadow-[0_4px_12px_rgba(249,115,22,0.35)] mb-5">
                    {step.num}
                  </div>
                  <h3 className="text-gray-900 font-bold text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile vertical timeline */}
            <div className="lg:hidden flex flex-col gap-0">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  data-ocid={`process.mobile.item.${i + 1}`}
                  className="flex gap-5"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#f97316] text-white font-extrabold text-base flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(249,115,22,0.3)]">
                      {step.num}
                    </div>
                    {i < PROCESS_STEPS.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 my-2" />
                    )}
                  </div>
                  <div className="pb-8 pt-2">
                    <h3 className="text-gray-900 font-bold text-base mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── 7. PAN INDIA COVERAGE ───────────────────────────────────────── */}
      <section
        data-ocid="coverage.section"
        className="bg-light-section py-24 px-4 sm:px-6 lg:px-8"
      >
        <FadeSection>
          <div className="container mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
              <span className="text-brand text-xs font-semibold uppercase tracking-widest">
                Service Network
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
                Pan India{" "}
                <span className="text-[#f97316]">Service Coverage</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
                From our manufacturing base in Hyderabad, we deliver, install,
                and maintain commercial kitchen solutions across every state in
                India.
              </p>
            </div>

            {/* Coverage Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14 max-w-3xl mx-auto">
              {[
                { val: "28+", label: "States Served" },
                { val: "500+", label: "Cities Covered" },
                { val: "Pan India", label: "Delivery & Install" },
                { val: "24/7", label: "Support Network" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  data-ocid={`coverage.stat.${i + 1}`}
                  className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
                >
                  <span className="text-3xl font-extrabold text-[#f97316] leading-tight">
                    {stat.val}
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* India Region Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-start">
              {/* Left: Region cards */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
                  <span className="w-6 h-[3px] bg-[#f97316] rounded-full" />
                  Regional Coverage
                </h3>
                {[
                  {
                    region: "North India",
                    cities:
                      "Delhi, Chandigarh, Jaipur, Lucknow, Agra, Amritsar",
                    icon: "🏔️",
                  },
                  {
                    region: "South India",
                    cities:
                      "Hyderabad, Bangalore, Chennai, Kochi, Coimbatore, Vizag",
                    icon: "🌴",
                  },
                  {
                    region: "West India",
                    cities: "Mumbai, Pune, Ahmedabad, Surat, Nashik, Vadodara",
                    icon: "🌊",
                  },
                  {
                    region: "East India",
                    cities: "Kolkata, Patna, Bhubaneswar, Guwahati, Ranchi",
                    icon: "🌅",
                  },
                  {
                    region: "Central India",
                    cities: "Bhopal, Nagpur, Indore, Raipur, Jabalpur",
                    icon: "🗺️",
                  },
                ].map((reg, i) => (
                  <div
                    key={reg.region}
                    data-ocid={`coverage.region.${i + 1}`}
                    className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:border-[#f97316]/40 transition-smooth"
                  >
                    <span className="text-2xl mt-0.5 flex-shrink-0">
                      {reg.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="font-bold text-gray-900 text-sm">
                        {reg.region}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        {reg.cities}
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                  </div>
                ))}
              </div>

              {/* Right: City badges */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
                  <span className="w-6 h-[3px] bg-[#f97316] rounded-full" />
                  Major Cities Served
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {INDIA_CITIES.map((city) => (
                    <span
                      key={city}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#f97316] hover:text-[#f97316] hover:bg-orange-50 transition-smooth"
                    >
                      <MapPin className="w-3 h-3 text-[#f97316]" />
                      {city}
                    </span>
                  ))}
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-orange-50 border border-orange-200 rounded-full text-sm font-semibold text-[#f97316]">
                    + 480 More Cities
                  </span>
                </div>

                {/* CTA card */}
                <div className="mt-8 bg-gradient-to-br from-[#f97316] to-orange-600 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-xl mb-2">Serving Your City?</h4>
                  <p className="text-white/85 text-sm mb-4 leading-relaxed">
                    Contact us to confirm delivery and installation timelines
                    for your location across India.
                  </p>
                  <Button
                    asChild
                    data-ocid="coverage.get_quote_button"
                    className="bg-white text-[#f97316] hover:bg-orange-50 font-bold px-6"
                  >
                    <Link to="/contact">
                      Get a Quote for Your City{" "}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── 8. PRODUCT CATALOGUE SECTION ─────────────────────────────── */}
      <section
        data-ocid="catalogue.section"
        className="bg-white py-24 px-4 sm:px-6 lg:px-8"
      >
        <FadeSection>
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Catalogue info */}
                <div>
                  <span className="text-brand text-xs font-semibold uppercase tracking-widest">
                    Product Brochure
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
                    Download Our{" "}
                    <span className="text-[#f97316]">Product Catalogue</span>
                  </h2>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                    Our comprehensive product catalogue includes complete
                    specifications, dimensions, materials, and pricing
                    guidelines for our full range of commercial kitchen
                    equipment and fabrication solutions.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Full product specifications & dimensions",
                      "Material grades & finish options",
                      "Custom fabrication capabilities",
                      "Pan India installation services",
                      "Pricing on request for all categories",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#f97316] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="button"
                      data-ocid="catalogue.request_button"
                      onClick={() => {
                        const msg = encodeURIComponent(
                          "Hello, I'd like to request the product catalogue for Standard Commercial Kitchen Equipments.",
                        );
                        window.open(
                          `https://wa.me/917396669997?text=${msg}`,
                          "_blank",
                        );
                      }}
                      className="bg-[#f97316] text-white hover:bg-orange-600 font-bold px-7 orange-glow flex items-center gap-2"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Request Brochure on WhatsApp
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      data-ocid="catalogue.contact_button"
                      className="border-[#f97316] text-[#f97316] hover:bg-orange-50 font-semibold px-7"
                    >
                      <Link to="/contact">Contact for PDF Copy</Link>
                    </Button>
                  </div>
                </div>

                {/* Right: Catalogue cover card */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-[3/4] max-w-xs mx-auto lg:max-w-none">
                    <img
                      src="/assets/generated/hero-kitchen.dim_1920x1080.jpg"
                      alt="Product catalogue cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="w-10 h-1 bg-[#f97316] rounded-full mb-3" />
                      <div className="text-white/60 text-xs uppercase tracking-widest mb-1">
                        Standard Commercial Kitchen Equipments
                      </div>
                      <div className="text-white font-extrabold text-xl leading-tight">
                        Product Catalogue
                      </div>
                      <div className="text-white/60 text-xs mt-1">
                        2024 — 2025 Edition
                      </div>
                      <div className="mt-3 inline-flex items-center gap-1.5 bg-[#f97316] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        <span>📋</span> Full Specifications Inside
                      </div>
                    </div>
                  </div>
                  {/* floating badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#f97316] rounded-full flex items-center justify-center shadow-lg shadow-orange-200">
                    <span className="text-white font-extrabold text-[10px] text-center leading-tight uppercase tracking-tight">
                      Free
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── 9. QUICK INQUIRY FORM ───────────────────────────────────────── */}
      <section
        data-ocid="inquiry.section"
        className="bg-light-section py-20 px-4 sm:px-6 lg:px-8"
      >
        <FadeSection>
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <span className="text-brand text-xs font-semibold uppercase tracking-widest">
                Free Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                Get a Free Quote
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                Tell us about your kitchen requirements and our experts will get
                back to you within 24 hours — across India.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-md">
              <InquiryForm />
            </div>
          </div>
        </FadeSection>
      </section>
    </div>
  );
}
