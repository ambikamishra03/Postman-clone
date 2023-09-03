import { TextareaAutosize, Typography } from '@mui/material'
import {useContext} from 'react'

import { DataContext } from '../context/DataProvider'

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

const CreateJsonText = () => {

  const { setJsonText } = useContext(DataContext);

  const onValueChange = (e) =>{
    setJsonText(e.target.value);
  }
  return (
    <>
      <Typography mb={2} mt={2}>JSON</Typography>
      <TextareaAutosize
        minRows={4}
        maxRows={6}
        style={textAreaStyle}
        onChange={(e)=> onValueChange(e)} 
      />
    </>
  )
}

export default CreateJsonText
