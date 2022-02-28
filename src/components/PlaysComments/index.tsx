import { FC } from 'react';
import { styled } from '@mui/material/styles';

import { SVG } from '@assets/icons/svgIcons';
import { Color } from '@interfaces/general';

const Root = styled('div')(() => ({
  color: Color.GREY_DARK,
  fontSize: '1.4rem',
  marginRight: '1rem',

  '& > svg': {
    fill: 'currentColor',
    marginRight: '0.5rem'
  }
}));

interface PlaysCommentsProps {
  plays?: number;
  comments?: number;
}

const PlaysComments: FC<PlaysCommentsProps> = ({ plays = 0, comments = 0 }) => {
  return (
    <Root>
      <SVG id="play-arrow" />
      <span>{plays}</span>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <SVG id="comment" />
      <span>{comments}</span>
    </Root>
  );
};

export default PlaysComments;
