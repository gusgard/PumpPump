import { StyleSheet } from 'react-native';

import { colors } from '@themes';

const borderWidth = 2;

export default StyleSheet.create({
  imageContainer: {
    borderRightWidth: borderWidth,
    borderLeftWidth: borderWidth,
    borderColor: colors.primaryLight,
  },
  image: {
    alignSelf: 'center',
  },
  separator: {
    borderColor: colors.primaryLight,
    borderWidth,
  },
});
