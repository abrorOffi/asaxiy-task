import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, ArcElement } from "chart.js";
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import TransactionList from "./TransactionList";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ArcElement);

const categori = [
    { category: "Salary" },
    { category: "Investments" },
    { category: "Food" },
    { category: "Transport" },
    { category: "Entertainment" },
    { category: "Bills" },
    { category: "Other" }
];

const Dashboard = ({ transactions, onDeleteTransaction }) => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Total Income, Expenses, and Net Balance
    const totalIncome = transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    const netBalance = totalIncome - totalExpenses;

    // Group transactions by category (only for expense transactions)
    const categories = ["All", ...new Set(categori.map((t) => t.category))];

    // Filter transactions based on the selected category
    const filteredTransactions =
        selectedCategory === "All"
            ? transactions
            : transactions.filter((t) => t.category === selectedCategory);

    // Prepare data for the bar chart
    const incomeData = filteredTransactions
        .filter((t) => t.type === "income")
        .map((t) => t.amount);

    const expenseData = categories.slice(1).map((category) => {
        return filteredTransactions
            .filter((t) => t.type === "expense" && t.category === category)
            .reduce((sum, t) => sum + t.amount, 0);
    });

    const labels = selectedCategory == "All" ? categories.slice(1) : [selectedCategory];

    const chartData = {
        labels,
        datasets: [
            {
                label: "Income",
                data: incomeData,
                backgroundColor: "#3B82F6", // Income color
            },
            {
                label: "Expenses",
                data: expenseData,
                backgroundColor: "#EF4444", // Expenses color
            },
        ],
    };

    const doughnutChartData = {
        labels: categories.slice(1),
        datasets: [
            {
                label: "Expenses by Category",
                data: expenseData,
                backgroundColor: ["#FF5733", "#33B5FF", "#FFEB33", "#EF4444", "#4CAF50", "#FF9800", "#9C27B0"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `$${context.raw.toFixed(2)}`;
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Category",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Amount",
                },
                beginAtZero: true,
            },
        },
    };

    const optionsDou = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `$${context.raw.toFixed(2)}`;
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Category",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Amount",
                },
                beginAtZero: true,
            },
        },
    }

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className="space-y-6">
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Income Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center">
                        <div className="p-3 bg-green-100 rounded-full">
                            <TrendingUp className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Total Income</p>
                            <p className="text-2xl font-semibold text-gray-900">
                                ${totalIncome.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Expenses Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center">
                        <div className="p-3 bg-red-100 rounded-full">
                            <TrendingDown className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">
                                Total Expenses
                            </p>
                            <p className="text-2xl font-semibold text-gray-900">
                                ${totalExpenses.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Net Balance Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-full">
                            <DollarSign className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Net Balance</p>
                            <p className="text-2xl font-semibold text-gray-900">
                                ${netBalance.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Selector */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold mb-4">Spending by Category</h3>
                    <div className="bg-white">
                        <select
                            className="p-1 border rounded outline-none"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="h-[400px] w-full">
                    <Bar data={chartData} options={options} className="w-full h-full" />
                </div>
            </div>


            {/* Doughnut chart for Expenses */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Expenses by Category</h3>
                <div className="h-80 w-screen">
                    <Doughnut data={doughnutChartData} options={optionsDou} />
                </div>
            </div>

            <TransactionList
                transactions={filteredTransactions}
                onDeleteTransaction={onDeleteTransaction}
            />
        </div>
    );
};

export default Dashboard;
