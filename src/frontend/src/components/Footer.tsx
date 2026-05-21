import { Link } from "@tanstack/react-router";
import {
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const productCategories = [
  "Commercial Burners",
  "Stainless Steel Tables",
  "Exhaust Hoods & Ventilation",
  "Refrigeration Equipment",
  "Bakery Equipment",
  "Fast Food Equipment",
  "Commercial Sinks",
  "Storage Racks",
];

const services = [
  "Kitchen Design & Planning",
  "Equipment Fabrication",
  "Installation Services",
  "Annual Maintenance",
  "Custom Fabrication",
  "Consultation",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-[#f5f5f5] border-t border-[#e5e7eb]">
      {/* Main footer content */}
      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-brand rounded-sm flex items-center justify-center shadow-glow-sm flex-shrink-0">
                <span className="text-white font-display font-bold text-base">
                  SK
                </span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[#111827] font-display font-bold text-sm">
                  Standard Commercial
                </span>
                <span className="text-[#9ca3af] text-[10px] tracking-widest uppercase">
                  Kitchen Equipments
                </span>
              </div>
            </div>
            <p className="text-[#6b7280] text-sm leading-relaxed mb-4">
              Premium commercial kitchen equipment solutions trusted by hotels,
              restaurants, bakeries, and cloud kitchens across India.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#fff7ed] border border-[#fdba74] rounded-full px-3 py-1.5 text-brand text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 bg-brand rounded-full inline-block animate-pulse" />
              Pan India Service Coverage
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[#111827] font-display font-semibold text-xs uppercase tracking-widest mb-5">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productCategories.map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-[#6b7280] hover:text-brand transition-colors text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#111827] font-display font-semibold text-xs uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-[#6b7280] hover:text-brand transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#111827] font-display font-semibold text-xs uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917396669997"
                  className="flex items-start gap-3 text-[#6b7280] hover:text-brand transition-colors group"
                >
                  <Phone
                    size={15}
                    className="mt-0.5 flex-shrink-0 text-[#9ca3af] group-hover:text-brand transition-colors"
                  />
                  <span className="text-sm">+91 7396669997</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919666015353"
                  className="flex items-start gap-3 text-[#6b7280] hover:text-brand transition-colors group"
                >
                  <Phone
                    size={15}
                    className="mt-0.5 flex-shrink-0 text-[#9ca3af] group-hover:text-brand transition-colors"
                  />
                  <span className="text-sm">+91 9666015353</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:standardcke@gmail.com"
                  className="flex items-start gap-3 text-[#6b7280] hover:text-brand transition-colors group"
                >
                  <Mail
                    size={15}
                    className="mt-0.5 flex-shrink-0 text-[#9ca3af] group-hover:text-brand transition-colors"
                  />
                  <span className="text-sm break-all">
                    standardcke@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=7-2-49/11/A+Sanath+Nagar+Balkampet+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#6b7280] hover:text-brand transition-colors group"
                >
                  <MapPin
                    size={15}
                    className="mt-0.5 flex-shrink-0 text-[#9ca3af] group-hover:text-brand transition-colors"
                  />
                  <span className="text-sm leading-relaxed">
                    #7-2-49/11/A, Sanath Nagar,
                    <br />
                    Balkampet Flyover Below,
                    <br />
                    Near Railway Station, Hyderabad, Telangana
                  </span>
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 bg-white hover:bg-brand/10 border border-[#e5e7eb] hover:border-brand/40 rounded flex items-center justify-center text-[#9ca3af] hover:text-brand transition-smooth shadow-xs"
              >
                <Facebook size={14} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 bg-white hover:bg-brand/10 border border-[#e5e7eb] hover:border-brand/40 rounded flex items-center justify-center text-[#9ca3af] hover:text-brand transition-smooth shadow-xs"
              >
                <Instagram size={14} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 bg-white hover:bg-brand/10 border border-[#e5e7eb] hover:border-brand/40 rounded flex items-center justify-center text-[#9ca3af] hover:text-brand transition-smooth shadow-xs"
              >
                <Linkedin size={14} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e5e7eb] py-4 bg-white">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#9ca3af]">
          <p>
            © {year} Standard Commercial Kitchen Equipments. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline inline-flex items-center gap-0.5"
            >
              caffeine.ai <ExternalLink size={10} />
              <span className="sr-only">caffeine.ai (opens in new tab)</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
