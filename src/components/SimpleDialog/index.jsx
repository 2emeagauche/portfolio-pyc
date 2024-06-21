import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const SimpleDialog = ({open, onClose, dTitle, children}) => {
  const handleClose=()=>{
    onClose();
  }
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
      <DialogTitle disableTypography id='dialog-title'>{dTitle}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <DialogContentText id='dialog-description'>
          {children}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default SimpleDialog