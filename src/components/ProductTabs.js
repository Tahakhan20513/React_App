import React, { useState } from "react";
import '../componentsCss/mainfile.css';
import { useNavigate  } from "react-router-dom";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("handfree");
  const navigate = useNavigate();
  const products = {
    handfree: [
      { id: 1, title: "Premium Bass Handfree", price: "Rs. 1,200", img: "/images/PremiumBassHandfree05.jpg" },
      { id: 2, title: "Wireless Handfree", price: "Rs. 1,800", img: "/images/WirelessHandfree06.jpg" },
      { id: 3, title: "Sports Neckband Handfree", price: "Rs. 2,000", img: "/images/SportsNeckbandHandfree07.jpg" },
      { id: 4, title: "Gaming Handfree with Mic", price: "Rs. 2,500", img: "/images/GamingHandfreeMic08.jpg" },
      { id: 5, title: "Noise Cancelling Handfree", price: "Rs. 3,200", img: "/images/NoiseCancellingHandfree09.jpg" },
      { id: 6, title: "Metal Body Handfree", price: "Rs. 1,500", img: "/images/MetalBodyHandfree10.jfif" }
    ],
    covers: [
      { id: 1, title: "Elegant Leather Cover", price: "Rs. 650", img: "/images/ElegantLeatherCover11.jpeg" },
      { id: 2, title: "Transparent Slim Cover", price: "Rs. 450", img: "/images/TransparentSlimCover12.jpg" },
      { id: 3, title: "Stylish Mobile Cover", price: "Rs. 500", img: "/images/StylishMobileCover13.jpg" },
      { id: 4, title: "Silicone Cover", price: "Rs. 700", img: "/images/SiliconeCover14.jfif" },
      { id: 5, title: "Rugged Protective Cover", price: "Rs. 800", img: "/images/RuggedProtectiveCover15.jpg" },
      { id: 6, title: "Floral Print Cover", price: "Rs. 550", img: "/images/FloralPrintCover16.jpg" }
    ],
    chargers: [
      { id: 5, title: "Fast Charging Adapter", price: "Rs. 1,000", img: "/images/FastChargingAdapter17.jpg" },
      { id: 6, title: "Type-C Charger", price: "Rs. 1,500", img: "/images/Type-CCharger18.jpeg" }
    ]
  };

  return (
    <>
      <h3 className="mb-4 my-4 text-secondary">Featured Products - Tabs</h3>
      {/* Tabs */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "handfree" ? "active" : ""}`}
            onClick={() => setActiveTab("handfree")}
          >
            Handfree
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "covers" ? "active" : ""}`}
            onClick={() => setActiveTab("covers")}
          >
            Covers
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "chargers" ? "active" : ""}`}
            onClick={() => setActiveTab("chargers")}
          >
            Chargers
          </button>
        </li>
      </ul>

      {/* Product Cards */}
      <div className="row g-4 mt-3">
        {products[activeTab].map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card shadow-sm">
              <img src={product.img} className="cardImage" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Only {product.price}</p>
                <button
                    className="productBtn"
                    onClick={() => navigate("/product", { state: { product: product } })}>
                    Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
        
      </>
  );
}
