import { makeStyles } from 'tss-react/mui';

import { Color } from '@custom-types/general-types';

export const useStyles = makeStyles()(theme => ({
  slider: {
    '&:first-child': {
      paddingTop: 0
    }
  },
  sliderItem: {
    '& > div': {
      paddingTop: '8.5rem'
    }
  },
  sliderDotList: {
    right: 'auto',
    left: '25rem',
    bottom: '10.8rem',

    [theme.breakpoints.up('bigDesktop')]: {
      left: '20rem'
    },

    '@media (max-width: 1300px)': {
      left: '18rem'
    },

    '&.lg': {
      bottom: '12.4rem'
    },

    '& > .react-multi-carousel-dot > button': {
      width: '1.9rem',
      height: '1.9rem',
      borderColor: Color.WHITE,
      backgroundColor: 'transparent'
    },

    '& > .react-multi-carousel-dot--active > button': {
      backgroundColor: Color.WHITE
    }
  }
}));
