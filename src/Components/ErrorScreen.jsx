import { Typography, Box, styled} from '@mui/material'

const ErrorImg = styled('img')({
    width: '70%',
    height:'auto',
    objectPosition: 'center 0%',
    margin:'auto'
  });

const ErrorScreen = () => {
    const error = 'https://i.stack.imgur.com/01tZQ.png';

    return (
        <Box>
            <Typography mt={2} mb={2}>Response</Typography>
            <Box style={{ display: 'flex' }}>
                <ErrorImg src={error} alt="error"/>
            </Box>
        </Box>
    )
}

export default ErrorScreen
