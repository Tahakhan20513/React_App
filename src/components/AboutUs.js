import React, { useState } from 'react';

export default function AboutUs() {
  const [aboutStyle, setAboutStyle] = useState({
    backgroundColor: "#f7f9fc",
    color: "#000000",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [leadStyle, setLeadStyle] = useState({ color: "#6c757d" });


  const toggleDark = () => {
    if (aboutStyle.backgroundColor === "#f7f9fc") {
      setAboutStyle({
        backgroundColor: "#121212",
        color: "#f8f9fa",
        padding: "30px",
        boxShadow: "0px 4px 15px rgba(255,255,255,0.1)",
      });
      setLeadStyle({ color: "#f8f9fa" });
      setBtnText("Enable Light Mode");
    } else {
      setAboutStyle({
        backgroundColor: "#f7f9fc",
        color: "#000000",
        padding: "30px",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
      });
      setBtnText("Enable Dark Mode");
      setLeadStyle({ color: "#6c757d" });
    }
  };

  return (
    <div className="container my-4" style={aboutStyle}>
      <h2 className="mb-4 fw-bold">About Accessories <span style={{ color: "#ff6600" }}>Hub</span></h2>
      <p className="lead" style={leadStyle}>
        Welcome to <strong>Accessories Hub</strong> — your one-stop shop for premium mobile covers, screen protectors, chargers, and more.
        We believe your phone deserves the best protection and style without compromising on quality.
      </p>
      <p>
        From sleek silicone covers to rugged shockproof cases, and from high-speed chargers to trendy pop sockets —
        we handpick every accessory to ensure durability, style, and comfort. 
        Our mission is to keep your devices <em>safe, stylish, and up-to-date</em>.
      </p>
      <p>
        With years of experience in mobile accessories, our passionate team constantly researches the latest trends
        and technologies to bring you products that not only look great but also last longer.
      </p>
      <p>
        <strong>Thank you</strong> for choosing Accessories Hub. Your trust motivates us to serve you better every day.
      </p>

      <div className="my-3">
        <button type="button" className="productBtn" onClick={toggleDark}>
          {btnText}
        </button>
      </div>
    </div>
  );
}
