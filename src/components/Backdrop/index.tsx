import { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';

interface BackdropProps {
  handleClose: VoidFunction;
  open: boolean;
  variant: 'dark' | 'light';
}

const CustomBackdrop: FC<BackdropProps> = ({ handleClose, variant, open, children }) => {
  return (
    <Backdrop className={variant} open={open} onClick={handleClose}>
      <div
        onClick={evt => {
          evt.stopPropagation();
        }}
      >
        {children}
      </div>
    </Backdrop>
  );
};

export default CustomBackdrop;
