import { getCurrencySymbol } from "../constants/currencies"

export const formatCurrency = (amount, currency) => {
  const symbol = getCurrencySymbol(currency)
  return `${symbol} ${amount.toLocaleString()}`
}

export const formatDate = date => {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  })
}
