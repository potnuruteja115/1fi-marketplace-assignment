import { useCallback, useState } from "react";
import ProductCard from "../components/ProductCard";
import ShopTabs from "../components/ShopTabs";
import { getProducts } from "../services/api";
import useFetch from "../hooks/useFetch";

function MarketplacePage() {
  const [activeTab, setActiveTab] = useState("1Fi Marketplace");

  const fetchProducts = useCallback(() => {
    return getProducts();
  }, []);

  const {
    data: products,
    loading,
    error,
  } = useFetch(fetchProducts);

  return (
    <div className="marketplace-page">
      <header className="marketplace-header">
        <h1>Shop</h1>
        <p>Everything you need, available on EMI.</p>
      </header>

      <ShopTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {activeTab === "Top Brands" && (
        <div className="placeholder">
          <h2>Top Brands</h2>
          <p>Top brands will be available here soon.</p>
        </div>
      )}

      {activeTab === "Nearby Stores" && (
        <div className="placeholder">
          <h2>Nearby Stores</h2>
          <p>Nearby stores will be available here soon.</p>
        </div>
      )}

      {activeTab === "1Fi Marketplace" && (
        <section className="marketplace-section">
          <div className="section-heading">
            <div>
              <h2>1Fi Marketplace</h2>
              <p>Shop your favourite smartphones with flexible EMI plans.</p>
            </div>

            {products && <span>{products.length} Products</span>}
          </div>

          {loading && (
            <div className="status-message">
              Loading products...
            </div>
          )}

          {error && (
            <div className="status-message error">
              Failed to load products: {error}
            </div>
          )}

          {!loading && !error && products && (
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default MarketplacePage;