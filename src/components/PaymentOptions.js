import React, { useState } from "react";
import Swal from "sweetalert2";

const paymentMethods = [
  { id: 1, name: "Card / Debit / Credit", value: "Card", img: "/images/creditcard.png" },
  { id: 2, name: "Easypaisa", value: "Easypaisa", img: "/images/Easypaisa.png" },
  { id: 3, name: "Bank Transfer", value: "Bank", img: "/images/banktransfer.jpg" },
];


export default function PaymentOptions({ totalPrice, onPaymentComplete, onCancel }) {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = () => {
    if (!paymentMethod) {
       Swal.fire({
          title: "warning!",
          text: "Please select a payment method!",
          icon: "warning",
          confirmButtonColor: "#ff6600",
        });
      return;
    }
     Swal.fire({
          title: "Success!",
          text: `Payment of Rs. ${totalPrice} via ${paymentMethod} successful!`,
          icon: "success",
          confirmButtonColor: "#ff6600",
        });
    onPaymentComplete(); 
  };

  return (
    <div className="mt-3">
      
      <h5>Select Payment Method:</h5>

      {paymentMethods.map((method) => (
        <div className="form-check d-flex align-items-center mb-2" key={method.id}>
          <input
            type="radio"
            id={method.value}
            name="payment"
            className="form-check-input me-2"
            value={method.value}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor={method.value} className="form-check-label d-flex align-items-center">
            <img src={method.img} alt={method.name} style={{ width: "40px", marginRight: "10px" }} />
            {method.name}
          </label>
        </div>
      ))}

      <div className="mt-3 d-flex">
        <button className="productsavecancel me-2" onClick={handlePayment}>
          Pay Rs. {totalPrice}
        </button>
        <button className="productsavecancel" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
