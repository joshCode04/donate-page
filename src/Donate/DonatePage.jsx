import { useState } from "react";
import Select from "react-select";
import GPayIcon from "/Gpay.jpg";
import CryptoIcon from "/crypto.png";
import PayPalIcon from "/PayPal.png";
import BitcoinIcon from "/bitcoin.png";
import EthereumIcon from "/ethereum.png";
import UsdtIcon from "/USDT.png";

const DonatePage = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [selectedPayment, setSelectedPayment] = useState("crypto");
  const [copySuccess, setCopySuccess] = useState("");

  const addresses = {
    bitcoin: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    ethereum: "0x32Be343B94f860124dC4fEe278FDCBD38C102D88",
    usdt: "TGvz9HF3X95rSzLNB89gUYKWrNGsKDtbMJ",
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

  // Custom styles for react-select
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F4EC] to-[#F7F9F1] flex items-center justify-center p-6">
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

        {/* Conditional Rendering for Payment Option */}
        {/* Use transition animation for swipe effect */}
        <div
          className={`transition-transform duration-500 ease-in-out ${
            selectedPayment === "crypto"
              ? "transform translate-x-0"
              : "transform translate-x-full"
          }`}
        >
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
            </>
          )}
        </div>

        <div
          className={`transition-transform duration-500 ease-in-out ${
            selectedPayment === "paypal"
              ? "transform translate-x-0"
              : "transform translate-x-full"
          }`}
        >
          {selectedPayment === "paypal" && (
            <div className="text-center mb-6">
              <p className="text-gray-700 mb-4">Donate via PayPal</p>
              <button className="bg-blue-600 text-white w-full py-2 rounded-lg font-medium hover:bg-blue-700">
                Proceed with PayPal
              </button>
            </div>
          )}
        </div>

        <div
          className={`transition-transform duration-500 ease-in-out ${
            selectedPayment === "gpay"
              ? "transform translate-x-0"
              : "transform translate-x-full"
          }`}
        >
          {selectedPayment === "gpay" && (
            <div className="text-center mb-6">
              <p className="text-gray-700 mb-4">Donate via Google Pay</p>
              <button className="bg-green-500 text-white w-full py-2 rounded-lg font-medium hover:bg-green-600">
                Proceed with GPay
              </button>
            </div>
          )}
        </div>

        {/* Donate Now Button */}
        <button className="w-full py-3 mt-4 bg-[#7FC034] text-white rounded-lg font-semibold text-lg hover:bg-[#6AB02F] transition-colors duration-300">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonatePage;
