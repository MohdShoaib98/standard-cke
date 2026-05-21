import {
  PRODUCTS,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const SPEC_LABELS: [keyof import("@/types/products").ProductSpec, string][] = [
  ["material", "Material"],
  ["dimensions", "Dimensions"],
  ["capacity", "Capacity"],
  ["powerRequirement", "Power Requirement"],
  ["usageType", "Usage Type"],
  ["finish", "Finish"],
  ["warranty", "Warranty"],
  ["customization", "Customization Availability"],
];

export default function ProductDetailPage() {
  const { slug } = useParams({ from: "/products/$slug" });
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div
        className="min-h-screen bg-white flex items-center justify-center"
        data-ocid="product_detail.error_state"
      >
        <div className="text-center max-w-md px-4">
          <h1 className="text-2xl font-display font-bold text-[#111827] mb-3">
            Product Not Found
          </h1>
          <p className="text-[#6b7280] mb-6">
            This product doesn&apos;t exist or may have been removed.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-brand hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-smooth"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.relatedSlugs).slice(0, 3);
  const productIndex = PRODUCTS.findIndex((p) => p.slug === slug) + 1;

  return (
    <div
      className="min-h-screen bg-white"
      data-ocid={`product_detail.page.${productIndex}`}
    >
      {/* Breadcrumb */}
      <div className="bg-[#f5f5f5] border-b border-[#e5e7eb] pt-24 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav
            className="flex items-center gap-1.5 text-sm text-[#9ca3af]"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <Link to="/products" className="hover:text-brand transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-[#374151] font-medium truncate max-w-[200px]">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="bg-white py-12 border-b border-[#e5e7eb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-sm aspect-[4/3]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <span className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-brand text-xs font-semibold px-3 py-1.5 rounded-full w-fit">
                {product.category}
              </span>
              <h1
                data-ocid={`product_detail.name.${productIndex}`}
                className="text-3xl sm:text-4xl font-display font-bold text-[#111827] leading-tight"
              >
                {product.name}
              </h1>
              <p className="text-[#6b7280] text-base leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#9ca3af] font-medium">Material:</span>
                <span className="text-[#374151] font-semibold">
                  {product.material}
                </span>
              </div>
              <div>
                <h2 className="text-[#111827] font-display font-bold text-base mb-3">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-[#374151]"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-brand flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact"
                data-ocid={`product_detail.request_quote_button.${productIndex}`}
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-lg transition-smooth shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 w-full sm:w-auto"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section
        className="bg-[#f5f5f5] py-14"
        data-ocid={`product_detail.specs.${productIndex}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#111827] mb-2">
              Technical Specifications
            </h2>
            <p className="text-[#6b7280] text-sm">
              Full specification details for {product.name}
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#e5e7eb] shadow-sm">
            <table
              className="w-full text-sm"
              aria-label={`Specifications for ${product.name}`}
            >
              <thead>
                <tr className="bg-[#efefef] border-b border-[#e5e7eb]">
                  <th
                    scope="col"
                    className="py-3.5 px-5 text-left text-xs font-bold text-[#374151] uppercase tracking-wider w-1/3"
                  >
                    Specification
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-5 text-left text-xs font-bold text-[#374151] uppercase tracking-wider"
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {SPEC_LABELS.map(([key, label], i) => (
                  <tr
                    key={key}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}
                  >
                    <td className="py-3.5 px-5 font-semibold text-[#374151] border-b border-[#f0f0f0] align-top">
                      {label}
                    </td>
                    <td className="py-3.5 px-5 text-[#6b7280] border-b border-[#f0f0f0]">
                      {product.specs[key]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section
          className="bg-white py-14"
          data-ocid={`product_detail.related.${productIndex}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#111827] mb-2">
                Related Products
              </h2>
              <p className="text-[#6b7280] text-sm">
                Other equipment you might need
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((related, i) => (
                <article
                  key={related.id}
                  data-ocid={`product_detail.related_item.${i + 1}`}
                  className="group bg-white border border-[#e5e7eb] rounded-xl overflow-hidden card-hover card-shadow flex flex-col"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={related.image}
                      alt={related.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 text-[#374151] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#e5e7eb] shadow-sm">
                      {related.category}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col gap-2.5 flex-1">
                    <h3 className="text-[#111827] font-display font-bold text-base leading-snug">
                      {related.name}
                    </h3>
                    <p className="text-[#6b7280] text-xs leading-relaxed line-clamp-2 flex-1">
                      {related.description}
                    </p>
                    <div className="flex gap-2 mt-1">
                      <Link
                        to="/products/$slug"
                        params={{ slug: related.slug }}
                        data-ocid={`product_detail.related_view_button.${i + 1}`}
                        className="flex-1 inline-flex items-center justify-center gap-1 bg-[#f5f5f5] hover:bg-[#e5e7eb] text-[#111827] font-semibold text-xs px-3 py-2 rounded-lg transition-smooth border border-[#e5e7eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                      >
                        View Details
                        <ChevronRight
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                        />
                      </Link>
                      <Link
                        to="/contact"
                        data-ocid={`product_detail.related_quote_button.${i + 1}`}
                        className="flex-1 inline-flex items-center justify-center gap-1 bg-brand hover:bg-orange-600 text-white font-semibold text-xs px-3 py-2 rounded-lg transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                      >
                        Get Quote
                        <ArrowRight
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Products */}
      <section className="bg-[#f5f5f5] border-t border-[#e5e7eb] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 flex-wrap">
          <Link
            to="/products"
            data-ocid="product_detail.back_button"
            className="inline-flex items-center gap-2 text-[#6b7280] hover:text-brand font-medium text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All Products
          </Link>
          <Link
            to="/contact"
            data-ocid="product_detail.cta_button"
            className="inline-flex items-center gap-2 bg-brand hover:bg-orange-600 text-white font-bold text-sm px-6 py-3 rounded-lg transition-smooth shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
