
import {Checkbox, TableCell, TableRow, TextField, styled} from '@mui/material'
import { useState } from 'react'


const Tablecell = styled(TableCell)({
    border:'1px solid rgba( 224, 224, 224, 1)',
    borderCollapse:'collapse',
    padding:['4px 5px', '!important']
  });
const AddRow = ({addRows,rowId, data, setData}) => {

  const [boxCheck, setBoxCheck] =useState(false);


  const handleChange = (e)=>{
    let result = data.filter(entry => entry.id === Number(e.target.name))[0];

    if(!boxCheck){
      setBoxCheck(true);
    addRows(oldArr => [...oldArr, rowId])
    result ={...result, id:rowId, check:true};
    }else{
      setBoxCheck(false);
      result ={...result, id:rowId, check:false};
    }

    let index  =data.findIndex(value => value.id === Number(e.target.name));

    if(index === -1){
    setData(oldArr => [...oldArr, result]);
    }else{
    const newArr = Object.assign([...data],{
      [index]: result
    })
    setData(newArr);
    }

  }

  const onTextChange = (e) => {
    let result = data.filter(entry => entry.id === rowId)[0];
    result = {...result, id:rowId, [e.target.name]: e.target.value};

    let index  =data.findIndex(value => value.id === rowId);

    if(index === -1){
    setData(oldArr => [...oldArr, result]);
    }else{
    const newArr = Object.assign([...data],{
      [index]: result
    })
    setData(newArr);
    }
    console.log(data);
  }
  return (

    <TableRow>     
      <Tablecell>
      <Checkbox size='large' style={{padding:['2px 5px', '!important']}}
      checked={boxCheck} onChange={(e) => handleChange(e)} name={rowId.toString()}/>
      </Tablecell>
      <Tablecell>
        <TextField style={{width:'100%'}}
          inputProps={{ style: {height:30, padding: '0px 5px'}}}
          onChange={(e)=>onTextChange(e)} name='key'
        />
      </Tablecell>
      <Tablecell>
      <TextField 
         style={{width:'100%'}}
          inputProps={{ style: {height:30, padding: '0px 5px'}}}
          onChange={(e)=>onTextChange(e)} name='value'
      />
      </Tablecell>
    </TableRow>
  )
}

export default AddRow
