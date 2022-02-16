import { FC, useState, SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { SVG } from '@assets/icons/svgIcons';
import { useDialog } from '@hooks/useDialog';
import SignUp from './SignUp';
import Login from './Login';
import { useStyles } from './styles';

export enum AuthType {
  LOGIN = 'login',
  REGISTER = 'register'
}

interface SignUpLoginProps {
  type: AuthType;
}

const SignUpLogin: FC<SignUpLoginProps> = ({ type }) => {
  const { classes } = useStyles();
  const [value, setValue] = useState(type);
  const [_, closeDialog] = useDialog();

  const handleChange = (_: SyntheticEvent, newValue: AuthType) => {
    setValue(newValue);
  };

  return (
    <Stack direction="column" spacing={3} className={classes.root}>
      <IconButton className={classes.closeBtn} onClick={closeDialog}>
        <SVG id="close" />
      </IconButton>

      <Tabs className={classes.tabs} value={value} onChange={handleChange}>
        <Tab className={classes.tab} value={AuthType.REGISTER} label="Sign up" />
        <Tab className={classes.tab} value={AuthType.LOGIN} label="Login" />
      </Tabs>

      {value === AuthType.REGISTER ? (
        <SignUp />
      ) : (
        <Login handleSwitch={setValue.bind(null, AuthType.REGISTER)} />
      )}
    </Stack>
  );
};

export default SignUpLogin;
