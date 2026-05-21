import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  Factory,
  Globe,
  Hammer,
  HeartHandshake,
  Layers,
  LifeBuoy,
  MapPin,
  Ruler,
  Settings,
  Shield,
  Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ── Intersection-observer hook ───────────────────────────────────────────────
function useInView(threshold = 0.15) {
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
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Animated stat counter ────────────────────────────────────────────────────
function StatCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.3);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 50);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ── Section heading ──────────────────────────────────────────────────────────
function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {label && (
        <span className="inline-block text-brand text-xs font-semibold uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111827] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#6b7280] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ── Value card (light) ───────────────────────────────────────────────────────
function ValueCard({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  delay: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      data-ocid="about.value_card"
      style={{ transitionDelay: `${delay}ms` }}
      className={`bg-white border border-[#d1d5db] rounded-xl p-6 flex flex-col gap-4 card-shadow card-hover transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center border border-orange-100">
        <Icon className="w-6 h-6 text-brand" />
      </div>
      <h3 className="font-display font-bold text-lg text-[#111827]">{title}</h3>
      <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

// ── What We Do item ──────────────────────────────────────────────────────────
function ServiceItem({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4 items-start p-5 bg-white border border-[#e5e7eb] rounded-xl card-shadow hover:border-orange-200 transition-smooth group">
      <div className="shrink-0 w-11 h-11 rounded-lg bg-orange-50 flex items-center justify-center border border-orange-100 group-hover:bg-orange-100 transition-smooth">
        <Icon className="w-5 h-5 text-brand" />
      </div>
      <div>
        <h4 className="font-semibold text-[#111827] mb-1">{title}</h4>
        <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
export default function AboutPage() {
  const storyAnim = useInView();
  const ctaAnim = useInView();

  return (
    <div data-ocid="about.page">
      {/* ── 1. HERO BANNER ─────────────────────────────────────────────────── */}
      <section
        data-ocid="about.hero_section"
        className="relative min-h-[400px] md:min-h-[500px] flex items-end pb-16 pt-32"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/about-hero-kitchen.dim_1600x640.jpg')",
          }}
        />
        {/* Light overlay — keeps industrial feel while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/70 via-[#111827]/60 to-[#111827]/85" />
        <div className="container relative z-10 px-4 md:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-white/60 mb-5"
          >
            <Link to="/" className="hover:text-white transition-colors-smooth">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            About Standard Commercial{" "}
            <span className="text-brand">Kitchen Equipments</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            India's trusted commercial kitchen equipment partner — designing,
            manufacturing, and installing premium industrial kitchens across the
            nation.
          </p>
        </div>
      </section>

      {/* ── 2. COMPANY STORY ───────────────────────────────────────────────── */}
      <section
        data-ocid="about.story_section"
        className="bg-white py-20 md:py-28 section-divider"
      >
        <div className="container px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div
              className={`relative transition-all duration-700 ${
                storyAnim.inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/assets/custom_kitchen_counter-019e4c08-b70d-767d-a74a-ef59c51469fc.jpg"
                  alt="Industrial stainless steel commercial kitchen fabrication"
                  className="w-full h-80 md:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Corner accents */}
              <div className="absolute -bottom-5 -left-5 w-28 h-28 border-l-4 border-b-4 border-brand rounded-bl-2xl opacity-50" />
              <div className="absolute -top-5 -right-5 w-16 h-16 border-r-4 border-t-4 border-[#9ca3af]/50 rounded-tr-xl" />
            </div>

            {/* Text */}
            <div
              ref={storyAnim.ref}
              className={`transition-all duration-700 delay-150 ${
                storyAnim.inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <span className="inline-block text-brand text-xs font-semibold uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111827] mb-6 leading-tight">
                Hyderabad's Premier Commercial Kitchen Solutions Provider
              </h2>
              <p className="text-[#6b7280] text-base leading-relaxed mb-5">
                Established in Hyderabad, Telangana, Standard Commercial Kitchen
                Equipments has grown from a regional supplier into a Pan India
                leader in commercial kitchen solutions. With decades of combined
                expertise, our team specializes in custom stainless steel
                fabrication, complete kitchen design, and end-to-end
                installation.
              </p>
              <p className="text-[#6b7280] text-base leading-relaxed mb-5">
                We serve the full spectrum of hospitality and food service
                industries — from five-star hotels and fine dining restaurants
                to multi-unit hospital kitchens, catering facilities, and modern
                cloud kitchen operators.
              </p>
              <p className="text-[#6b7280] text-base leading-relaxed mb-8">
                Our in-house fabrication unit ensures every piece of stainless
                steel equipment meets commercial-grade standards, backed by
                manufacturer warranties and our own service network.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "ISO-grade stainless steel fabrication",
                  "Pan India delivery and installation",
                  "Dedicated after-sales service team",
                  "Custom kitchen design & planning",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                    <span className="text-[#374151] text-sm font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PAN INDIA STATEMENT ─────────────────────────────────────────── */}
      <section
        data-ocid="about.pan_india_section"
        className="bg-[#f5f5f5] py-16 md:py-20 section-divider"
      >
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-l-4 border-brand rounded-r-2xl p-8 md:p-10 card-shadow">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mt-1">
                  <Globe className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="font-display font-bold text-xl md:text-2xl text-[#111827] mb-3 leading-snug">
                    We deliver commercial kitchen solutions to every corner of
                    India —{" "}
                    <span className="text-brand">
                      from metro cities to tier-2 towns.
                    </span>
                  </p>
                  <p className="text-[#6b7280] text-base leading-relaxed">
                    Our base in Hyderabad, Telangana serves clients across all
                    28 states. Whether you're setting up a flagship hotel
                    kitchen in Mumbai, a cloud kitchen in Bengaluru, or a
                    hospital canteen in Lucknow — our team is ready to deliver
                    and install anywhere in India.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-5">
                    {["28+ States", "100+ Cities", "Pan India Coverage"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. KEY STATS ───────────────────────────────────────────────────── */}
      <section
        data-ocid="about.stats_section"
        className="bg-white py-16 section-divider"
      >
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {(
              [
                {
                  value: 500,
                  suffix: "+",
                  label: "Projects Completed",
                  icon: Settings,
                },
                {
                  value: 10,
                  suffix: "+",
                  label: "Years of Expertise",
                  icon: Award,
                },
                {
                  value: 28,
                  suffix: "+",
                  label: "States Covered",
                  icon: MapPin,
                },
                {
                  value: 200,
                  suffix: "+",
                  label: "Satisfied Clients",
                  icon: HeartHandshake,
                },
              ] as const
            ).map((s) => (
              <div
                key={s.label}
                data-ocid="about.stat_card"
                className="bg-[#f5f5f5] border border-[#e5e7eb] rounded-xl p-6 text-center hover:border-orange-200 transition-smooth group"
              >
                <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-smooth">
                  <s.icon className="w-5 h-5 text-brand" />
                </div>
                <div className="font-display font-extrabold text-4xl md:text-5xl text-brand mb-1">
                  <StatCounter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[#6b7280] text-sm font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CORE VALUES ─────────────────────────────────────────────────── */}
      <section
        data-ocid="about.values_section"
        className="bg-[#f5f5f5] py-20 md:py-28 section-divider"
      >
        <div className="container px-4 md:px-8">
          <SectionHeading
            label="Values"
            title="What We Stand For"
            subtitle="Our core principles guide every project, every partnership, and every installation we undertake across India."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ValueCard
              icon={Shield}
              title="Quality First"
              desc="Every piece of equipment we supply is crafted from industrial-grade materials meeting rigorous commercial standards. No compromises."
              delay={0}
            />
            <ValueCard
              icon={Globe}
              title="Pan India Reach"
              desc="Our nationwide service network means no client is too far. We deliver, install, and support clients across all 28 Indian states."
              delay={80}
            />
            <ValueCard
              icon={Ruler}
              title="Custom Solutions"
              desc="Every kitchen is unique. We design and fabricate bespoke stainless steel equipment tailored precisely to your space and workflow."
              delay={160}
            />
            <ValueCard
              icon={LifeBuoy}
              title="After-Sales Support"
              desc="Our dedicated maintenance team provides rapid-response service, routine maintenance, and spare parts — long after installation."
              delay={240}
            />
          </div>
        </div>
      </section>

      {/* ── 6. WHAT WE DO ──────────────────────────────────────────────────── */}
      <section
        data-ocid="about.services_section"
        className="bg-white py-20 md:py-28 section-divider"
      >
        <div className="container px-4 md:px-8">
          <SectionHeading
            label="What We Do"
            title="Our Capabilities"
            subtitle="End-to-end commercial kitchen solutions — from concept to commissioning and beyond."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            <ServiceItem
              icon={Factory}
              title="Equipment Manufacturing"
              desc="In-house production of commercial burners, cooking ranges, exhaust hoods, and custom fabrication to precise dimensional specs."
            />
            <ServiceItem
              icon={Layers}
              title="Stainless Steel Fabrication"
              desc="Custom SS304 and SS316 fabrication including counters, shelving, trolleys, sinks, and bespoke kitchen furniture."
            />
            <ServiceItem
              icon={Ruler}
              title="Kitchen Design & Planning"
              desc="Professional kitchen layout design optimized for workflow, hygiene compliance, and maximum operational efficiency."
            />
            <ServiceItem
              icon={Hammer}
              title="Installation Services"
              desc="Certified installation teams across India handle complete kitchen setups — from gas connections to equipment commissioning."
            />
            <ServiceItem
              icon={LifeBuoy}
              title="After-Sales Support"
              desc="Annual maintenance contracts (AMC), emergency breakdown service, and spare parts supply for all equipment categories."
            />
            <ServiceItem
              icon={Wrench}
              title="Repair & Maintenance"
              desc="Scheduled and on-demand servicing by trained technicians to keep your kitchen running at peak performance year-round."
            />
          </div>
        </div>
      </section>

      {/* ── 7. CTA SECTION ─────────────────────────────────────────────────── */}
      <section
        data-ocid="about.cta_section"
        className="bg-[#f5f5f5] py-20 md:py-28 section-divider"
      >
        <div className="container px-4 md:px-8">
          <div
            ref={ctaAnim.ref}
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
              ctaAnim.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-block text-brand text-xs font-semibold uppercase tracking-widest mb-4">
              Pan India Service Available
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111827] mb-5 leading-tight">
              Ready to Build Your{" "}
              <span className="text-brand">Dream Kitchen?</span>
            </h2>
            <p className="text-[#6b7280] text-lg leading-relaxed mb-10">
              Whether you're equipping a hotel kitchen in Mumbai, a cloud
              kitchen in Bengaluru, or a hospital canteen in Chennai — we
              deliver and install premium commercial kitchen solutions anywhere
              across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                data-ocid="about.contact_cta_button"
                className="bg-brand hover:bg-orange-600 text-white font-semibold px-8 orange-glow transition-smooth"
              >
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                data-ocid="about.products_cta_button"
                className="border-[#d1d5db] hover:border-brand hover:text-brand text-[#374151] transition-smooth px-8"
              >
                <Link to="/products">View Products</Link>
              </Button>
            </div>
            <p className="mt-8 text-[#9ca3af] text-sm">
              📍 Serving 28+ States · 100+ Cities · Pan India Coverage
            </p>

            {/* Contact person card */}
            <div className="mt-10 inline-flex items-center gap-4 bg-white border border-[#e5e7eb] rounded-2xl px-6 py-4 card-shadow mx-auto">
              <div className="w-12 h-12 rounded-full bg-orange-100 border-2 border-orange-300 flex items-center justify-center flex-shrink-0">
                <span className="font-display font-bold text-brand text-lg">
                  MS
                </span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#111827] text-sm">
                  MD Sohail
                </p>
                <p className="text-[#6b7280] text-xs">
                  Director &amp; Contact Person
                </p>
                <a
                  href="tel:+917396669997"
                  className="text-brand text-xs font-medium hover:underline"
                >
                  +91 7396669997
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
