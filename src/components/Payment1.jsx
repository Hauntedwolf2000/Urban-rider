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
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="1234567890"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <div className="flex justify-center items-center">
        <button
          className="text-white bg-orange-300 hover:bg-orange-400 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-4 text-center"
          onClick={loadRazorpay}
          disabled={loading}
        >
          {loading ? "Loading Razorpay..." : "Pay"}
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Pay;
