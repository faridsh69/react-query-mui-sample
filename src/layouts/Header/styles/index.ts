import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => ({
  header: {
    padding: '0 3rem',
    display: 'flex',
    alignItems: 'flex-end',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 100
  },
  figure: {
    width: '20.7rem',
    height: '6.4rem',
    position: 'relative'
  },
  link: {
    textDecoration: 'none',
    fontSize: '2rem',
    fontWeight: 600,
    color: '#261E1F',
    opacity: 0.5,
    marginRight: '2.8rem',

    '&:hover': {
      color: 'var(--color-black)',
      opacity: 1
    },

    '&:first-of-type': {
      marginLeft: '4rem'
    },

    '& > sup': {
      marginLeft: -5
    }
  }
}));
