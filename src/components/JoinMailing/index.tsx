import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useStyles } from './styles';

const JoinMailingList: FC = () => {
  const { classes } = useStyles();

  return (
    <Stack direction="row" spacing={2} className={`padding ${classes.root}`}>
      <div>
        <Typography variant="h3" component="p">
          Join the mailing list
        </Typography>
        <Typography className="regular" variant="subtitle1" sx={{ opacity: 0.75 }}>
          Be the first to discover new shows and episodes
        </Typography>
      </div>

      <TextField className={classes.input} variant="outlined" placeholder="Name" />
      <TextField className={classes.input} variant="outlined" placeholder="Email" type="email" />

      <Button variant="outlined" color="inherit" className={classes.btn}>
        Sign me up!
      </Button>
    </Stack>
  );
};

export default JoinMailingList;
