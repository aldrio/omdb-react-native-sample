import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'

/**
 * Common screen wrapper
 * 
 * @param children - Screen contents 
 */
export const Screen = ({ children }) => {
  return (
    <>
      <StatusBar backgroundColor="#333" style="light" translucent={false}  />
      <SafeAreaView style={styles.root}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
