import { TextareaAutosize, Typography, Box } from '@mui/material'


const textAreaStyle = {
    width:'100%',
    padding:10,
    background: `url(http://i.imgur.com/2cOaJ.png)`,
    backgroundAttachment: 'local',
    backgroundRepeat: 'no-repeat',
    paddingLeft: 35,
    paddingTop: 10,
    borderColor: '#ccc' 
}

const Response = ({ data }) => {

  let obj = data;
    
    let readableobj = '{ \n';
    for(let key in obj) {
        readableobj += '\t'
        readableobj += (typeof obj[key] === "string")? `${key}: "${obj[key]}"` : `${key}: ${obj[key]}`; 
        if (Object.keys(obj).pop() !== key.toString()) {
            readableobj += ',\n'
        }
    }
    readableobj += '\n}';

  return (
    <Box>
      <Typography mb={2} mt={2}>Response</Typography>
      <TextareaAutosize
        minRows={5}
        maxRows={9}
        style={textAreaStyle}
        disabled='disabled'
        value={readableobj}
      />
    </Box>
  )
}

export default Response
