
import React from 'react'
import Header from './Header'
import Form from './Form'
import { Box , styled } from '@mui/material'
import SelectTab from './SelectTab.jsx';
import Response from './Response';
import ErrorScreen from './ErrorScreen';
import { useContext , useState} from 'react'

import { DataContext } from '../context/DataProvider'
import {checkParams} from '../utils/Common-utils'
import { SnackBar } from './SnackBar'
import { getData }  from '../service/api'

const Container = styled(Box)({
  width: '60%',
  margin:'20px auto 0 auto'
});

const Home = () => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errorResponse, setErrorResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState({});



  const {  formData , jsonText , paramData, headerData } = useContext(DataContext);

  const onSendClick = async () =>{
    if(!checkParams( formData , jsonText, paramData, headerData , setErrorMsg)){
      setError(true);
      return false;
    }
   let response = await getData( formData , jsonText, paramData, headerData  );
   if(response === 'error'){
   setErrorResponse(true);
    return;
   }
   setErrorResponse(false);
   setApiResponse(response.data);
 }

  return (
    <>
      <Header/>
      <Container> 
      <Form onSendClick={onSendClick}/>
      <SelectTab/>
      { 
        errorResponse ? <ErrorScreen/> :  <Response data={apiResponse}/>
      }
      {
        error && <SnackBar error={error} setError={setError} errorMsg={errorMsg}/>
      }
      </Container>
    </>
  )
}

export default Home
