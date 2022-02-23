import { makeStyles } from 'tss-react/mui';

import { Color } from '@custom-types/general-types';

export const useStyles = makeStyles()(() => ({
  root: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
    paddingRight: '3rem',
    backgroundColor: Color.PRM_DARK,
    color: Color.WHITE,

    '& p': {
      color: 'inherit',
      lineHeight: 1.5
    },

    '& > div:first-of-type': {
      marginRight: '2.4rem'
    }
  },
  input: {
    '& > .MuiInputBase-root': {
      height: '5.8rem',
      width: '26rem',
      backgroundColor: Color.WHITE,

      '@media (max-width: 1250px)': {
        width: '24rem'
      },

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
