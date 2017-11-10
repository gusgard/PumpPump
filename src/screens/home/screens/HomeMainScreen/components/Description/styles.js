import { StyleSheet } from 'react-native';

import { colors, fontSize } from '@themes';

export default StyleSheet.create({
  description: {
    fontSize: fontSize.medium,
  },
  highlighted: {
    fontWeight: 'bold',
    color: colors.primaryDark,
  },
  readMore: {
    fontWeight: 'bold',
  },
});
