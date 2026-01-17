import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Star, Heart, RefreshCw, Plus, Minus } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Newsletter from "@/components/shared/Newsletter";
import { productDetails } from "@/data/productdetails";
import { products } from "@/data/products";

type TabType = "description" | "additional" | "reviews";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<TabType>("description");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = productDetails.find((p) => p.slug === slug);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-light text-charcoal mb-4">Product Not Found</h1>
            <Link to="/products" className="text-gold hover:underline">
              Back to Products
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedProductsData = product.relatedProducts
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 4);

  // Get first related product for "You May Also Like" section
  const mayAlsoLikeProduct = relatedProductsData[0];

  const renderStars = (rating: number, size: number = 14) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= rating ? "fill-gold text-gold" : "text-gray-300"}
        />
      ))}
    </div>
  );

  return (
    <Layout>
      <Helmet>
        <title>{product.name} | Marble & Tiles</title>
        <meta name="description" content={product.shortDescription} />
      </Helmet>

      {/* Hero Section with Breadcrumb */}
      <section className="relative h-[200px] md:h-[320px] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <img src="/assets/marble-warehouse.jpg" alt="" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="container-luxury w-full text-center">
          <nav className="relative flex items-center justify-center gap-2 text-white/70 text-[11px] font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>&gt;</span>
            <Link to="/products" className="hover:text-gold transition-colors">Products</Link>
            <span>&gt;</span>
            <span className="text-white">{product.categories[0]}</span>
          </nav>
        </div>
      </section>

      {/* Product Main Section */}
      <section className="py-12 bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="relative bg-gray-50">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.slice(0, 0).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`bg-gray-50 border-2 transition-colors ${selectedImage === index ? "border-gold" : "border-transparent hover:border-gray-300"
                        }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - View ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Right Column - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5"
            >
              {/* Brand */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-stone-gray">Brand:</span>
                <span className="text-charcoal font-bold">{product.brand}</span>
              </div>

              {/* Product Name */}
              <h1 className="text-3xl lg:text-4xl font-bold text-charcoal leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                {renderStars(Math.round(product.rating))}
                <span className="text-stone-gray text-sm">({product.reviewCount} Customer Review)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                {product.salePrice ? (
                  <>
                    <span className="text-3xl font-bold text-charcoal">${product.salePrice.toFixed(2)}</span>
                    <span className="text-xl font-bold text-stone-gray line-through">${product.price.toFixed(2)}</span>
                  </>
                ) : product.priceMax ? (
                  <span className="text-3xl font-bold text-charcoal">
                    ${product.price.toFixed(2)} – ${product.priceMax.toFixed(2)}
                  </span>
                ) : (
                  <span className="text-3xl font-bold text-charcoal">${product.price.toFixed(2)}</span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-stone-gray text-[15px] leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Guarantee */}
              <div className="pt-2">
                <p className="text-charcoal text-sm font-bold mb-2">Guarantee Safe & Secure Checkout</p>
                <div className="flex flex-wrap gap-2">
                  <div className="w-10 h-7 bg-[#1A1F71] rounded flex items-center justify-center text-white text-[8px] font-bold">VISA</div>
                  <div className="w-10 h-7 bg-[#EB001B] rounded flex items-center justify-center text-white text-[8px] font-bold">MC</div>
                  <div className="w-10 h-7 bg-[#006FCF] rounded flex items-center justify-center text-white text-[8px] font-bold">AMEX</div>
                  <div className="w-10 h-7 bg-[#FF6000] rounded flex items-center justify-center text-white text-[8px] font-bold">DISC</div>
                  <div className="w-10 h-7 bg-gray-700 rounded flex items-center justify-center text-white text-[8px] font-bold">DC</div>
                  <div className="w-10 h-7 bg-[#003087] rounded flex items-center justify-center text-white text-[8px] font-bold">PP</div>
                  <div className="w-10 h-7 bg-white border border-gray-300 rounded flex items-center justify-center text-[8px] font-bold">GPay</div>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center border border-gray-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 h-10 flex items-center justify-center border-x border-gray-300 text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button className="flex-1 bg-charcoal text-white md:px-6 px-4 md:py-2.5 py-3 text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-gold transition-colors">
                  Add to Cart
                </button>
              </div>

              {/* Wishlist & Compare */}
              <div className="flex items-center gap-4 text-sm">
                <button className="flex items-center gap-2 text-stone-gray hover:text-gold transition-colors">
                  <Heart size={16} />
                  <span>Add To Wishlist</span>
                </button>
                <button className="flex items-center gap-2 text-stone-gray hover:text-gold transition-colors">
                  <RefreshCw size={16} />
                  <span>Compare</span>
                </button>
              </div>

              {/* Meta Info */}
              <div className="space-y-2 text-sm border-t border-gray-200 pt-5">
                <p>
                  <span className="text-charcoal font-bold">SKU:</span>{" "}
                  <span className="text-stone-gray">{product.sku}</span>
                </p>
                <p>
                  <span className="text-charcoal font-bold">Categories:</span>{" "}
                  <span className="text-gold">{product.categories.join(", ")}</span>
                </p>
                <p>
                  <span className="text-charcoal font-bold">Tags:</span>{" "}
                  <span className="text-gold">{product.tags.join(", ")}</span>
                </p>
                <p>
                  <span className="text-charcoal font-bold">Brand:</span>{" "}
                  <span className="text-gold">{product.brand}</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Tabs Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 border-t border-gray-200 pt-10"
          >
            <div className="flex flex-wrap gap-4 md:gap-8 mb-8 border-b border-gray-200">
              {[
                { id: "description", label: "Description" },
                { id: "additional", label: "Additional Information" },
                { id: "reviews", label: `Reviews (${product.reviewCount})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`pb-3 text-base font-bold transition-colors relative ${activeTab === tab.id
                    ? "text-charcoal font-bold border-b-2 border-charcoal -mb-[1px]"
                    : "text-stone-gray hover:text-charcoal"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="max-w-4xl">
                <p className="text-stone-gray text-[15px] leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* Additional Info Tab */}
            {activeTab === "additional" && (
              <div className="max-w-2xl">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-charcoal font-bold w-1/3">Weight</td>
                      <td className="py-3 text-stone-gray">{product.additionalInfo.weight}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-charcoal font-bold">Dimensions</td>
                      <td className="py-3 text-stone-gray">{product.additionalInfo.dimensions}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div className="max-w-4xl">
                {product.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold text-sm">
                            {review.author.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-charcoal font-bold">{review.author}</h4>
                              <span className="text-stone-gray text-xs">{review.date}</span>
                            </div>
                            {renderStars(review.rating)}
                            <p className="text-stone-gray text-sm mt-2 leading-relaxed">{review.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-stone-gray">No reviews yet.</p>
                )}
              </div>
            )}
          </motion.div>

          {/* You May Also Like Section */}
          {mayAlsoLikeProduct && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-charcoal mb-8">You May Also Like...</h2>
              <div className="max-w-sm">
                <Link to={`/products/${mayAlsoLikeProduct.slug}`} className="group block">
                  <div className="relative bg-gray-50 mb-4 overflow-hidden">
                    {mayAlsoLikeProduct.isOnSale && mayAlsoLikeProduct.discount && (
                      <span className="absolute top-3 left-3 z-10 bg-gold text-white text-[10px] uppercase px-2 py-1">
                        Save - {mayAlsoLikeProduct.discount}%
                      </span>
                    )}
                    <img
                      src={mayAlsoLikeProduct.image}
                      alt={mayAlsoLikeProduct.title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-charcoal text-base font-bold mb-2 group-hover:text-gold transition-colors">
                    {mayAlsoLikeProduct.title}
                  </h3>
                  {renderStars(mayAlsoLikeProduct.rating)}
                  <div className="mt-2 text-sm">
                    {mayAlsoLikeProduct.salePrice ? (
                      <>
                        <span className="text-stone-gray line-through mr-2">${mayAlsoLikeProduct.price.toFixed(2)}</span>
                        <span className="text-charcoal font-bold">${mayAlsoLikeProduct.salePrice.toFixed(2)}</span>
                      </>
                    ) : mayAlsoLikeProduct.priceMax ? (
                      <span className="text-charcoal font-bold">
                        ${mayAlsoLikeProduct.price.toFixed(2)} – ${mayAlsoLikeProduct.priceMax.toFixed(2)}
                      </span>
                    ) : (
                      <span className="text-charcoal font-bold">${mayAlsoLikeProduct.price.toFixed(2)}</span>
                    )}
                  </div>
                </Link>
              </div>
            </motion.div>
          )}

          {/* Related Products */}
          {relatedProductsData.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-charcoal mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProductsData.map((item) => item && (
                  <Link
                    key={item.id}
                    to={`/products/${item.slug}`}
                    className="group"
                  >
                    <div className="relative bg-gray-50 mb-4 overflow-hidden">
                      {item.isOnSale && item.discount && (
                        <span className="absolute top-3 left-3 z-10 bg-gold text-white text-[10px] uppercase px-2 py-1">
                          Save - {item.discount}%
                        </span>
                      )}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-charcoal text-base font-bold mb-2 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    {renderStars(item.rating)}
                    <div className="mt-2 text-sm">
                      {item.salePrice ? (
                        <>
                          <span className="text-stone-gray line-through mr-2">${item.price.toFixed(2)}</span>
                          <span className="text-charcoal font-bold">${item.salePrice.toFixed(2)}</span>
                        </>
                      ) : item.priceMax ? (
                        <span className="text-charcoal font-bold">
                          ${item.price.toFixed(2)} – ${item.priceMax.toFixed(2)}
                        </span>
                      ) : (
                        <span className="text-charcoal font-bold">${item.price.toFixed(2)}</span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
}
