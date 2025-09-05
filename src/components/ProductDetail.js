import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PaymentOptions from "./PaymentOptions";
import PayNowDelivery from "./PayNowDelivery";

export default function ProductDetail() {
  const location = useLocation();
  const product = location.state?.product;
  const [quantity, setQuantity] = useState(1);
  const [showPayment, setShowPayment] = useState(false);

  if (!product) {
    return <p className="text-center fw-bold">No product selected.</p>;
  }

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const totalPrice = quantity * parseInt(product.price.replace(/[^0-9]/g, ""));

  const handleAddToCart = () => setShowPayment(true);

  const handlePaymentComplete = () => {
    setShowPayment(false);
    setQuantity(1);
  };

  const handleCancel = () => {
    setShowPayment(false);
  };
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.img || "/images/SportsNeckbandHandfree07.jpg"}
            alt={product.title}
            className="card-img-top"
          />
        </div>
        <div className="col-md-6">
          <div className="ProductMain">
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <div className="d-flex align-items-center mb-3">
                <button className="btn btn-secondary me-2" onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button className="btn btn-secondary ms-2" onClick={increment}>+</button>
            </div>
            <h4>Total: Rs. {totalPrice}</h4>

            {/* Pay Now Button */}
            <PayNowDelivery/>
           
            {/* Add to Cart / Payment Options */}
            {!showPayment ? (
              <button className="btn mt-3" onClick={handleAddToCart} style={{background:"black",color:"white"}}>
                Add to Cart
              </button>
            ) : (
              <PaymentOptions
                totalPrice={totalPrice}
                onPaymentComplete={handlePaymentComplete}
                onCancel={handleCancel}
              />
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
