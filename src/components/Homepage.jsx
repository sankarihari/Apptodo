import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const Homepage = () => {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontFamily:'cursive', color:"red"}}>TODO list</TableCell>
                        <TableCell style={{fontFamily:'cursive', color:"red"}}>Actions</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                        <TableRow>
                            <TableCell>
                                
                            </TableCell>
                            <TableCell>
                            <AddIcon/>
                            <DeleteIcon/>

                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>

                    
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Homepage