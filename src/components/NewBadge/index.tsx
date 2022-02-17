import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const CustomBadge = styled(Badge)({
  position: 'relative',

  '& > .MuiBadge-badge': {
    borderRadius: 0,
    color: 'var(--color-secondary-dark)',
    fontWeight: 600
  }
});

interface NewBadgeProps {
  position: 'right' | 'top-left';
}

const NewBadge: FC<NewBadgeProps> = ({ children, position }) => {
  return (
    <CustomBadge
      components={{ Root: 'div' }}
      color="primary"
      badgeContent="NEW"
      sx={{
        '& > .MuiBadge-badge':
          position === 'right'
            ? {
                top: '50%',
                right: 0,
                transform: 'translate(120%, -50%)'
              }
            : {}
      }}
    >
      {children}
    </CustomBadge>
  );
};

export default NewBadge;
