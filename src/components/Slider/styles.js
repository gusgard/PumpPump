import { StyleSheet } from 'react-native';

import { vertical, colors, horizontal, width } from '@themes';

const imageDimension = width - (vertical.xSmall + horizontal.medium);

export default StyleSheet.create({
  container: {},
  slider: {},
  imageContainer: {
    height: width,
    width,
    backgroundColor: colors.primaryDark,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    height: imageDimension,
    width: imageDimension,
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
