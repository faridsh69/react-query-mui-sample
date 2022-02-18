import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<void, 'link'>()((_theme, _params, classes) => ({
  header: {
    padding: '0 3rem',
    display: 'flex',
    alignItems: 'flex-end',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 100,
    height: '6.9rem',

    [`&.light > .${classes.link}`]: {
      color: 'var(--color-white)'
    },

    ['&.light svg']: {
      fill: 'var(--color-white)'
    },

    '& button': {
      fontSize: '1.8rem'
    }
  },
  logo: {
    width: '20.7rem',
    height: '6.1rem',
    marginRight: '4rem',
    transform: 'translateY(1rem)',
    alignSelf: 'flex-start',

    '& > svg': {
      width: '100%',
      height: '100%'
    }
  },
  link: {
    textDecoration: 'none',
    fontSize: '2rem',
    fontWeight: 600,
    color: 'var(--color-secondary-dark)',
    opacity: 0.5,
    marginRight: '2.8rem',
    marginBottom: '0.5rem',

    "&[aria-selected='true']": {
      opacity: 1
    },

    '&:hover': {
      opacity: 1
    },

    '& > sup': {
      marginLeft: -5
    }
  }
}));
