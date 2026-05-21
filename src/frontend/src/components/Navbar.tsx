import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#e5e7eb] shadow-subtle"
            : "bg-white/90 backdrop-blur-sm border-b border-[#e5e7eb]"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              data-ocid="nav.logo"
            >
              <Logo size={40} className="flex-shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="text-[#111827] font-display font-bold text-sm lg:text-[15px] tracking-wide">
                  Standard Commercial Kitchen Equipments
                </span>
                <span className="text-[#f97316] text-[10px] tracking-widest uppercase font-medium">
                  Pan India Commercial Kitchen Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative px-3.5 py-2 text-sm text-[#374151] font-medium tracking-wide transition-colors duration-200 hover:text-brand group"
                  activeProps={{
                    className:
                      "relative px-3.5 py-2 text-sm font-medium tracking-wide text-brand",
                  }}
                  data-ocid={`nav.${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex flex-col gap-0.5">
                <a
                  href="tel:+917396669997"
                  className="flex items-center gap-2 text-[#6b7280] hover:text-brand transition-colors duration-200 text-sm font-medium"
                  data-ocid="nav.phone_link"
                >
                  <Phone size={14} strokeWidth={2} />
                  <span>+91 7396669997</span>
                </a>
                <a
                  href="tel:+919666015353"
                  className="flex items-center gap-2 text-[#6b7280] hover:text-brand transition-colors duration-200 text-sm font-medium"
                  data-ocid="nav.phone_link_2"
                >
                  <Phone size={14} strokeWidth={2} />
                  <span>+91 9666015353</span>
                </a>
              </div>
              <Link to="/contact" data-ocid="nav.cta_button">
                <Button className="bg-brand hover:bg-brand-dark text-white font-semibold px-5 h-9 text-sm shadow-none orange-glow transition-smooth">
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[#374151] hover:text-brand p-2 rounded-md transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-ocid="nav.hamburger"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
          role="presentation"
        >
          <div className="absolute inset-0 bg-[#111827]/40" />
          <nav
            className="absolute top-0 right-0 h-full w-72 bg-white border-l border-[#e5e7eb] flex flex-col pt-20 pb-8 px-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            data-ocid="nav.mobile_drawer"
          >
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 text-[#6b7280] hover:text-brand p-2 rounded-md transition-colors"
              aria-label="Close menu"
              data-ocid="nav.mobile_close"
            >
              <X size={22} />
            </button>
            <div className="flex flex-col gap-1 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-[#374151] hover:text-brand hover:bg-[#fff7ed] rounded-md transition-colors font-medium text-[15px] border-b border-[#f3f4f6] last:border-0"
                  activeProps={{
                    className:
                      "px-4 py-3 text-brand bg-[#fff7ed] rounded-md font-semibold text-[15px] border-b border-[#f3f4f6] last:border-0",
                  }}
                  data-ocid={`nav.mobile.${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="space-y-3 pt-6 border-t border-[#e5e7eb]">
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+917396669997"
                  className="flex items-center gap-3 text-[#6b7280] hover:text-brand transition-colors py-1.5 text-sm"
                >
                  <Phone size={16} />
                  <span>+91 7396669997</span>
                </a>
                <a
                  href="tel:+919666015353"
                  className="flex items-center gap-3 text-[#6b7280] hover:text-brand transition-colors py-1.5 text-sm"
                >
                  <Phone size={16} />
                  <span>+91 9666015353</span>
                </a>
              </div>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block"
                data-ocid="nav.mobile_cta"
              >
                <Button className="w-full bg-brand hover:bg-brand-dark text-white font-semibold orange-glow">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
