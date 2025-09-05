import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, title: "Premium Bass Handfree", price: "Rs. 1,200", img: "/images/PremiumBassHandfree05.jpg" },
  { id: 2, title: "Wireless Handfree", price: "Rs. 1,800", img: "/images/WirelessHandfree06.jpg" },
  { id: 3, title: "Sports Neckband Handfree", price: "Rs. 2,000", img: "/images/SportsNeckbandHandfree07.jpg" },
  { id: 4, title: "Gaming Handfree with Mic", price: "Rs. 2,500", img: "/images/GamingHandfreeMic08.jpg" },
  { id: 5, title: "Noise Cancelling Handfree", price: "Rs. 3,200", img: "/images/NoiseCancellingHandfree09.jpg" },
  { id: 6, title: "Metal Body Handfree", price: "Rs. 1,500", img: "/images/MetalBodyHandfree10.jfif" },
  { id: 7, title: "Elegant Leather Cover", price: "Rs. 650", img: "/images/ElegantLeatherCover11.jpeg" },
  { id: 8, title: "Transparent Slim Cover", price: "Rs. 450", img: "/images/TransparentSlimCover12.jpg" },
  { id: 9, title: "Stylish Mobile Cover", price: "Rs. 500", img: "/images/StylishMobileCover13.jpg" },
  { id: 10, title: "Silicone Cover", price: "Rs. 700", img: "/images/SiliconeCover14.jfif" },
  { id: 11, title: "Rugged Protective Cover", price: "Rs. 800", img: "/images/RuggedProtectiveCover15.jpg" },
  { id: 12, title: "Floral Print Cover", price: "Rs. 550", img: "/images/FloralPrintCover16.jpg" },
  { id: 13, title: "Fast Charging Adapter", price: "Rs. 1,000", img: "/images/FastChargingAdapter17.jpg" },
  { id: 14, title: "Type-C Charger", price: "Rs. 1,500", img: "/images/Type-CCharger18.jpeg" }
];

export default function NavbarSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const filtered = products.filter((p) =>
//       p.title.toLowerCase().includes(query.toLowerCase())
//     );
//     navigate("/search", { state: { results: filtered, query } });
//   };

const handleSearch = (e) => {
  e.preventDefault();
  const trimmedQuery = query.trim();
  if (trimmedQuery === "") {
    navigate("/home");
    return;
  }
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(trimmedQuery.toLowerCase())
  );

  if (filtered.length === 0) {
    navigate("/search", { state: { results: [], query: trimmedQuery } });
  } else {
    navigate("/search", { state: { results: filtered, query: trimmedQuery } });
  }
};

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === "") {
      navigate("/home");
    }
  };

  return (
      <form className="d-flex" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search products..."
          value={query}
          onChange={handleChange}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
  );
}
