import { makeStyles } from 'tss-react/mui';

import { Color } from '@interfaces/general';

export const useStyles = makeStyles()(theme => ({
  figure: {
    minWidth: '44.4rem',
    maxWidth: '44.4rem',
    height: '44.4rem'
  },
  infoBox: {
    color: Color.WHITE,
    alignItems: 'flex-start',
    paddingLeft: '25rem',
    paddingTop: '8rem',

    '@media (max-width: 1300px)': {
      paddingLeft: '15rem'
    },

    '& > button.MuiButton-root': {
      marginTop: '3rem'
    },

    '& > p:first-of-type': {
      whiteSpace: 'nowrap',
      maxWidth: '50rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',

      [theme.breakpoints.up('bigDesktop')]: {
        maxWidth: '75rem'
      }
    },

    '& p,& span': {
      color: 'inherit'
    }
  },
  panel: {
    marginBottom: '9rem',

    '& > div.slider': {
      marginTop: '4.9rem'
    },

    '& > div.slider:nth-of-type(2)': {
      marginTop: '3rem'
    }
  }
}));
