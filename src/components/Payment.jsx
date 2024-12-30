import React, { useState } from "react";

function loadRazorpayScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.body.appendChild(script);
  });
}

const Pay = ({ onPaymentStatusChange, totalCost }) => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validatePhoneNumber = (number) => {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(number);
  };

  async function loadRazorpay() {
    setLoading(true);

    if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      setLoading(false);
      return;
    } else {
      setErrorMessage("");
    }

    try {
      await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
    } catch (error) {
      alert(
        "Razorpay SDK failed to load. Please check your internet connection."
      );
      setLoading(false);
      return;
    }

    const options = {
      currency: "INR",
      amount: (totalCost * 100).toString(),
      key: "rzp_test_cbYRQnjrIYjfzM",
      name: "URBAN BIKERS",
      description: "UR LOVED ONE IS WATING IN HOME❤️",
      callback_url: "",
      prefill: {
        name: "",
        email: "",
        contact: phoneNumber,
      },
      handler: async function (response) {
        onPaymentStatusChange(response);
        console.log("Payment Response:", response);
        console.log("Phone Number:", phoneNumber);
        console.log("Amount:", totalCost);
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    setLoading(false);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter 10-digit Phone Number"
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <button
        className="btn-pri mt-2"
        onClick={loadRazorpay}
        disabled={loading}
      >
        {loading ? "Loading Razorpay..." : "Pay now"}
      </button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default Pay;
