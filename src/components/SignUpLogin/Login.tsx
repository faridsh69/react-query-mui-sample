import { FC } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface LoginProps {
  handleSwitch: VoidFunction;
}

const Login: FC<LoginProps> = ({ handleSwitch }) => {
  return (
    <>
      <Typography component="div">
        <span>Login to your account, new to Viral Tribe? Create an&nbsp;</span>
        <Button aria-label="underline" sx={{ padding: 0 }} onClick={handleSwitch}>
          account.
        </Button>
      </Typography>

      <Stack direction="column" spacing={1.5}>
        <TextField type="text" placeholder="Username" variant="outlined" />
        <TextField type="password" placeholder="Password" variant="outlined" />
      </Stack>

      <Button variant="contained" color="primary">
        Login
      </Button>

      <Typography variant="subtitle2" textAlign="center">
        <u>Forgotten password</u>
      </Typography>
    </>
  );
};

export default Login;
