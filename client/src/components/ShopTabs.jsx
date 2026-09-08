function ShopTabs({ activeTab, onTabChange }) {
  const tabs = [
    "Top Brands",
    "Nearby Stores",
    "1Fi Marketplace",
  ];

  return (
    <div className="shop-tabs-wrapper">
      <div className="shop-tabs">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              className={`shop-tab ${
                isActive ? "active" : ""
              }`}
              onClick={() => onTabChange(tab)}
            >
              <span>{tab}</span>

              {isActive && (
                <span className="shop-tab-indicator" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ShopTabs;