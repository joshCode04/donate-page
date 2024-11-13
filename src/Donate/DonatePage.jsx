import { useState } from "react";

const DonatePage = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [copySuccess, setCopySuccess] = useState("");

  // Sample cryptocurrency addresses (replace these with actual addresses)
  const addresses = {
    bitcoin: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    ethereum: "0x32Be343B94f860124dC4fEe278FDCBD38C102D88",
    usdt: "TGvz9HF3X95rSzLNB89gUYKWrNGsKDtbMJ",
  };

  const handleCopyAddress = () => {
    navigator.clipboard
      .writeText(addresses[selectedCrypto])
      .then(() => setCopySuccess("Copied!"))
      .catch(() => setCopySuccess("Failed to copy"));
    setTimeout(() => setCopySuccess(""), 2000); // Reset copy status after 2 seconds
  };

  return (
    <div className="min-h-screen bg-[#F7F9F1] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#FFFFFF] p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-[#2C3A04] mb-4">
          Support Our Cause
        </h1>

        <p className="text-gray-600 mb-6">Choose a cryptocurrency to donate:</p>

        {/* Crypto Dropdown */}
        <select
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={selectedCrypto}
          onChange={(e) => setSelectedCrypto(e.target.value)}
        >
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="usdt">USDT</option>
        </select>

        {/* Address Display and Copy Button */}
        <div className="mb-6">
          <p className="text-gray-800 mb-2">Address:</p>
          <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
            <span className="text-gray-700 truncate">
              {addresses[selectedCrypto]}
            </span>
            <button
              onClick={handleCopyAddress}
              className="text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
            >
              Copy Address
            </button>
          </div>
          {copySuccess && <p className="text-green-600 mt-2">{copySuccess}</p>}
        </div>

        {/* Donate Button */}
        <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonatePage;
