import { PRODUCTS } from "@/data/products";
import {
  CATEGORY_SLUGS,
  FILTER_CATEGORIES,
  SLUG_TO_CATEGORY,
} from "@/types/products";
import type { Product, ProductCategory } from "@/types/products";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function ProductsPage() {
  const navigate = useNavigate({ from: "/products" });
  const search = useSearch({ from: "/products" }) as { category?: string };
  const categorySlug = search.category ?? "all";
  const activeCategory: "All" | ProductCategory =
    SLUG_TO_CATEGORY[categorySlug] ?? "All";

  const filtered =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  function handleFilter(cat: "All" | ProductCategory) {
    const slug = CATEGORY_SLUGS[cat];
    navigate({ search: slug === "all" ? {} : { category: slug } });
  }

  return (
    <div className="min-h-screen bg-white" data-ocid="products.page">
      {/* Hero Banner */}
      <section className="relative bg-[#f5f5f5] border-b border-[#e5e7eb] pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(249,115,22,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(156,163,175,0.12) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
            <span
              className="w-1.5 h-1.5 rounded-full bg-brand"
              aria-hidden="true"
            />
            <span className="text-brand text-sm font-semibold tracking-wide uppercase">
              Product Catalogue
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#111827] mb-5 leading-tight">
            Our <span className="text-brand">Products</span>
          </h1>
          <p className="text-[#6b7280] text-lg sm:text-xl max-w-2xl mx-auto">
            Commercial &amp; Industrial Kitchen Equipment for Every Need — Pan
            India
          </p>
          <nav
            className="mt-6 flex items-center justify-center gap-1.5 text-sm text-[#9ca3af]"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-[#374151] font-medium">Products</span>
          </nav>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section
        className="bg-white border-b border-[#e5e7eb] shadow-sm sticky top-[72px] z-30"
        data-ocid="products.filter.section"
        aria-label="Product category filters"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <div
            className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-none"
            role="tablist"
            aria-label="Filter products by category"
          >
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => handleFilter(cat)}
                data-ocid={`products.filter.${CATEGORY_SLUGS[cat]}`}
                className={[
                  "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-smooth border whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400",
                  activeCategory === cat
                    ? "bg-brand text-white border-brand shadow-md"
                    : "bg-white text-[#6b7280] border-[#e5e7eb] hover:border-orange-300 hover:text-[#111827]",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white py-14" data-ocid="products.grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-[#9ca3af] text-sm mb-8">
            Showing{" "}
            <span className="text-[#111827] font-semibold">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "product" : "products"}
            {activeCategory !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="text-brand font-medium">{activeCategory}</span>
              </>
            )}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="bg-[#f5f5f5] border-t border-[#e5e7eb] py-16"
        data-ocid="products.cta.section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
            <span
              className="w-1.5 h-1.5 rounded-full bg-brand"
              aria-hidden="true"
            />
            <span className="text-brand text-sm font-semibold tracking-wide uppercase">
              Custom Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111827] mb-4">
            Looking for custom specifications?
          </h2>
          <p className="text-[#6b7280] text-lg mb-8 max-w-xl mx-auto">
            Contact us for a tailored quote. We deliver commercial kitchen
            solutions across all of India.
          </p>
          <Link
            to="/contact"
            data-ocid="products.cta.request_quote_button"
            className="inline-flex items-center gap-2 bg-brand hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-lg transition-smooth shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            Request Custom Quote
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article
      data-ocid={`products.item.${index + 1}`}
      className="group bg-white border border-[#e5e7eb] rounded-xl overflow-hidden card-hover card-shadow flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-[#374151] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#e5e7eb] shadow-sm">
          {product.category}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-[#111827] font-display font-bold text-lg leading-snug">
          {product.name}
        </h3>
        <p className="text-[#6b7280] text-sm leading-relaxed line-clamp-2 flex-1">
          {product.description}
        </p>
        <p className="text-xs text-[#9ca3af]">
          <span className="text-[#374151] font-medium">Material:</span>{" "}
          {product.material}
        </p>
        <div className="flex gap-2 mt-1">
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            data-ocid={`products.view_details_button.${index + 1}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#f5f5f5] hover:bg-[#e5e7eb] text-[#111827] font-semibold text-sm px-4 py-2.5 rounded-lg transition-smooth border border-[#e5e7eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            View Details
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            data-ocid={`products.request_quote_button.${index + 1}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-brand hover:bg-orange-600 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            Request Quote
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
