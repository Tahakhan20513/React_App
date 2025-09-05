import React, { useState } from "react";
import Swal from "sweetalert2";

export default function PayNowDelivery({ totalPrice }) {
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);

  const handlePayNowClick = () => setShowDeliveryForm(true);

  const handleConfirmOrder = () => {
    Swal.fire({
    title: "Success!",
    text: "Order confirmed successfully!",
    icon: "success",
    confirmButtonColor: "#ff6600",
  });
    setShowDeliveryForm(false);
  };

  const handleCancel = () => {
    setShowDeliveryForm(false);
  };

  return (
    <>
      {!showDeliveryForm ? (
        <button
          className="btn mt-3 me-3"
          onClick={handlePayNowClick}
          style={{
            color: "white",
            borderColor: "#ff6600",
            background: "rgb(255, 102, 0)",
          }}
        >
          Pay Now
        </button>
      ) : (
        <div
          className="mt-4 p-4 border rounded shadow-sm"
          style={{ backgroundColor: "#ff66004f" }}
        >
          <h4 className="mb-3 fw-bold text-center">Delivery Details</h4>

          <div className="mb-3">
            <label className="form-label fw-bold">Full Address:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full address"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Phone Number:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your phone number"
            />
          </div>

          <p className="fw-bold" style={{backgroundColor: "orange",color: "#090808",padding: "10px",borderRadius: "3px",width: "100%",textalign: "center"}}>
            Payment Method: <span className="" style={{ color: "#090808" }}>Cash on Delivery</span>
          </p>

          <div className="d-flex mt-4">
            <button className="productsavecancel me-2" onClick={handleConfirmOrder}>
              Confirm Order
            </button>
            <button className="productsavecancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
