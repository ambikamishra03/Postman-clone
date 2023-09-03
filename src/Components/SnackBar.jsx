import {Snackbar} from '@mui/material'

export const SnackBar = ({error, setError, errorMsg}) => {
  const handleClose = () =>{
    setError(false);
  }
  return (
    <Snackbar
    open={error}
    autoHideDuration={4000}
    onClose={handleClose}
    message={errorMsg}
  />
  )
}

