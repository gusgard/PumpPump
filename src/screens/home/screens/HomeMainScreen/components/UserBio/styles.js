import { StyleSheet } from 'react-native';

import { horizontal, vertical, colors, fontSize } from '@themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: horizontal.small,
    marginVertical: vertical.small,
  },
  texts: {
    // borderWidth: 1,
    flex: 1,
    marginLeft: horizontal.small,
  },
  name: {
    // borderWidth: 1,
    flex: 1,
    fontSize: fontSize.large,
    fontWeight: 'bold',
  },
  bio: {
    borderWidth: 1,
    // justifyContent: 'flex-end',
    // alignSelf: 'flex-end',
    // alignItems: 'center',
    // flex: 1,
    fontSize: fontSize.medium,
  },
  highlighted: {
    fontWeight: 'bold',
    color: colors.primaryDark,
  },
});
