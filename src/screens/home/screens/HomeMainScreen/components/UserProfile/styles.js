import { StyleSheet } from 'react-native'

import { horizontal, vertical, fontSize } from '@themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: horizontal.small,
    paddingTop: vertical.small,
    paddingBottom: vertical.xxSmall,
  },
  texts: {
    flex: 1,
    marginLeft: horizontal.small,
  },
  name: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
    marginBottom: vertical.xxSmall,
  },
})
