import React from "react"
import { format } from "date-fns"
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react"

export default function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {transactions?.map(transaction => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center">
                {transaction.type === "income" ? (
                  <ArrowUpCircle className="w-6 h-6 text-green-500 mr-3" />
                ) : (
                  <ArrowDownCircle className="w-6 h-6 text-red-500 mr-3" />
                )}
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-gray-500">
                    {format(new Date(transaction.date), "MMM d, yyyy")} •{" "}
                    {transaction.category}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span
                  className={`font-semibold ${
                    transaction.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.type === "income" ? "+" : "-"}{" "}
                  {transaction.currency} {transaction.amount}
                </span>
                <button
                  onClick={() => onDeleteTransaction(transaction.id)}
                  className="ml-4 text-gray-400 hover:text-red-500"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          {transactions?.length === 0 && (
            <p className="text-center text-gray-500 py-4">
              No transactions yet
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
