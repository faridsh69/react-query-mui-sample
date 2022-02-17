import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => ({
  tabs: {
    '& .MuiTabs-indicator': {
      height: 5,
      backgroundColor: 'var(--color-secondary-dark)'
    }
  },
  tab: {
    color: 'var(--color-secondary-main)',
    opacity: 0.5,
    fontWeight: 500,

    '&.Mui-selected': {
      color: 'var(--color-secondary-dark)',
      opacity: 1
    }
  }
}));
