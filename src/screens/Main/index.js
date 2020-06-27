import React, { useState, useCallback } from 'react'
import { View } from 'react-native'
import { Text, Icon, Button, Input } from 'react-native-elements'
import { Screen } from 'components/Screen'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

export const MainScreen = () => {
  const navigation = useNavigation()
  const [input, setInput] = useState('')

  const search = useCallback(() => {
    navigation.navigate('ResultsScreen', { query: input })
  }, [navigation, input])

  return (
    <Screen>
      <View style={styles.mainScreen}>
        <Text h1 style={styles.title}>
          OMDB Sample
        </Text>
        <View>
          <Input
            placeholder="Search movies or TV Shows..."
            value={input}
            onChangeText={setInput}
          />
          <Button
            title="Search"
            disabled={input.length === 0}
            onPress={search}
            icon={
              <Icon
                name="search"
                type="feather"
                color="white"
                size={15}
                style={styles.searchIcon}
              />
            }
          ></Button>
        </View>
      </View>
    </Screen>
  )
}
