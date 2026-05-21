import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Layers,
  Layout,
  MapPin,
  Package,
  Settings,
  Shield,
  Thermometer,
  Users,
  Wind,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Layout,
    title: "Custom Kitchen Design & Planning",
    description:
      "Complete kitchen layout design tailored to your space, workflow, and capacity needs — optimised for efficiency and FSSAI compliance.",
  },
  {
    icon: Layers,
    title: "Stainless Steel Fabrication",
    description:
      "Custom SS counters, work tables, wall shelves, and fabrication units crafted from food-grade 304-grade stainless steel.",
  },
  {
    icon: Package,
    title: "Equipment Supply & Installation",
    description:
      "Sourcing and installing commercial-grade kitchen equipment from leading manufacturers with certified commissioning.",
  },
  {
    icon: Wind,
    title: "Exhaust & Ventilation Systems",
    description:
      "Commercial exhaust hoods, ducting, and ventilation systems engineered for high-volume cooking environments.",
  },
  {
    icon: Thermometer,
    title: "Refrigeration Solutions",
    description:
      "Walk-in coolers, reach-in refrigerators, display freezers, and cold-room setups for commercial kitchens and food courts.",
  },
  {
    icon: Settings,
    title: "After-Sales Support & Maintenance",
    description:
      "AMC contracts, preventive maintenance schedules, emergency repair, and genuine spare parts — across all major cities in India.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    desc: "We understand your requirements, space, and budget at no cost.",
  },
  {
    number: "02",
    title: "Site Survey & Planning",
    desc: "Our engineers visit your site and draft a complete kitchen plan.",
  },
  {
    number: "03",
    title: "Custom Design Approval",
    desc: "We present 2D/3D layouts and revise until you're fully satisfied.",
  },
  {
    number: "04",
    title: "Manufacturing & Procurement",
    desc: "Equipment is manufactured or procured to exact specifications.",
  },
  {
    number: "05",
    title: "Professional Installation",
    desc: "Our certified team installs, connects, and commissions every unit.",
  },
  {
    number: "06",
    title: "Training & Handover",
    desc: "Staff training and full documentation handover on completion.",
  },
  {
    number: "07",
    title: "Ongoing Support",
    desc: "AMC plans and on-call service engineers keep you running 24/7.",
  },
];

const whyUs = [
  {
    icon: MapPin,
    title: "Pan India Service Network",
    desc: "Certified service partners in 100+ cities across all 28 states — fast response wherever you are.",
  },
  {
    icon: Award,
    title: "ISO Quality Standards",
    desc: "Every fabrication and installation follows strict quality protocols and food-grade material standards.",
  },
  {
    icon: Users,
    title: "Dedicated Project Manager",
    desc: "A single point of contact manages your project from consultation to handover.",
  },
  {
    icon: Shield,
    title: "1-Year Installation Warranty",
    desc: "All installations backed by a one-year comprehensive warranty covering parts and labour.",
  },
];

export default function ServicesPage() {
  return (
    <div data-ocid="services.page">
      {/* HERO */}
      <section
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{ minHeight: 480 }}
        data-ocid="services.hero_section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/services-hero.dim_1600x700.jpg')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        <div className="relative z-10 px-4 py-24 pt-40">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#f97316] font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-5 leading-tight max-w-4xl mx-auto"
          >
            Complete Commercial Kitchen Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
          >
            From consultation to installation — we deliver end-to-end kitchen
            equipment services across Pan India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <Link to="/contact" data-ocid="services.hero_cta_quote">
              <Button
                size="lg"
                className="bg-[#f97316] hover:bg-[#ea6a0a] text-white font-bold px-8 py-3 rounded-lg orange-glow transition-smooth"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/products" data-ocid="services.hero_cta_products">
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-smooth"
              >
                Explore Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        className="bg-white py-20 px-4 section-divider"
        data-ocid="services.grid_section"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-[#f97316] font-semibold text-sm tracking-widest uppercase mb-3">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#111827] mb-4">
              Everything Your Commercial Kitchen Needs
            </h2>
            <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
              From initial planning to long-term maintenance, we are your
              single-source partner for commercial kitchen excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white border border-[#e5e7eb] rounded-xl p-7 flex flex-col gap-4 group hover:border-[#f97316]/40 hover:shadow-md transition-smooth card-hover"
                data-ocid={`services.card.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-[#fff7ed] border border-[#fed7aa] flex items-center justify-center group-hover:bg-[#f97316]/10 transition-smooth">
                  <service.icon className="w-6 h-6 text-[#f97316]" />
                </div>
                <h3 className="text-[#111827] font-display font-bold text-lg leading-snug">
                  {service.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <Link
                  to="/contact"
                  data-ocid={`services.card_cta.${i + 1}`}
                  className="inline-flex items-center text-sm font-semibold text-[#f97316] hover:text-[#ea6a0a] transition-colors gap-1 group/link"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section
        className="bg-[#f5f5f5] py-20 px-4 section-divider"
        data-ocid="services.process_section"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-[#f97316] font-semibold text-sm tracking-widest uppercase mb-3">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#111827] mb-4">
              How We Work
            </h2>
            <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
              A structured, transparent approach from first contact to long-term
              ongoing support.
            </p>
          </motion.div>

          {/* Desktop grid — row 1: steps 1–4, row 2: steps 5–7 centred */}
          <div className="hidden md:block">
            <div className="relative">
              <div
                className="absolute top-[2.4rem] left-[calc(12.5%+2.5rem)] right-[calc(12.5%+2.5rem)] h-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, #f97316 0%, #fed7aa 100%)",
                }}
                aria-hidden="true"
              />
              <div className="grid grid-cols-4 gap-x-4">
                {processSteps.slice(0, 4).map((step, i) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col items-center text-center"
                    data-ocid={`services.step.${i + 1}`}
                  >
                    <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#f97316] flex items-center justify-center mb-5 shadow-lg relative z-10">
                      <span className="text-white font-display font-extrabold text-xl">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-[#111827] font-display font-bold text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative mt-10">
              <div
                className="absolute top-[2.4rem] left-[calc(16.67%+2.5rem)] right-[calc(16.67%+2.5rem)] h-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, #f97316 0%, #fed7aa 100%)",
                }}
                aria-hidden="true"
              />
              <div className="grid grid-cols-3 max-w-[75%] mx-auto gap-x-4">
                {processSteps.slice(4).map((step, i) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col items-center text-center"
                    data-ocid={`services.step.${i + 5}`}
                  >
                    <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#f97316] flex items-center justify-center mb-5 shadow-lg relative z-10">
                      <span className="text-white font-display font-extrabold text-xl">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-[#111827] font-display font-bold text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical steps */}
          <div className="md:hidden flex flex-col gap-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex gap-5 items-start relative"
                data-ocid={`services.step_mobile.${i + 1}`}
              >
                {i < processSteps.length - 1 && (
                  <div
                    className="absolute left-[1.625rem] top-[3.5rem] w-0.5 h-16"
                    style={{
                      background:
                        "linear-gradient(180deg, #f97316 0%, #fed7aa 100%)",
                    }}
                    aria-hidden="true"
                  />
                )}
                <div className="w-[3.25rem] h-[3.25rem] rounded-full bg-[#f97316] flex-shrink-0 flex items-center justify-center shadow-md z-10">
                  <span className="text-white font-display font-extrabold text-base">
                    {step.number}
                  </span>
                </div>
                <div className="pb-8">
                  <h3 className="text-[#111827] font-display font-bold text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className="bg-white py-20 px-4 section-divider"
        data-ocid="services.why_section"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-[#f97316] font-semibold text-sm tracking-widest uppercase mb-3">
              Why Standard CKE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#111827] mb-4">
              Why Choose Us
            </h2>
            <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
              Built on a foundation of quality, reliability, and Pan India
              reach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center bg-[#fafafa] border border-[#e5e7eb] rounded-xl p-7 group hover:border-[#f97316]/40 hover:shadow-md transition-smooth card-hover"
                data-ocid={`services.why.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-[#fff7ed] border border-[#fed7aa] flex items-center justify-center mb-5 group-hover:bg-[#f97316]/10 transition-smooth">
                  <item.icon className="w-7 h-7 text-[#f97316]" />
                </div>
                <h3 className="text-[#111827] font-display font-bold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAN INDIA CTA */}
      <section
        className="bg-[#f5f5f5] py-20 px-4 section-divider"
        data-ocid="services.panindia_section"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-[#e5e7eb] shadow-sm p-10 md:p-14 text-center"
          >
            <span className="inline-flex items-center gap-2 text-[#f97316] font-semibold text-sm tracking-widest uppercase mb-4">
              <MapPin className="w-4 h-4" />
              Pan India Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#111827] mb-5">
              Serving All Across India
            </h2>
            <p className="text-[#6b7280] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              We serve hotels, restaurants, bakeries, hospitals, and food courts
              across all major cities in India — from Delhi to Kochi, Mumbai to
              Kolkata, and everywhere in between.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {[
                "Hotels",
                "Restaurants",
                "Bakeries",
                "Hospitals",
                "Cloud Kitchens",
                "Food Courts",
                "Catering Services",
                "Cafés",
              ].map((industry) => (
                <span
                  key={industry}
                  className="inline-flex items-center gap-1.5 bg-[#f5f5f5] border border-[#e5e7eb] text-[#374151] rounded-full px-3.5 py-1.5 text-sm font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f97316] flex-shrink-0" />
                  {industry}
                </span>
              ))}
            </div>
            <Link to="/contact" data-ocid="services.panindia_cta">
              <Button
                size="lg"
                className="bg-[#f97316] hover:bg-[#ea6a0a] text-white font-bold px-10 py-3 rounded-lg orange-glow transition-smooth"
              >
                Get a Free Site Visit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
