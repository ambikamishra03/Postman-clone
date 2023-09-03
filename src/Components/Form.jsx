import { Box, Button, Select, MenuItem , TextField} from '@mui/material'
// import {useState} from 'react'
import { styled } from '@mui/material/styles';
import { useContext } from 'react'

import { DataContext } from '../context/DataProvider'


const SelectOpt = styled(Select)({
    width: 120,
    height:40,
    margin:5
  });

  const Text = styled(TextField)({
    width: '100%',
    background:'#f6f6f6',
  });

  const Component = styled(Box)({
    display: 'flex',
    alignItems:'center',
    justifyContent:'space-between'
  });

  const SendButton = styled(Button)({
    width: 100,
    height:40,
    marginLeft:[5 , '!important']
  });

const Form = ({ onSendClick }) => {
  const {formData, setFormData} = useContext(DataContext);
  const onUrlChange = (e) => {
    setFormData({ ...formData, url: e.target.value });
}

const handleChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
}

  return (
    <Component>
    <SelectOpt
      value={formData.type} 
      label="POST" 
      onChange={(e) => handleChange(e)}
  >
    <MenuItem value={"POST"}>POST</MenuItem>
    <MenuItem value={"GET"}>GET</MenuItem>
  </SelectOpt>
      <Text size='small' onChange={(e) => onUrlChange(e)}/>
     <SendButton variant='contained' onClick={() => onSendClick()}>Send</SendButton>

    </Component>
  )
}

export default Form
