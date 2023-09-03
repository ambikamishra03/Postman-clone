import { styled, Typography,Table , TableHead, TableCell, TableRow, TableBody} from '@mui/material'
import { useState } from 'react'
import AddRow from './AddRow'


const Tablecell = styled(TableCell)({
    border:'1px solid rgba( 224, 224, 224, 1)',
    borderCollapse:'collapse',
    padding:['4px 5px', '!important']
  });

const CreateTable = ({text, data, setData}) => {
  const [rows, addRows] = useState([0]);
  return (
    <>
    <Typography mt={2} mb={2}>{text}</Typography>
    <Table sx={{ minWidth: '100%', border:'1px solid rgba( 224, 224, 224, 1)' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <Tablecell></Tablecell>
            <Tablecell >KEY</Tablecell>
            <Tablecell >VALUE</Tablecell>
          </TableRow>
        </TableHead>
        <TableBody>
           {
            rows.map((row, index) =>(
              <AddRow  addRows={addRows} rowId={index} key={index} data={data} setData={setData}/>
            ))
           } 
        </TableBody>
      </Table>
    </>
  )
}

export default CreateTable
