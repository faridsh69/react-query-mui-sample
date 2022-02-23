import { makeStyles } from 'tss-react/mui';

import { Color } from '@custom-types/general-types';

export const useStyles = makeStyles()(() => ({
  root: {
    paddingTop: '5rem',
    paddingBottom: '10rem'
  },
  title: {
    fontSize: '2.5rem',
    maxWidth: '80%',
    marginBottom: '6rem',
    paddingLeft: '25rem',
    color: Color.SEC_MAIN
  }
}));
