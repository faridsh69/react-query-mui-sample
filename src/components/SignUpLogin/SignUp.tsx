import { FC } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignUp: FC = () => {
  return (
    <>
      <Typography mb="3rem">
        It’s free! Sign up today to start listening and receiving SATs.
      </Typography>

      <Stack direction="column" spacing={1.5}>
        <TextField type="email" placeholder="Email" variant="outlined" />
        <TextField type="text" placeholder="Username" variant="outlined" />
        <TextField type="password" placeholder="Password" variant="outlined" />
      </Stack>

      <Button variant="contained" color="primary" className="my">
        Sign up
      </Button>

      <Typography variant="subtitle2" textAlign="center">
        By signing up for a Viral Tribe account, you agree to our
        <u>&nbsp;Terms & Conditions&nbsp;</u>
        of use.
      </Typography>
    </>
  );
};

export default SignUp;
