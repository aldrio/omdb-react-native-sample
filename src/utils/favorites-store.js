import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'

// Define favorites reducer

/**
 * Favorites list reducer
 *
 * @param {Array} state - Array of movie objects
 * @param {*} action - add movie / remove by imdbID
 */
const favoritesReducer = (state = [], action) => {
  // Return new state based on action
  switch (action.type) {
    case 'ADD_FAVORITE':
      const { movie } = action
      if (state.some((f) => f.imdbID === movie.imdbID)) {
        // Do nothing if already a favorite
        return state
      } else {
        return [...state, movie]
      }
    case 'REMOVE_FAVORITE':
      return state.filter((movie) => movie.imdbID !== action.imdbID)
    default:
      return state
  }
}

// Create root reducer
const rootReducer = combineReducers({
  favorites: favoritesReducer,
})

// Persist store to AsyncStorage automatically
const persistedReducer = persistReducer(
  {
    key: 'favorites',
    storage: AsyncStorage,
  },
  rootReducer
)

// Export globals
export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
