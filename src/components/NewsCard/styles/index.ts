import { makeStyles } from 'tss-react/mui';

import { Color } from '@custom-types/general-types';

export const useStyles = makeStyles()(() => ({
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
