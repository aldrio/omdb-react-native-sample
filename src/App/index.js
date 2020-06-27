import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from 'screens/Main'
import { ResultsScreen } from 'screens/Results'
import { FavoritesScreen } from 'screens/Favorites'
import { Icon } from 'react-native-elements'
import { store, persistor } from 'utils/favorites-store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// Create navigation
const Tabs = createBottomTabNavigator()
const MainStack = createStackNavigator()

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="ResultsScreen"
        component={ResultsScreen}
        options={({ route }) => ({
          title: `Results for ${route.params.query}`,
        })}
      />
    </MainStack.Navigator>
  )
}

/**
 * App is the root React component
 */
export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tabs.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                // Render icon for each tab
                let iconName

                if (route.name === 'MainScreen') {
                  iconName = 'film'
                } else if (route.name === 'FavoritesScreen') {
                  iconName = 'star'
                }

                return (
                  <Icon
                    name={iconName}
                    size={size}
                    color={color}
                    type="feather"
                  />
                )
              },
            })}
          >
            <Tabs.Screen
              name="MainScreen"
              component={MainStackScreen}
              options={{ title: 'Movies' }}
            />
            <Tabs.Screen
              name="FavoritesScreen"
              component={FavoritesScreen}
              options={{ title: 'Favorites' }}
            />
          </Tabs.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}
