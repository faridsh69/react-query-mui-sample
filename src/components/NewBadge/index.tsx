import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const CustomBadge = styled(Badge)({
  position: 'relative',

  '& > .MuiBadge-badge': {
    borderRadius: 0,
    color: 'var(--color-secondary-dark)',
    fontWeight: 700
  }
});

interface NewBadgeProps {
  position: 'right' | 'top-left';
  display?: boolean;
}

const NewBadge: FC<NewBadgeProps> = ({ children, position, display }) => {
  if (!display) return <>{children}</>;

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
            : {
                top: 0,
                left: 0,
                right: 'unset',
                transform: 'translate(0, 0)'
              }
      }}
    >
      {children}
    </CustomBadge>
  );
};

export default NewBadge;
