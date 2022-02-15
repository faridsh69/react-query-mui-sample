import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<void, 'heading'>()((_theme, _params, classes) => ({
  footer: {
    minHeight: '37.6rem',
    backgroundImage: 'url(/images/footer.svg)',
    backgroundSize: 'auto 18.8rem',
    display: 'flex',
    padding: '10.7rem 13.2rem 2.3rem 13.7rem',
    color: 'var(--color-white)',

    '& > div': {
      flex: 1
    }
  },
  heading: {
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: '2rem'
  },
  link: {
    '&:hover': {
      opacity: 1
    }
  },
  figure: {
    width: '13.2rem',
    height: '3.5rem',
    position: 'relative',
    marginBottom: '2.4rem',
    marginTop: '-1.25rem'
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    color: 'var(--color-grey-light)',

    [`& a, & p:not(.${classes.heading})`]: {
      fontSize: '1.4rem',
      opacity: 0.5,
      color: 'inherit'
    },

    '&:first-child': {
      minWidth: '26rem'
    },

    '&:not(:last-child)': {
      marginRight: '5rem'
    }
  }
}));
