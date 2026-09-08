import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const variant = product.variants[0];

  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <p className="product-brand">{product.brand}</p>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="price-section">
          <span className="selling-price">
            ₹{variant.price.toLocaleString("en-IN")}
          </span>

          <span className="mrp">
            ₹{variant.mrp.toLocaleString("en-IN")}
          </span>
        </div>

        <button
          onClick={() => navigate(`/product/${product.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;