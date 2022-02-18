import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => ({
  root: {
    paddingBottom: '2rem',
    borderBottom: '1px solid #dfd8d4',

    '&:not(:last-child)': {
      marginBottom: '2rem'
    }
  },
  figure: {
    minWidth: '16.8rem',
    maxWidth: '16.8rem',
    height: '16.8rem'
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.2rem',

    '&.MuiTypography-root': {
      marginTop: 0
    },

    '& > span': {
      '&:first-of-type': {
        marginRight: '1.7rem'
      },
      marginRight: '1rem'
    },

    '& > svg': {
      marginRight: '0.5rem'
    }
  },
  iconBox: {
    color: 'var(--color-grey-dark)',
    fontSize: '1.4rem',
    marginRight: '1rem',

    '& > svg': {
      fill: 'currentColor',
      margin: '0 0.5rem'
    }
  }
}));
