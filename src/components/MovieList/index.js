import React, { useCallback } from 'react'
import styles from './styles'
import { ListItem, Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'

/**
 * Single movie list item
 * @param {*} movie - Movie
 */
export const MovieItem = ({ movie }) => {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites)

  const isFavorite = favorites.some((f) => movie.imdbID === f.imdbID)

  // Toggle favorites
  const toggleFavorite = useCallback(() => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', imdbID: movie.imdbID })
    } else {
      dispatch({ type: 'ADD_FAVORITE', movie })
    }
  }, [isFavorite, movie])

  return (
    <ListItem
      key={movie.imdbID}
      title={movie.Title}
      subtitle={movie.Year}
      leftAvatar={{ source: { uri: movie.Poster } }}
      bottomDivider
      rightIcon={
        <Icon
          type="font-awesome"
          name={isFavorite ? 'star' : 'star-o'}
          onPress={toggleFavorite}
        />
      }
    />
  )
}

/**
 * Movie List
 *
 * @param movies - Array of movies
 */
export const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
    </>
  )
}
