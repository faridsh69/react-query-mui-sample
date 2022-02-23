import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { Color } from '@custom-types/general-types';

const StyledStack = styled(Stack)({
  paddingTop: '3rem',
  paddingBottom: '3rem',
  flexDirection: 'column',
  flex: 1,

  '&:first-of-type': {
    backgroundColor: Color.PRM_MAIN,
    paddingLeft: '14rem'
  },
  '&:last-of-type': {
    backgroundColor: Color.PRM_LIGHT,
    paddingLeft: '10rem'
  }
});

const ForCreatorsForSponsors: FC = () => {
  return (
    <Stack alignItems="center" justifyContent="space-between" direction="row">
      <StyledStack spacing={1} sx={{}}>
        <Typography className="white regular" lineHeight="1" variant="h2">
          For creators
        </Typography>
        <Typography className="regular white" variant="h5">
          Lorem ipsum dolor sit amet
        </Typography>
      </StyledStack>

      <StyledStack spacing={1}>
        <Typography className="white regular" lineHeight="1" variant="h2">
          For sponsors
        </Typography>
        <Typography className="regular white" variant="h5">
          Lorem ipsum dolor sit amet
        </Typography>
      </StyledStack>
    </Stack>
  );
};

export default ForCreatorsForSponsors;
