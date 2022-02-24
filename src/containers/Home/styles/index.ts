import { makeStyles } from 'tss-react/mui';

import { Color } from '@interfaces/general';

export const useStyles = makeStyles()(theme => ({
  root: {
    height: '61.3rem',
    color: Color.WHITE,
    paddingLeft: '25rem',
    backgroundBlendMode: 'multiply',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',

    [theme.breakpoints.up('bigDesktop')]: {
      paddingLeft: '20rem'
    },

    '@media (max-width: 1300px)': {
      paddingLeft: '18rem'
    }
  },
  title: {
    paddingTop: '10rem',
    color: 'inherit',
    fontSize: '6rem',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: '4rem',
    maxWidth: '50%',

    '@media (max-width: 1300px)': {
      maxWidth: '55%'
    }
  },
  circleLogo: {
    position: 'absolute',
    top: '45.3rem',
    right: '3rem',

    [theme.breakpoints.up('bigDesktop')]: {
      top: '48.5rem'
    },

    '& > span': {
      mixBlendMode: 'difference'
    }
  }
}));
