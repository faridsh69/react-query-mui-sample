import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    flex: '1 1 auto',

    '& > *:first-of-type': {
      paddingTop: '8.5rem'
    }
  }
}));
