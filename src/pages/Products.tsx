import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { LayoutGrid, List, Star, ChevronDown, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Newsletter from "@/components/shared/Newsletter";
import { products, Product } from "@/data/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ITEMS_PER_PAGE = 12;

type SortOption = "default" | "popularity" | "rating" | "latest" | "price-low" | "price-high";

export default function Products() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
      case "price-high":
        return sorted.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "latest":
        return sorted.reverse();
      default:
        return sorted;
    }
  }, [sortBy]);

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={star <= rating ? "fill-gold text-gold" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  const formatPrice = (product: Product) => {
    if (product.salePrice) {
      return (
        <>
          <span className="text-stone-gray line-through mr-2">${product.price.toFixed(2)}</span>
          <span className="text-charcoal font-medium">${product.salePrice.toFixed(2)}</span>
        </>
      );
    }
    if (product.priceMax) {
      return (
        <span className="text-charcoal font-medium">
          ${product.price.toFixed(2)} – ${product.priceMax.toFixed(2)}
        </span>
      );
    }
    return <span className="text-charcoal font-medium">${product.price.toFixed(2)}</span>;
  };

  return (
    <Layout>
      <Helmet>
        <title>Shop | Marble & Tiles</title>
        <meta name="description" content="Browse our premium collection of marble and natural stone products." />
      </Helmet>

      <PageHero
        title="Shop"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Products" }]}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container-luxury">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 pb-6 border-b border-border">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 transition-colors ${
                    viewMode === "grid" ? "text-gold" : "text-stone-gray hover:text-charcoal"
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 transition-colors ${
                    viewMode === "list" ? "text-gold" : "text-stone-gray hover:text-charcoal"
                  }`}
                  aria-label="List view"
                >
                  <List size={20} />
                </button>
              </div>
              <span className="text-stone-gray text-sm">
                Showing {startIndex + 1}–{Math.min(endIndex, sortedProducts.length)} of {sortedProducts.length} results
              </span>
            </div>

            <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
              <SelectTrigger className="w-[200px] border-border">
                <SelectValue placeholder="Default sorting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default sorting</SelectItem>
                <SelectItem value="popularity">Sort by popularity</SelectItem>
                <SelectItem value="rating">Sort by average rating</SelectItem>
                <SelectItem value="latest">Sort by latest</SelectItem>
                <SelectItem value="price-low">Sort by price: low to high</SelectItem>
                <SelectItem value="price-high">Sort by price: high to low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Grid View */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden mb-4 bg-muted">
                    {product.isOnSale && product.discount && (
                      <span className="absolute top-4 left-4 z-10 bg-gold text-white text-xs uppercase px-3 py-1">
                        Save - {product.discount}%
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-charcoal text-lg font-light mb-2 group-hover:text-gold transition-colors">
                    {product.title}
                  </h3>
                  {renderStars(product.rating)}
                  <div className="mt-2 text-sm">{formatPrice(product)}</div>
                </Link>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === "list" && (
            <div className="space-y-8">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row gap-6 pb-8 border-b border-border last:border-0"
                >
                  <Link
                    to={`/products/${product.slug}`}
                    className="relative w-full md:w-[300px] aspect-square overflow-hidden flex-shrink-0 bg-muted group"
                  >
                    {product.isOnSale && product.discount && (
                      <span className="absolute top-4 left-4 z-10 bg-gold text-white text-xs uppercase px-3 py-1">
                        Save - {product.discount}%
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex-1">
                    <Link to={`/products/${product.slug}`}>
                      <h3 className="text-charcoal text-2xl font-light mb-2 hover:text-gold transition-colors">
                        {product.title}
                      </h3>
                    </Link>
                    {renderStars(product.rating)}
                    <div className="mt-2 text-lg">{formatPrice(product)}</div>
                    <p className="mt-4 text-stone-gray text-sm leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                    <Link
                      to={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 mt-6 bg-charcoal text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-gold transition-colors"
                    >
                      Add to Cart
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-10 h-10 flex items-center justify-center transition-colors ${
                    currentPage === page
                      ? "bg-gold text-white"
                      : "bg-muted text-charcoal hover:bg-gold hover:text-white"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
}
