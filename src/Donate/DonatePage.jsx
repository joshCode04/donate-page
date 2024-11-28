import { useState } from "react";
import Select from "react-select";
import GPayIcon from "/Gpay.jpg";
import CryptoIcon from "/crypto.png";
import PayPalIcon from "/PayPal.png";
import BitcoinIcon from "/bitcoin.png";
import EthereumIcon from "/ethereum.png";
import UsdtIcon from "/USDT.png";
import TawkToChat from "../TawkToChat";

const DonatePage = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [selectedPayment, setSelectedPayment] = useState("crypto");
  const [copySuccess, setCopySuccess] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const addresses = {
    bitcoin: "bc1qvmxxf68azj79nyhx8u0zsk60zsctyx3dnsvx6n",
    ethereum: "0x54965f96Ea3fb93FAD15411a5Cd8B85C5Ca9052F",
    usdt: "0x54965f96Ea3fb93FAD15411a5Cd8B85C5Ca9052F",
  };

  const cryptoOptions = [
    { value: "bitcoin", label: "Bitcoin", icon: BitcoinIcon },
    { value: "ethereum", label: "Ethereum", icon: EthereumIcon },
    { value: "usdt", label: "USDT", icon: UsdtIcon },
  ];

  const handleCopyAddress = () => {
    navigator.clipboard
      .writeText(addresses[selectedCrypto])
      .then(() => setCopySuccess("Copied!"))
      .catch(() => setCopySuccess("Failed to copy"));
    setTimeout(() => setCopySuccess(""), 2000);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleDonate = () => {
    // Show success popup and reset form
    setShowPopup(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  const customStyles = {
    option: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
  };

  const formatOptionLabel = ({ label, icon }) => (
    <div className="flex items-center">
      <img src={icon} alt={label} className="w-5 h-5 mr-2" />
      <span>{label}</span>
    </div>
  );

  const handleClosePopup = () => {
    // Close the popup
    setShowPopup(false);
    // Redirect to main website
    window.location.href = "http://rencharityfoundation.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F4EC] to-[#F7F9F1] flex items-center justify-center p-6">
      <TawkToChat />
      <div className="w-full max-w-md bg-[#FFFFFF] p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-semibold text-[#2C3A04] mb-4 text-center">
          Support Our Cause
        </h1>

        <p className="text-gray-600 mb-6 text-center">
          Choose your preferred donation method:
        </p>

        {/* Payment Options */}
        <div className="flex justify-around mb-6 flex-wrap space-x-4 sm:space-x-6">
          {[
            { id: "crypto", icon: CryptoIcon, alt: "Crypto" },
            { id: "paypal", icon: PayPalIcon, alt: "PayPal" },
            { id: "gpay", icon: GPayIcon, alt: "GPay" },
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedPayment(option.id)}
              className={`flex items-center justify-center w-24 h-12 border-2 rounded-lg transition-colors duration-300 mx-2 my-2 sm:my-0 ${
                selectedPayment === option.id
                  ? "border-[#7FC034]"
                  : "border-gray-300"
              }`}
            >
              <img
                src={option.icon}
                alt={option.alt}
                className="h-full w-full object-contain"
              />
            </button>
          ))}
        </div>

        {/* Form Content */}
        {selectedPayment === "crypto" && (
          <>
            <p className="text-gray-600 mb-4">Choose a cryptocurrency:</p>
            <Select
              options={cryptoOptions}
              value={cryptoOptions.find(
                (option) => option.value === selectedCrypto
              )}
              onChange={(option) => setSelectedCrypto(option.value)}
              styles={customStyles}
              formatOptionLabel={formatOptionLabel}
              className="mb-4"
            />

            <div className="mb-6">
              <p className="text-gray-800 mb-2">Wallet Address:</p>
              <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                <span className="text-gray-700 truncate">
                  {addresses[selectedCrypto]}
                </span>
                <button
                  onClick={handleCopyAddress}
                  className="text-white bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md text-sm"
                >
                  Copy
                </button>
              </div>
              {copySuccess && (
                <p className="text-green-600 mt-2 text-sm">{copySuccess}</p>
              )}
            </div>

            {/* Billing Details */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Billing Details
              </h2>
              <div className="space-y-4">
                {["firstName", "lastName", "email"].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {field === "firstName"
                        ? "First Name"
                        : field === "lastName"
                        ? "Last Name"
                        : "Email Address"}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      placeholder={`Enter your ${
                        field === "email"
                          ? "email address"
                          : field === "firstName"
                          ? "first name"
                          : "last name"
                      }`}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Donate Now Button */}
        <button
          onClick={handleDonate}
          className="w-full py-3 mt-4 bg-[#7FC034] text-white rounded-lg font-semibold text-lg hover:bg-[#6AB02F] transition-colors duration-300"
        >
          Donate Now
        </button>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[450px]">
            {selectedPayment === "paypal" || selectedPayment === "gpay" ? (
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Donation Pending!
              </h2>
            ) : (
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Donation Successful!
              </h2>
            )}
            {selectedPayment === "paypal" || selectedPayment === "gpay" ? (
              <p className="text-gray-700 mb-6">
                Thanks you for your desire to support our cause! Please{" "}
                <a href="" className="text-blue-600 underline">
                  contact Support
                </a>{" "}
                either via email admin@………. Or via the live chat to get the
                required information to complete the donation process. .
              </p>
            ) : (
              <p className="text-gray-700 mb-6">
                Thank you for supporting our cause!
              </p>
            )}
            <button
              onClick={handleClosePopup}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonatePage;
