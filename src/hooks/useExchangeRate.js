import { useState, useEffect } from "react"
import { getExchangeRate } from "../utils/api"

export function useExchangeRate(from, to) {
  const [rate, setRate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true

    const fetchRate = async () => {
      try {
        setLoading(true)
        const data = await getExchangeRate(from, to)
        if (mounted) {
          setRate(data.conversion_rate)
          setError(null)
        }
      } catch (err) {
        if (mounted) {
          setError(
            err instanceof Error
              ? err
              : new Error("Failed to fetch exchange rate")
          )
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    fetchRate()

    return () => {
      mounted = false
    }
  }, [from, to])

  return { rate, loading, error }
}
