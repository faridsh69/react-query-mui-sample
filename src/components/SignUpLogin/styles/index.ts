import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => ({
  root: {
    height: '100vh',
    width: '53.6rem',
    backgroundColor: 'var(--color-white)',
    padding: '15.2rem 9.2rem',
    position: 'relative'
  },
  tabs: {
    '& .MuiTabs-indicator': {
      display: 'none'
    }
  },
  tab: {
    fontSize: '3.5rem',
    opacity: 0.5,

    '&:first-of-type': {
      paddingLeft: 0
    },

    '&.Mui-selected': {
      opacity: 1,
      color: 'var(--color-secondary-dark)',
      textDecoration: 'underline',
      textDecorationThickness: 2.5
    }
  },
  closeBtn: {
    position: 'absolute',
    top: '2.5rem',
    right: '2.3rem',

    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}));
