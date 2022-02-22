import { makeStyles } from 'tss-react/mui';

import { Color } from '@custom-types/general-types';

export const useStyles = makeStyles()(() => ({
  root: {
    height: '50.4rem',
    color: Color.WHITE,

    '& > span': {
      background: `${Color.SEC_DARK} !important`,
      zIndex: -1
    }
  },
  content: {
    maxWidth: '50%',
    position: 'relative',

    '& > svg': {
      position: 'absolute',
      top: '-2rem',
      left: '-8rem'
    },

    '& > p:first-of-type': {
      fontSize: '4rem',
      color: 'inherit',
      letterSpacing: 0,
      fontWeight: 300,
      lineHeight: 1.3
    },

    '& > p:last-child': {
      color: Color.PRM_MAIN,
      marginTop: '3rem'
    }
  },
  text: {
    color: Color.WHITE
  }
}));
