import { FC } from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Color } from '@interfaces/general';

const JoinUs: FC = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="space-between"
      direction="row"
      mt="4rem"
      mb="8.8rem"
      pr="21.5rem"
      pl="23.1rem"
    >
      <Stack alignItems="flex-start" direction="column" spacing={2}>
        <Typography className="regular" lineHeight="1" variant="h2">
          Become part of the Tribe today.
        </Typography>
        <Typography color={Color.SEC_MAIN} className="regular" variant="h5">
          Its free, start listening, loving and earning.
        </Typography>

        <Button variant="contained" color="primary" className="bold shadow">
          GET STARTED
        </Button>
      </Stack>

      <figure>
        <Image
          src="/images/join-viral.png"
          alt="join-viral-tribe"
          width={333}
          height={382}
          quality={100}
        />
      </figure>
    </Stack>
  );
};

export default JoinUs;
