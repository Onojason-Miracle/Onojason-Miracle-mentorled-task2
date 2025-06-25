"use client";

import { useState } from "react";
import products from "@/data/products.json";

export default function Product() {
  //Tracking categories that are selected
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Tracking selected sort option
  const [sortOption, setSortOption] = useState<string>("");

  // category and dietary arrow
  const [showCategories, setShowCategories] = useState(true);
  const [showDietary, setShowDietary] = useState(true);



  // Handling checkbox change
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };


  // Filtering products based on selected categories
  const filteredProducts = selectedCategories.length
    ? products.filter((product) =>
        selectedCategories.includes(product.category)
      )
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "price-asc") {
      const priceA = parseFloat(String(a.price).toString().split(" ")[0]);
      const priceB = parseFloat(String(b.price).toString().split(" ")[0]);
      return priceA - priceB;
    }
    return 0;
  });

  // Counting products by category
  const categoryCounts: Record<string, number> = products.reduce(
    (counts, product) => {
      counts[product.category] = (counts[product.category] || 0) + 1;
      return counts;
    },
    {} as Record<string, number>
  );

  return (
    <section className="products">
      <div className="productP">
        <p className="productptag1">Products</p>
        <p className="productptag2">Photos</p>
      </div>

      <div className="productCart">
        {/* Category Filter Section */}
        <div className="categoriesDiv">
          <div>
            <form>
              <p className="searchInputPtag">
                <input
                  type="search"
                  placeholder="    Search"
                  className="searchInput"
                />
              </p>
              <input type="button" value="Clear all" className="clear" />
            </form>
          </div>

          <div>
            <div className="Left-filters">
              {/* Category Filter */}
              <div className="filter-section">
                <div
                  className="filter-header"
                  onClick={() => setShowCategories(!showCategories)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h5 className="filter-cat">Categories</h5>
                  <span className="arrow">{showCategories ? "▲" : "▼"}</span>
                </div>

                {showCategories && (
                  <div className="filter-options">
                    <label>
                      <input
                        type="checkbox"
                        value="Baked Goods"
                        onChange={() => handleCategoryChange("Baked Goods")}
                        checked={selectedCategories.includes("Baked Goods")}
                      />{" "}
                      Baked Goods ({categoryCounts["Baked Goods"] || 0})
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        value="Coffee"
                        onChange={() => handleCategoryChange("Coffee")}
                        checked={selectedCategories.includes("Coffee")}
                      />{" "}
                      Coffee ({categoryCounts["Coffee"] || 0})
                    </label>
                  </div>
                )}
              </div>

              <div className="filter-section">
                <div
                  className="filter-header"
                  onClick={() => setShowDietary(!showDietary)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h5 className="filter-cat">Dietary</h5>
                  <span className="arrow">{showDietary ? "▲" : "▼"}</span>
                </div>

                {showDietary && (
                  <div className="filter-options">
                    <label>
                      <input type="checkbox" value="Eco Friendly" /> Eco
                      Friendly
                    </label>
                    <label>
                      <input type="checkbox" value="Gluten Free" /> Gluten Free
                    </label>
                    <label>
                      <input type="checkbox" value="Nut Free" /> Nut Free
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Display Section */}
        <main className="productCardDiv">
          <div className="filterDiv">
            <p className="showP">Show products ({filteredProducts.length}) </p>

            <div>
              <div className="product-page">
                <div className="filters">
                  <label className="toggle-container showP">
                    Show image only
                    <input type="checkbox" id="imageOnlyToggle" />
                    <span className="slider"></span>
                  </label>

                  <div className="sort-dropdown showP">
                    Sort by:
                    <select
                      id="sortSelect"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                    >
                      <option value="">Sort</option>
                      <option value="name-asc">Name A–Z</option>
                      <option value="price-asc">Price Low to High</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="productGrid">
            {sortedProducts.map((product) => (
              <div className="productCard" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="productImage"
                />

                <div className="productInfo">
                  <h3 className="productName">{product.name}</h3>

                  <div className="miniDiv">
                    <div className="productImageMini">
                      <img src={product.mini} alt={product.name} />
                    </div>

                    <p className="baker">{product.baker}</p>
                  </div>

                  <p className="baker">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
