import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [confirmed, setConfirmed] = useState(false);

  const {
    product,
    variant,
    emiPlan,
  } = location.state || {};

  // =========================================================
  // HANDLE MISSING ORDER DATA
  // =========================================================

  if (!product || !variant || !emiPlan) {
    return (
      <div className="confirmation-page">
        <div className="confirmation-card empty-confirmation">
          <h1>No Order Details Found</h1>

          <p>
            Please select a product and EMI plan
            before proceeding.
          </p>

          <button
            type="button"
            className="confirmation-back-button"
            onClick={() => navigate("/")}
          >
            Go to Marketplace
          </button>
        </div>
      </div>
    );
  }

  // =========================================================
  // PRODUCT IMAGE
  // =========================================================

  const productImage =
    variant.image ||
    product.images?.[0] ||
    "";

  // =========================================================
  // FORMAT VALUES
  // =========================================================

  const productPrice =
    Number(variant.price).toLocaleString("en-IN");

  const monthlyEmi =
    Number(emiPlan.monthlyAmount).toLocaleString(
      "en-IN"
    );

  // =========================================================
  // CONFIRM ORDER
  // =========================================================

  const handleConfirm = () => {
    setConfirmed(true);
  };

  // =========================================================
  // SUCCESS STATE
  // =========================================================

  if (confirmed) {
    return (
      <div className="confirmation-page">

        <div className="confirmation-success-card">

          <div className="success-icon">
            ✓
          </div>

          <h1>
            Order Confirmed!
          </h1>

          <p>
            Your order has been successfully
            confirmed.
          </p>

          <div className="success-order-details">

            <div>
              <span>Product</span>
              <strong>
                {product.name}
              </strong>
            </div>

            <div>
              <span>Variant</span>
              <strong>
                {variant.color} • {variant.storage}
              </strong>
            </div>

            <div>
              <span>EMI Plan</span>
              <strong>
                {emiPlan.label}
              </strong>
            </div>

            <div>
              <span>Monthly EMI</span>
              <strong>
                ₹{monthlyEmi}/month
              </strong>
            </div>

          </div>

          <button
            type="button"
            className="confirmation-home-button"
            onClick={() => navigate("/")}
          >
            Back to Marketplace
          </button>

        </div>

      </div>
    );
  }

  // =========================================================
  // CONFIRMATION PAGE
  // =========================================================

  return (
    <div className="confirmation-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="confirmation-header">

        <h1>
          Confirm Your Order
        </h1>

        <p>
          Please review your product and EMI
          details before proceeding.
        </p>

      </div>

      {/* =====================================================
          ORDER CARD
      ===================================================== */}

      <div className="confirmation-card">

        {/* ===================================================
            PRODUCT IMAGE
        =================================================== */}

        <div className="confirmation-product-image-wrapper">

          <img
            src={productImage}
            alt={`${product.name} ${variant.color}`}
            className="confirmation-product-image"
            onError={(event) => {
              if (
                product.images?.[0] &&
                event.currentTarget.src !==
                  product.images[0]
              ) {
                event.currentTarget.src =
                  product.images[0];
              }
            }}
          />

        </div>

        {/* ===================================================
            PRODUCT INFORMATION
        =================================================== */}

        <div className="confirmation-product-info">

          <p className="confirmation-brand">
            {product.brand}
          </p>

          <h2>
            {product.name}
          </h2>

          <p className="confirmation-variant">
            {variant.color} • {variant.storage}
          </p>

          {/* PRICE */}

          <div className="confirmation-price">
            ₹{productPrice}
          </div>

          {/* =================================================
              ORDER DETAILS
          ================================================= */}

          <div className="confirmation-details">

            <div className="confirmation-detail-row">
              <span>Product</span>

              <strong>
                {product.name}
              </strong>
            </div>

            <div className="confirmation-detail-row">
              <span>Color</span>

              <strong>
                {variant.color}
              </strong>
            </div>

            <div className="confirmation-detail-row">
              <span>Storage</span>

              <strong>
                {variant.storage}
              </strong>
            </div>

            <div className="confirmation-detail-row">
              <span>Product Price</span>

              <strong>
                ₹{productPrice}
              </strong>
            </div>

            <div className="confirmation-detail-row">
              <span>EMI Plan</span>

              <strong>
                {emiPlan.label}
              </strong>
            </div>

            <div className="confirmation-detail-row emi-row">
              <span>Monthly EMI</span>

              <strong>
                ₹{monthlyEmi}
                <small>/month</small>
              </strong>
            </div>

            <div className="confirmation-detail-row">
              <span>Interest</span>

              <strong>
                {Number(emiPlan.interest) === 0
                  ? "0%"
                  : `${emiPlan.interest}%`}
              </strong>
            </div>

          </div>

          {/* =================================================
              ACTION BUTTONS
          ================================================= */}

          <div className="confirmation-actions">

            <button
              type="button"
              className="confirmation-back-button"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>

            <button
              type="button"
              className="confirmation-confirm-button"
              onClick={handleConfirm}
            >
              Confirm & Proceed
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ConfirmationPage;