import Config from './config'
import { useEffect, useState } from 'react'

/**
 * Search movies/tv shows
 *
 * @param {query} query Title to search for on OMDB
 */
export const search = async (query) => {
  const data = await fetch(
    `http://www.omdbapi.com/?apikey=${Config.omdbApiKey}&s=${encodeURIComponent(
      query
    )}`
  )

  const results = await data.json()

  // Parse results
  if ('Error' in results) {
    throw new Error(results['Error'])
  }

  return results['Search']
}

/**
 * Hook to search movies/tv shows
 *
 * @param {query} query Title to search for on OMDB
 */
export const useSearch = (query) => {
  // Query state in hooks
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Perform query in async block
    ;(async () => {
      setResults(null)
      setLoading(true)
      setError(null)

      try {
        const results = await search(query)
        setResults(results)
      } catch (error) {
        console.log('error searching omdb', error)
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [query])

  return { results, loading, error }
}
