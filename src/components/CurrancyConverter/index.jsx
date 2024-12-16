import React, { useState } from "react"
import { ArrowRightLeft } from "lucide-react"
import { useExchangeRate } from "../../hooks/useExchangeRate"
import { formatCurrency } from "../../utils/format"
import CurrencySelect from "./CurrencySelect"

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("UZS")
  const [toCurrency, setToCurrency] = useState("USD")

  const { rate, loading, error } = useExchangeRate(fromCurrency, toCurrency)

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const convertedAmount = rate ? amount * rate : 0

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Currency Converter</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CurrencySelect
            value={fromCurrency}
            onChange={setFromCurrency}
            label="From Currency"
          />
          <CurrencySelect
            value={toCurrency}
            onChange={setToCurrency}
            label="To Currency"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Amount
            </label>
            <input
              type="number"
              onChange={e => setAmount(Number(e.target.value))}
              className="w-full p-2 border rounded-md outline-none"
              placeholder="Enter amount"
              min="0"
            />
          </div>
          <button
            onClick={handleSwapCurrencies}
            className="mt-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowRightLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Converted Amount
            </label>
            <div className="p-2 bg-gray-50 border rounded-md">
              {loading ? (
                "Loading..."
              ) : error ? (
                <span className="text-red-500">Error fetching rate</span>
              ) : (
                formatCurrency(convertedAmount, toCurrency)
              )}
            </div>
          </div>
        </div>

        {rate && (
          <p className="text-sm text-gray-500">
            Exchange Rate: 1 {fromCurrency} = {rate.toFixed(6)} {toCurrency}
          </p>
        )}
      </div>
    </div>
  )
}
