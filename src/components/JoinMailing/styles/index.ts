import { makeStyles } from 'tss-react/mui';

import { Color } from '@custom-types/general-types';

export const useStyles = makeStyles()(() => ({
  root: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
    backgroundColor: Color.PRM_DARK,
    color: Color.WHITE,

    '& p': {
      color: 'inherit',
      lineHeight: 1.5
    },

    '& > div:first-of-type': {
      marginRight: '3.4rem'
    }
  },
  input: {
    '& > .MuiInputBase-root': {
      height: '5.8rem',
      width: '26rem',
      backgroundColor: Color.WHITE,

      '& > .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent'
      }
    }
  },
  btn: {
    height: '5.8rem',
    width: '16.8rem'
  }
}));
