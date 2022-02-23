import { makeStyles } from 'tss-react/mui';

import { Color } from '@custom-types/general-types';

export const useStyles = makeStyles()(() => ({
  root: {
    overflow: 'visible'
  },
  figure: {
    boxShadow: '0px 0px 20px #00000029'
  },
  content: {
    padding: 0,
    paddingTop: '2rem',
    overflow: 'hidden',

    '&.MuiCardContent-root': {
      paddingBottom: 0
    }
  },
  vp: {
    color: Color.WHITE,
    backgroundColor: Color.PRM_MAIN,
    padding: '2px 3px',
    marginRight: '1.3rem'
  }
}));
