import { makeStyles } from 'tss-react/mui';

import { Color } from '@custom-types/general-types';

export const useStyles = makeStyles()(() => ({
  slider: {
    '&:first-of-type': {
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
    bottom: '20%',

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
