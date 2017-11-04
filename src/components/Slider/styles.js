import { StyleSheet } from 'react-native';

import { vertical, colors, horizontal, width } from '@themes';

export default StyleSheet.create({
  container: {},
  slider: {},
  image: {
    alignSelf: 'center',
    height: width,
    width,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginVertical: vertical.xxSmall,
    justifyContent: 'center',
  },
  dot: {
    width: horizontal.small,
    height: horizontal.small,
    backgroundColor: colors.primaryLight,
    borderRadius: 25,
    marginHorizontal: horizontal.xSmall,
  },
  dotActive: {
    backgroundColor: colors.primaryDark,
  },
});
