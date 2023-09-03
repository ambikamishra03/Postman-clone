import { Box, Tab, Tabs, styled} from '@mui/material'
import  { useState , useContext} from 'react'
import CreateTable from './CreateTable';
import CreateJsonText from './CreateJsonText';

import { DataContext } from '../context/DataProvider'


const TabOpt = styled(Tab)({
    textTransform: ['none' , '!important']
  });



const SelectTab = () => {

    const [value, setValue] = useState(0);


    const { paramData, setParamData, headerData, setHeaderData } = useContext(DataContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      }; 
  return (
    <Box style={{marginTop:20}}>
      <Tabs 
      TabIndicatorProps={{style:{ backgroundColor:'#F26B3A', height:4, bottom:2}}}
      // textColor='none'
      value={value} 
      onChange={handleChange} >
    <TabOpt label="Params"/>
    <TabOpt label="Headers"/>
    <TabOpt label="Body"/>
  </Tabs>
  <Box
      role="tabpanel"
      hidden={value !== 0}
      id={`simple-tabpanel-${0}`}
      aria-labelledby={`simple-tab-${0}`}
    >
    <CreateTable text={'Query Params'} data={paramData} setData={setParamData}/>
    </Box>
    <Box
      role="tabpanel"
      hidden={value !== 1}
      id={`simple-tabpanel-${1}`}
      aria-labelledby={`simple-tab-${1}`}
    >
        <CreateTable text={'Headers'} data={headerData} setData={setHeaderData}/>
    </Box>
    <Box
      role="tabpanel"
      hidden={value !== 2}
      id={`simple-tabpanel-${2}`}
      aria-labelledby={`simple-tab-${2}`}
    >
    <CreateJsonText/>
    </Box>
    </Box>
  )
}

export default SelectTab
