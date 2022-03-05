import { createContext, ReactNode, FC, useState, useMemo } from 'react';
import Dialog from '@mui/material/Dialog';

export type BackdropVariant = 'light' | 'dark';

interface DialogProps {
  content: ReactNode;
  open: boolean;
  fullScreen?: boolean;
  backdrop?: BackdropVariant;
  onClose?: VoidFunction;
  onExited?: VoidFunction;
}

type DialogOption = Omit<DialogProps, 'open'>;

/**
 * The first element is a function for opening a new dialog.
 * And the second element is a function for closing the dialog
 *
 * @example [openDialog, closeDialog]
 */
type DialogContextType = readonly [(opt: DialogOption) => void, VoidFunction];

// eslint-disable-next-line @typescript-eslint/no-empty-function
const CTX_INITIAL_VALUE = [() => {}, () => {}] as const;

export const DialogContext = createContext<DialogContextType>(CTX_INITIAL_VALUE);

const DialogProvider: FC = ({ children }) => {
  // List of all dialogs props
  const [dialogs, setDialogs] = useState<DialogProps[]>([]);

  const createDialog = (opt: DialogOption) => {
    setDialogs(dialogs => [...dialogs, { ...opt, open: true }]);
  };

  const handleClose = () => {
    // Close the last dialog that was opened !
    setDialogs(dialogs => {
      const latestDialog = dialogs.pop();
      if (!latestDialog) return dialogs;

      if (latestDialog.onClose) latestDialog.onClose();
      return [...dialogs, { ...latestDialog, open: false }];
    });
  };

  const handleKill = (onExited?: VoidFunction) => {
    if (onExited) onExited();
    // Remove the last dialog item
    setDialogs(dialogs => dialogs.slice(0, -1));
  };

  const contextValue = useMemo(() => [createDialog, handleClose] as const, []);

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      {dialogs.map(({ open, content, onExited, fullScreen = false, backdrop = 'dark' }, i) => (
        <Dialog
          key={i}
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          TransitionProps={{ onExited: handleKill.bind(null, onExited) }}
          BackdropProps={{ className: backdrop }}
        >
          {content}
        </Dialog>
      ))}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
