const API_KEY = import.meta.env.VITE_EXCHANGERATE_KEY // Replace with your API key
const BASE_URL = "https://v6.exchangerate-api.com/v6"

export const getExchangeRate = async (from, to) => {
    try {
        const response = await fetch(`${BASE_URL}/${API_KEY}/pair/${from}/${to}`)
        if (!response.ok) {
            throw new Error("Failed to fetch exchange rate")
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching exchange rate:", error)
        throw error
    }
}
