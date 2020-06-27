import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Text } from 'react-native-elements'
import { Screen } from 'components/Screen'
import styles from './styles'
import { useSearch } from 'utils/omdb'
import { useRoute } from '@react-navigation/native'
import { MovieList } from 'components/MovieList'

export const ResultsScreen = () => {
  const route = useRoute()
  const { results, error, loading } = useSearch(route.params.query)

  return (
    <Screen>
      {loading && (
        <View style={styles.loadingBox}>
          <ActivityIndicator />
        </View>
      )}
      {error && (
        <View style={styles.errorBox}>
          <Text h2>Error!</Text>
          <Text>{error.message}</Text>
        </View>
      )}
      {results && (
        <View style={styles.results}>
          <MovieList movies={results} />
        </View>
      )}
    </Screen>
  )
}
