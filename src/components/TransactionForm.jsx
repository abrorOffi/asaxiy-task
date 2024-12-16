import React, { useState } from "react"
import { PlusCircle } from "lucide-react"

const categories = [
  "Salary",
  "Investments",
  "Food",
  "Transport",
  "Entertainment",
  "Bills",
  "Other"
]

export default function TransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    type: "expense",
    amount: "",
    currency: "USD",
    category: "Other",
    description: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    const transaction = {
      id: Date.now().toString(),
      date: Date.now(),
      ...formData,
      amount: Number(formData.amount),
      date: new Date().toISOString()
    }
    onAddTransaction(transaction)
    setFormData({
      type: "expense",
      amount: "",
      currency: "USD",
      category: "Other",
      description: ""
    })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Type
          </label>
          <select
            value={formData.type}
            onChange={e => setFormData({ ...formData, type: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none border p-2"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            value={formData.amount}
            onChange={e => setFormData({ ...formData, amount: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none border p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Currency
          </label>
          <select
            value={formData.currency}
            disabled
            onChange={e =>
              setFormData({ ...formData, currency: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none border p-2"
          >
            <option value="USD">USD</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            value={formData.category}
            onChange={e =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none border p-2"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="category">
            Description
          </label>
          <textarea name="" id="category"  value={formData.description}
            onChange={e =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none border p-2"
            required></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <PlusCircle className="w-5 h-5 mr-2" />
        Add Transaction
      </button>
    </form>
  )
}