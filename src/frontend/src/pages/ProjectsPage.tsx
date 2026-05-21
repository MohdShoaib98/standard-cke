import { Link } from "@tanstack/react-router";
import { ChevronRight, Clock, MapPin, Shield, Star, Truck } from "lucide-react";
import { motion } from "motion/react";

const completedProjects = [
  {
    id: 1,
    image: "/assets/project_fab_02.png",
    title: "Tea Stall Counter",
    description:
      "Compact SS chai counter with integrated burner station and storage compartments.",
    location: "Hyderabad",
    year: "2024",
    tag: "Tea Stall",
  },
  {
    id: 2,
    image: "/assets/project_fab_11.png",
    title: "Tea & Beverage Counter",
    description:
      "Custom stainless steel beverage station with multi-vessel setup and display shelf.",
    location: "Secunderabad",
    year: "2024",
    tag: "Tea Stall",
  },
  {
    id: 3,
    image: "/assets/project_fab_03.png",
    title: "Pan Shop Counter",
    description:
      "Traditional pan shop fabricated in enclosed SS cabinet with ingredient display sections.",
    location: "Hyderabad",
    year: "2023",
    tag: "Pan Shop",
  },
  {
    id: 4,
    image: "/assets/project_fab_13.png",
    title: "Pan & Snack Counter",
    description:
      "Custom pan shop with glass display windows and organised ingredient storage.",
    location: "Medchal",
    year: "2024",
    tag: "Pan Shop",
  },
  {
    id: 5,
    image: "/assets/project_fab_05.png",
    title: "Tiffin Serving Counter",
    description:
      "Multi-compartment SS tiffin station with bain-marie inserts and serving rail.",
    location: "Hyderabad",
    year: "2024",
    tag: "Tiffin Counter",
  },
  {
    id: 6,
    image: "/assets/project_fab_14.png",
    title: "Tiffin & Lunch Counter",
    description:
      "Row-style SS serving line with large capacity containers for high-volume lunch service.",
    location: "Kukatpally",
    year: "2024",
    tag: "Tiffin Counter",
  },
  {
    id: 7,
    image: "/assets/project_fab_04.png",
    title: "Chat Stall",
    description:
      "Open-front SS chat counter with display area and organised spice & ingredient storage.",
    location: "Hyderabad",
    year: "2023",
    tag: "Chat Stall",
  },
  {
    id: 8,
    image: "/assets/project_fab_15.png",
    title: "Chat & Street Food Stall",
    description:
      "Multi-zone street food fabrication with separate preparation, cooking, and serving sections.",
    location: "LB Nagar",
    year: "2024",
    tag: "Chat Stall",
  },
  {
    id: 9,
    image: "/assets/project_fab_01.png",
    title: "Display & Serving Counter",
    description:
      "Long SS counter with integrated glass display, ideal for bakeries and sweet shops.",
    location: "Hyderabad",
    year: "2024",
    tag: "Display Counter",
  },
  {
    id: 10,
    image: "/assets/project_fab_08.png",
    title: "Glass Display Counter",
    description:
      "Premium retail-style glass display unit with illuminated interior and SS base frame.",
    location: "Ameerpet",
    year: "2024",
    tag: "Display Counter",
  },
  {
    id: 11,
    image: "/assets/project_fab_10.png",
    title: "Commercial Serving Station",
    description:
      "Multi-unit SS serving line designed for canteen and cafeteria-scale food service.",
    location: "Begumpet",
    year: "2023",
    tag: "Serving Station",
  },
  {
    id: 12,
    image: "/assets/project_fab_07.png",
    title: "Custom Food Kiosk",
    description:
      "Freestanding SS kiosk with canopy, storage below, and branded fascia panel.",
    location: "Hyderabad",
    year: "2024",
    tag: "Food Kiosk",
  },
  {
    id: 13,
    image: "/assets/project_fab_12.png",
    title: "Mobile Food Kiosk",
    description:
      "Compact SS mobile food station with lockable wheels for street-side and event use.",
    location: "Nizamabad",
    year: "2024",
    tag: "Food Kiosk",
  },
  {
    id: 14,
    image: "/assets/project_fab_06.png",
    title: "Kitchen Fabrication Setup",
    description:
      "Full SS commercial kitchen install with counters, prep tables, and wash station.",
    location: "Hyderabad",
    year: "2024",
    tag: "Fabrication",
  },
  {
    id: 15,
    image: "/assets/project_fab_09.png",
    title: "SS Workstation Setup",
    description:
      "Industrial SS prep and workstation area with under-counter storage and drainage.",
    location: "Warangal",
    year: "2023",
    tag: "Fabrication",
  },
];

const fabricationCategories = [
  {
    image: "/assets/project_fab_02.png",
    title: "Tea Stalls",
    description:
      "Custom SS chai counters with burner integration, storage, and clean finish for high-traffic beverage service.",
  },
  {
    image: "/assets/project_fab_03.png",
    title: "Pan Shop Counters",
    description:
      "Enclosed SS cabinets with ingredient display shelves tailored for pan and mukhwas shops.",
  },
  {
    image: "/assets/project_fab_05.png",
    title: "Tiffin Counters",
    description:
      "Multi-compartment serving stations with bain-marie inserts, built for volume lunch service.",
  },
  {
    image: "/assets/project_fab_04.png",
    title: "Chat Stalls",
    description:
      "Open-front SS chat counters with defined zones for chaat prep, garnish, and customer display.",
  },
  {
    image: "/assets/project_fab_08.png",
    title: "Display Counters",
    description:
      "Premium glass-top SS display units with illuminated interiors for sweets, snacks, and retail.",
  },
  {
    image: "/assets/project_fab_10.png",
    title: "Serving Stations",
    description:
      "Multi-unit serving lines for canteens, cafeterias, and food courts built for continuous high-volume use.",
  },
  {
    image: "/assets/project_fab_07.png",
    title: "Custom Food Kiosks",
    description:
      "Freestanding SS kiosks with canopy, branding panels, and optional wheeled mobility.",
  },
  {
    image: "/assets/project_fab_06.png",
    title: "Kitchen Fabrication",
    description:
      "End-to-end commercial kitchen SS fabrication — counters, prep tables, wash areas, and storage.",
  },
];

const whyStats = [
  { value: "200+", label: "Projects Completed", icon: Star },
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "Pan India", label: "Delivery & Install", icon: Truck },
  { value: "100%", label: "Food-Grade SS Only", icon: Shield },
];

const TAG_COLORS: Record<string, string> = {
  "Tea Stall": "bg-amber-50 text-amber-700 border-amber-200",
  "Pan Shop": "bg-orange-50 text-orange-700 border-orange-200",
  "Tiffin Counter": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Chat Stall": "bg-red-50 text-red-700 border-red-200",
  "Display Counter": "bg-blue-50 text-blue-700 border-blue-200",
  "Serving Station": "bg-teal-50 text-teal-700 border-teal-200",
  "Food Kiosk": "bg-purple-50 text-purple-700 border-purple-200",
  Fabrication: "bg-slate-50 text-slate-700 border-slate-200",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white" data-ocid="projects.page">
      {/* ── Hero ── */}
      <section className="relative bg-[#f5f6f7] border-b border-[#e2e4e8] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,#c8cacc 0,#c8cacc 1px,transparent 0,transparent 48px)," +
              "repeating-linear-gradient(180deg,#c8cacc 0,#c8cacc 1px,transparent 0,transparent 48px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f6f7]/50 to-[#f5f6f7]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <nav
            className="flex items-center gap-1.5 text-sm text-[#6b7280] mb-8"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-[#f97316] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#9ca3af]" />
            <span className="text-[#111827] font-medium">Projects</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/25 rounded-full">
              Real Projects · Real Customers
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4 tracking-tight leading-tight">
              Completed Projects &amp; Custom Fabrication
            </h1>
            <p className="text-lg text-[#6b7280] leading-relaxed max-w-2xl">
              Custom stainless steel fabrication for tea stalls, pan shops,
              tiffin counters, chat stalls, food kiosks, and full commercial
              kitchen setups — delivered across Hyderabad, Telangana, and Pan
              India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 1: Completed Customer Projects ── */}
      <section
        className="bg-white py-16 md:py-24"
        data-ocid="projects.completed.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#f97316]" />
              <span className="text-[#f97316] text-xs font-semibold uppercase tracking-widest">
                Our Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-3">
              Completed Customer Projects
            </h2>
            <p className="text-[#6b7280] max-w-xl text-base">
              Every project below is a real installation — fabricated and
              delivered to customers across Hyderabad and Telangana.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="projects.completed.list"
          >
            {completedProjects.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                data-ocid={`projects.completed.item.${project.id}`}
                className="group bg-white border border-[#e5e7eb] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ paddingBottom: "66.67%" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full border ${
                        TAG_COLORS[project.tag] ??
                        "bg-[#f97316]/10 text-[#f97316] border-[#f97316]/20"
                      }`}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#111827] mb-1.5 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#6b7280] mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-[#9ca3af]">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </span>
                    <span className="text-xs font-medium text-[#9ca3af] bg-[#f3f4f6] px-2 py-0.5 rounded-full">
                      {project.year}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Custom Fabrication Projects ── */}
      <section
        className="bg-[#f9fafb] border-t border-b border-[#e5e7eb] py-16 md:py-24"
        data-ocid="projects.fabrication.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#f97316]" />
              <span className="text-[#f97316] text-xs font-semibold uppercase tracking-widest">
                What We Build
              </span>
              <span className="h-0.5 w-8 bg-[#f97316]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
              Custom Stainless Steel Fabrication
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto text-base">
              Every counter, kiosk, and stall is custom-designed and fabricated
              using food-grade stainless steel — built to order, built to last.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            data-ocid="projects.fabrication.list"
          >
            {fabricationCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
                data-ocid={`projects.fabrication.item.${i + 1}`}
                className="group bg-white border border-[#e5e7eb] rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ paddingBottom: "75%" }}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-[#111827] mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#6b7280] leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Choose Our Fabrication ── */}
      <section
        className="bg-white py-16 md:py-20"
        data-ocid="projects.whychoose.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#f97316]" />
              <span className="text-[#f97316] text-xs font-semibold uppercase tracking-widest">
                Why Choose Us
              </span>
              <span className="h-0.5 w-8 bg-[#f97316]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827]">
              Why Choose Our Fabrication
            </h2>
          </motion.div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            data-ocid="projects.stats.list"
          >
            {whyStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  data-ocid={`projects.stat.${i + 1}`}
                  className="flex flex-col items-center text-center p-6 bg-[#f9fafb] border border-[#e5e7eb] rounded-xl hover:border-[#f97316]/40 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-full bg-[#f97316]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#f97316]" />
                  </div>
                  <div className="text-3xl font-bold text-[#f97316] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#6b7280] font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section
        className="bg-[#f5f6f7] border-t border-[#e2e4e8] py-12"
        data-ocid="projects.cta.section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3">
              Need a Custom Fabrication?
            </h3>
            <p className="text-[#6b7280] mb-7 text-base">
              Get a free consultation and quote for your tea stall, pan shop,
              tiffin counter, or commercial kitchen setup.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/917396669997?text=Hi%2C%20I%20need%20a%20quote%20for%20a%20custom%20fabrication%20project"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="projects.cta.whatsapp_button"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25d366] text-white font-semibold rounded-lg hover:bg-[#20be5c] transition-colors duration-200 shadow-sm"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <Link
                to="/contact"
                data-ocid="projects.cta.contact_button"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f97316] text-white font-semibold rounded-lg hover:bg-[#ea6c10] transition-colors duration-200 shadow-sm"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
