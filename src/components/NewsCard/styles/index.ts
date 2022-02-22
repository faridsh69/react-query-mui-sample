import { makeStyles } from 'tss-react/mui';

import { Color } from '@custom-types/general-types';

export const useStyles = makeStyles()(() => ({
  root: {
    minWidth: '26rem',
    width: '26rem',
    boxShadow: 'none'
  },
  figure: {
    minWidth: '100%',
    maxWidth: '100%',
    height: '26rem'
  },
  content: {
    padding: 0,
    paddingTop: '2rem',
    overflow: 'hidden',
    color: Color.SEC_DARK,
    fontSize: '1.4rem',

    '&.MuiCardContent-root': {
      paddingBottom: 0
    }
  },
  btn: {
    color: Color.SEC_DARK,
    fontSize: '1.4rem'
  }
}));
