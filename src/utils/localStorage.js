export const saveTransactions = transactions => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }
  
  export const getTransactions = () => {
    const stored = localStorage.getItem("transactions")
    return stored ? JSON.parse(stored) : []
  }
  