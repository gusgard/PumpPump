import { StyleSheet } from 'react-native';

import { width, colors } from '@themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  imageGrid: {
    width: '100%',
    height: '100%',
  },
  imageSwiper: {
    height: width,
    width,
  },
});
