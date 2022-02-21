import { makeStyles } from 'tss-react/mui';

import { Color } from '@custom-types/general-types';

export const useStyles = makeStyles()(() => ({
  figure: {
    minWidth: '44.4rem',
    maxWidth: '44.4rem',
    height: '44.4rem'
  },
  infoBox: {
    color: Color.WHITE,
    alignItems: 'flex-start',
    paddingLeft: '22rem',
    paddingTop: '8rem',

    '& > button.MuiButton-root': {
      marginTop: '3rem'
    },

    '& p,& span': {
      color: 'inherit'
    }
  },
  panel: {
    marginBottom: '9rem',
    marginLeft: '14rem',

    '& > div.slider': {
      marginTop: '4.9rem'
    },

    '& > div.slider:nth-of-type(2)': {
      marginTop: '3rem'
    }
  }
}));
