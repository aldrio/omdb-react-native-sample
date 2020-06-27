import React from 'react'
import { View } from 'react-native'
import { Screen } from 'components/Screen'
import styles from './styles'
import { useSelector } from 'react-redux'
import { MovieList } from 'components/MovieList'
import { Text } from 'react-native-elements'

export const FavoritesScreen = () => {
  const favorites = useSelector((state) => state.favorites)

  return (
    <Screen>
      <Text h2>Favorites</Text>
      <View style={styles.list}>
        <MovieList movies={favorites} />
      </View>
      {favorites.length === 0 && (
        <View style={styles.emptyBox}>
          <Text>No favorites yet...</Text>
        </View>
      )}
    </Screen>
  )
}
