import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const SimpleDialog = ({open, onClose, dTitle, children}) => {
  const handleClose=()=>{
    onClose();
  }
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
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
      <div className="dialog-content">
        <h2 className="main-title" id='dialog-title'>{dTitle}</h2>
        <div className="dialog-description">
          {children}
        </div>
      </div>
    </Dialog>
  );
}

export default SimpleDialog