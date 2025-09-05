// src/components/Footer.js
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-light border-top mt-5 pt-4">
      <div className="container-fluid">
        <div style={{margin: "5% auto"}}>
        <div className="row">

          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h3 className="fw-bold">📱 Mobile <span style={{ color: "#ff6600" }}>Accessories</span></h3>
            <p className="text-muted mt-3">
              Premium mobile accessories — cases, chargers, earphones, and more.
              We deliver quality and style right to your doorstep.
            </p>
            <div className="d-flex gap-3 mt-3 fs-5 text-muted anchorlinkhover">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF className="hover-pointer" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="hover-pointer" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="hover-pointer" />
              </a>
              <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer">
                <FaWhatsapp className="hover-pointer" />
              </a>

            </div>
          </div>

          {/* Shop */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Shop</h5>
            <ul className="list-unstyled text-muted">
              <li>Phone Cases</li>
              <li>Chargers</li>
              <li>Earphones</li>
              <li>Power Banks</li>
              <li>Screen Protectors</li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Support</h5>
            <ul className="list-unstyled text-muted">
              <li>Order Tracking</li>
              <li>Warranty Policy</li>
              <li>Return & Refund</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Company</h5>
            <ul className="list-unstyled text-muted">
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Legal</h5>
            <ul className="list-unstyled text-muted">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>License</li>
            </ul>
          </div>
        </div>
        </div>
        <hr />
        <div className="text-center text-muted py-3">
          © {new Date().getFullYear()} Mobile Accessories Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
