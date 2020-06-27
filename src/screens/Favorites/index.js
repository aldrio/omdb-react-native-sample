import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { Screen } from 'components/Screen'
import styles from './styles'

export const FavoritesScreen = () => {
  return (
    <Screen>
      <View>
        <Text h1>
          Favorites
        </Text>
      </View>
    </Screen>
  )
}
