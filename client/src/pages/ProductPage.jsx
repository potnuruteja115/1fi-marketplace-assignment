import {
  useCallback,
  useMemo,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  getProductById,
  getEmiPlans,
} from "../services/api";

import useFetch from "../hooks/useFetch";

import EmiPlanCard from "../components/EmiPlanCard";

function ProductPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  // =========================================================
  // STATE
  // =========================================================

  const [
    selectedColor,
    setSelectedColor,
  ] = useState(null);

  const [
    selectedStorage,
    setSelectedStorage,
  ] = useState(null);

  const [
    selectedPlan,
    setSelectedPlan,
  ] = useState(null);

  // =========================================================
  // FETCH PRODUCT
  // =========================================================

  const fetchProduct = useCallback(() => {
    return getProductById(id);
  }, [id]);

  const {
    data: product,
    loading: productLoading,
    error: productError,
  } = useFetch(fetchProduct);

  // =========================================================
  // DEFAULT VARIANT
  // =========================================================

  const defaultVariant = useMemo(() => {
    if (
      !product?.variants ||
      product.variants.length === 0
    ) {
      return null;
    }

    return product.variants[0];
  }, [product]);

  // =========================================================
  // ACTIVE COLOR
  // =========================================================

  const activeColor =
    selectedColor ||
    defaultVariant?.color ||
    "";

  // =========================================================
  // ACTIVE STORAGE
  // =========================================================

  const activeStorage =
    selectedStorage ||
    defaultVariant?.storage ||
    "";

  // =========================================================
  // SELECTED VARIANT
  // =========================================================

  const selectedVariant = useMemo(() => {
    if (!product?.variants) {
      return null;
    }

    const variant =
      product.variants.find(
        (item) =>
          item.color === activeColor &&
          item.storage === activeStorage
      );

    return variant || defaultVariant;
  }, [
    product,
    activeColor,
    activeStorage,
    defaultVariant,
  ]);

  // =========================================================
  // FETCH EMI PLANS
  // =========================================================

  const fetchEmiPlans = useCallback(() => {
    if (!selectedVariant) {
      return Promise.resolve(null);
    }

    return getEmiPlans(
      id,
      activeColor,
      activeStorage
    );
  }, [
    id,
    activeColor,
    activeStorage,
    selectedVariant,
  ]);

  const {
    data: emiData,
    loading: emiLoading,
    error: emiError,
  } = useFetch(fetchEmiPlans);

  // =========================================================
  // EMI PLANS
  // =========================================================

  const emiPlans = useMemo(() => {
    if (
      emiData?.plans &&
      Array.isArray(emiData.plans)
    ) {
      return emiData.plans;
    }

    if (!selectedVariant) {
      return [];
    }

    const price =
      Number(selectedVariant.price);

    const tenures = [
      3,
      6,
      9,
      12,
    ];

    return tenures.map((tenure) => ({
      id:
        `${id}-${activeColor}-${activeStorage}-${tenure}`,

      tenure,

      monthlyAmount:
        Math.ceil(
          price / tenure
        ),

      interest: 0,

      label:
        `${tenure} Months`,
    }));
  }, [
    emiData,
    selectedVariant,
    id,
    activeColor,
    activeStorage,
  ]);

  // =========================================================
  // COLOR CHANGE
  // =========================================================

  const handleColorChange = (color) => {
    setSelectedColor(color);

    setSelectedPlan(null);

    const variantsForColor =
      product.variants.filter(
        (variant) =>
          variant.color === color
      );

    const sameStorageExists =
      variantsForColor.some(
        (variant) =>
          variant.storage ===
          activeStorage
      );

    if (!sameStorageExists) {
      setSelectedStorage(
        variantsForColor[0]?.storage ||
          null
      );
    }
  };

  // =========================================================
  // STORAGE CHANGE
  // =========================================================

  const handleStorageChange = (
    storage
  ) => {
    setSelectedStorage(storage);

    setSelectedPlan(null);
  };

  // =========================================================
  // STORAGE AVAILABILITY
  // =========================================================

  const isStorageAvailable = (
    storage
  ) => {
    if (!product?.variants) {
      return false;
    }

    return product.variants.some(
      (variant) =>
        variant.color === activeColor &&
        variant.storage === storage
    );
  };

  // =========================================================
  // PROCEED
  // =========================================================

  const handleProceed = () => {
    if (
      !selectedPlan ||
      !selectedVariant
    ) {
      return;
    }

    navigate(
      "/confirmation",
      {
        state: {
          product,
          variant: selectedVariant,
          emiPlan: selectedPlan,
        },
      }
    );
  };

  // =========================================================
  // LOADING
  // =========================================================

  if (productLoading) {
    return (
      <div className="status-message">
        <h2>
          Loading product...
        </h2>
      </div>
    );
  }

  // =========================================================
  // ERROR
  // =========================================================

  if (productError) {
    return (
      <div className="status-message error">
        <h2>
          Failed to load product
        </h2>

        <p>
          {productError}
        </p>
      </div>
    );
  }

  // =========================================================
  // PRODUCT NOT FOUND
  // =========================================================

  if (
    !product ||
    !selectedVariant
  ) {
    return (
      <div className="status-message">
        <h2>
          Product not found
        </h2>
      </div>
    );
  }

  // =========================================================
  // PRODUCT IMAGE
  // =========================================================

  const productImage =
    selectedVariant.image ||
    product.images?.[0] ||
    "";

  /*
    Blue and Pink iPhone source images
    contain more empty space.

    We enlarge only those colors.
  */

  const imageClass =
    activeColor === "Blue" ||
    activeColor === "Pink"
      ? "product-detail-image iphone-color-image"
      : "product-detail-image";

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="product-page">

      {/* =====================================================
          PRODUCT DETAILS
      ===================================================== */}

      <section className="product-details">

        {/* PRODUCT IMAGE */}

        <div className="product-image-section">

          <img
            key={`${product.id}-${activeColor}-${activeStorage}`}
            src={productImage}
            alt={`${product.name} ${activeColor}`}
            className={imageClass}
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

        {/* PRODUCT INFORMATION */}

        <div className="product-info-section">

          <p className="product-brand">
            {product.brand}
          </p>

          <h1>
            {product.name}
          </h1>

          <p className="product-description">
            {product.description}
          </p>

          {/* PRICE */}

          <div className="detail-price-section">

            <h2>
              ₹
              {Number(
                selectedVariant.price
              ).toLocaleString(
                "en-IN"
              )}
            </h2>

            <span>
              MRP ₹
              {Number(
                selectedVariant.mrp
              ).toLocaleString(
                "en-IN"
              )}
            </span>

          </div>

          {/* COLOR */}

          <div className="variant-section">

            <h3>
              Choose Color
            </h3>

            <div className="variant-options">

              {product.colors?.map(
                (color) => (

                  <button
                    key={color}
                    type="button"
                    className={
                      activeColor === color
                        ? "selected-option"
                        : ""
                    }
                    onClick={() =>
                      handleColorChange(
                        color
                      )
                    }
                  >
                    {color}
                  </button>

                )
              )}

            </div>

          </div>

          {/* STORAGE */}

          <div className="variant-section">

            <h3>
              Choose Storage
            </h3>

            <div className="variant-options">

              {product.storage?.map(
                (storage) => {

                  const available =
                    isStorageAvailable(
                      storage
                    );

                  return (

                    <button
                      key={storage}
                      type="button"
                      disabled={!available}
                      className={
                        activeStorage ===
                        storage
                          ? "selected-option"
                          : ""
                      }
                      onClick={() =>
                        handleStorageChange(
                          storage
                        )
                      }
                    >
                      {storage}
                    </button>

                  );
                }
              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          EMI SECTION
      ===================================================== */}

      <section className="emi-section">

        <div className="emi-header">

          <h2>
            Choose your EMI plan
          </h2>

          <p>
            Flexible EMI plans based on
            your selected variant.
          </p>

        </div>

        <div className="emi-price-info">

          EMI for{" "}

          <strong>
            {activeColor}
          </strong>

          {" • "}

          <strong>
            {activeStorage}
          </strong>

          {" • "}

          <strong>
            ₹
            {Number(
              selectedVariant.price
            ).toLocaleString(
              "en-IN"
            )}
          </strong>

        </div>

        {emiLoading && (
          <div className="emi-loading">
            Updating EMI plans...
          </div>
        )}

        {emiError && (
          <div className="emi-error">
            Showing calculated EMI plans.
          </div>
        )}

        <div className="emi-plans">

          {emiPlans.map(
            (plan) => (

              <EmiPlanCard
                key={plan.id}
                plan={plan}
                selected={
                  selectedPlan?.id ===
                  plan.id
                }
                onSelect={
                  setSelectedPlan
                }
              />

            )
          )}

        </div>

      </section>

      {/* =====================================================
          ORDER SUMMARY
      ===================================================== */}

      <section className="order-summary">

        <div>
          <p>
            Selected Product
          </p>

          <strong>
            {product.name}
          </strong>
        </div>

        <div>
          <p>
            Color
          </p>

          <strong>
            {activeColor}
          </strong>
        </div>

        <div>
          <p>
            Storage
          </p>

          <strong>
            {activeStorage}
          </strong>
        </div>

        <div>
          <p>
            Price
          </p>

          <strong>
            ₹
            {Number(
              selectedVariant.price
            ).toLocaleString(
              "en-IN"
            )}
          </strong>
        </div>

        <div>
          <p>
            EMI Plan
          </p>

          <strong>
            {selectedPlan
              ? selectedPlan.label
              : "Not selected"}
          </strong>
        </div>

      </section>

      {/* =====================================================
          PROCEED
      ===================================================== */}

      <div className="proceed-section">

        <button
          type="button"
          className="proceed-button"
          disabled={!selectedPlan}
          onClick={handleProceed}
        >
          {selectedPlan
            ? "Proceed"
            : "Select an EMI Plan"}
        </button>

      </div>

    </div>
  );
}

export default ProductPage;