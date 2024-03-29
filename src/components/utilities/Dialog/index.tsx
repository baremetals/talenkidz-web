import React, { MouseEvent } from 'react';
// eslint-disable-next-line no-unused-vars
import { Dialog as MUIDialog, DialogContent, DialogContentText } from '@mui/material';

import { CustomDialogActions } from './styles';

type Props = {
  open: boolean,
  close: () => void,
  children: Node,
  onButtonClick?: (_e: MouseEvent) => void,
  buttonText?: string,
}

const Dialog = ({ children, open, close, onButtonClick, buttonText }: Props) => {
  return (
    <MUIDialog onClose={close} open={open}>
      <DialogContent>
        { children }
      </DialogContent>
      {buttonText && (
        <CustomDialogActions>
          <button onClick={onButtonClick} autoFocus>
            { buttonText }
          </button>
        </CustomDialogActions>
      )}
    </MUIDialog>
  );
};

export default Dialog;
