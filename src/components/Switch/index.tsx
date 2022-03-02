import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { Color } from '@interfaces/general';

const StyledSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(() => ({
  width: '6rem',
  height: '3rem',
  padding: 0,
  overflow: 'visible',

  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 0,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(3rem)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: Color.PRM_MAIN,
        opacity: 0.25,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: Color.WHITE,
      opacity: 0.8
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.2
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: '3rem',
    height: '3rem',
    backgroundColor: Color.PRM_MAIN
  },
  '& .MuiSwitch-track': {
    borderRadius: '3rem',
    backgroundColor: Color.PRM_MAIN,
    opacity: 0.25
  }
}));

interface TypoProps extends TypographyProps {
  value: 'no' | 'yes';
  checked?: boolean;
}

const StyledTypo = styled(Typography)<TypoProps>(({ checked, value }) => ({
  ...((checked && value == 'yes') || (!checked && value == 'no')
    ? { color: Color.PRM_MAIN, opacity: 1 }
    : { color: Color.SEC_MAIN, opacity: 0.5 }),
  fontWeight: 500
}));

const CustomSwitch: FC<SwitchProps> = props => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <StyledTypo value="no" checked={props.checked}>
        No
      </StyledTypo>
      <StyledSwitch {...props} />
      <StyledTypo value="yes" checked={props.checked}>
        Yes
      </StyledTypo>
    </Stack>
  );
};

export default CustomSwitch;
