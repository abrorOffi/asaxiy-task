import React from "react"
import { CURRENCIES } from "../../constants/currencies"

export default function CurrencySelect({ value, onChange, label }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full p-2 border rounded-md outline-none"
      >
        {CURRENCIES.map(currency => (
          <option key={currency.code} value={currency.code}>
            {currency.code} - {currency.name}
          </option>
        ))}
      </select>
    </div>
  )
}
