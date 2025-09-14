"use client";
import { useState } from "react";
import CropChart from "./components/CropChart";
export default function Home() {
  const [soil, setSoil] = useState("Loamy");
  const [month, setMonth] = useState("6");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const res = await fetch(`/api/recommended?soil=${soil}&month=${month}`);
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-300 p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        🌱 Smart Farmer Guide
      </h1>

      {/* Selection Box */}
      <div className="bg-white shadow-md rounded-lg p-6 w-80">
        <label className="block mb-4">
          <span className="text-gray-700">Select Soil Type:</span>
          <select
            value={soil}
            onChange={(e) => setSoil(e.target.value)}
            className="mt-1 block w-full border rounded-md p-2"
          >
            <option value="Loamy">Loamy</option>
            <option value="Clay">Clay</option>
            <option value="Sandy">Sandy</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Select Month:</span>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="mt-1 block w-full border rounded-md p-2"
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </label>

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700"
        >
          Get Recommendation
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-2">Recommended Crops:</h2>
          {result.recommendations.length > 0 ? (
            <ul className="list-disc list-inside text-gray-700">
              {result.recommendations.map((crop, i) => (
                <div key={i} className="mb-6">
                  <li>
                    🌱 {crop.crop} ({crop.season}) — Avg Yield: {crop.avgYield}{" "}
                    tons/ha
                  </li>
                  <CropChart crop={crop} />
                </div>
              ))}
            </ul>
          ) : (
            <p>No recommendations found.</p>
          )}
        </div>
      )}
    </div>
  );
}
