import React, { useState, useEffect } from "react"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"
import Dashboard from "./components/Dashboard"
import { saveTransactions, getTransactions } from "./utils/localStorage"
import { LayoutDashboard, ListPlus } from "lucide-react"
import CurrencyConverter from "./components/CurrancyConverter/index"
// import CurrencyConverter from "./components/CurrencyConverter"

function App() {
  const [transactions, setTransactions] = useState([])
  const [activeTab, setActiveTab] = useState("dashboard")

  useEffect(() => {
    const savedTransactions = getTransactions()
    setTransactions(savedTransactions)
  }, [])

  const handleAddTransaction = transaction => {
    const updatedTransactions = [...transactions, transaction]
    setTransactions(updatedTransactions)
    saveTransactions(updatedTransactions)
  }

  const handleDeleteTransaction = id => {
    const updatedTransactions = transactions.filter(t => t.id !== id)
    setTransactions(updatedTransactions)
    saveTransactions(updatedTransactions)
  }

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">
                  Moliyaviy Boshqaruv Paneli
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center px-4 py-2 rounded-md ${activeTab === "dashboard"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
          >
            <LayoutDashboard className="w-5 h-5 mr-2" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("transactions")}
            className={`flex items-center px-4 py-2 rounded-md ${activeTab === "transactions"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
          >
            <ListPlus className="w-5 h-5 mr-2" />
            Transactions
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {activeTab === "dashboard" ? (
              <Dashboard transactions={transactions} onDeleteTransaction={handleDeleteTransaction} />
            ) : (
              <TransactionList
                transactions={transactions}
                onDeleteTransaction={handleDeleteTransaction}
              />
            )}
          </div>
          <div className="flex flex-col gap-5 lg:col-span-1 ">
            <CurrencyConverter />
            <TransactionForm onAddTransaction={handleAddTransaction} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
