import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  results: {
    marginHorizontal: -12,
  },

  loadingBox: {
    height: 200,
    justifyContent: 'center',
  },

  errorBox: {
    borderStyle: 'dashed',
    borderColor: 'tomato',
    borderWidth: 3,
    backgroundColor: '#ffe5e1',
    borderRadius: 3,
    padding: 12,
  },
})
