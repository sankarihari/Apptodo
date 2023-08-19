import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { VisibilitySharp } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Homepage = () => {
    const [router, setrouter] = useState([]);

    useEffect(() => {
        fetchDataFromDatabase();
      }, []);
    
      const fetchDataFromDatabase = () => {
        axios
         
          .get(`http://localhost:5000/api/getdata`)
    
          .then((response) => {
            setrouter(response.data.data);
           
          })
          .catch((error) => {
            console.error(error);
          });
      };
    

  
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
                           
                            <DeleteIcon />
                            <VisibilitySharp/>

                            </TableCell>
                            <TableCell>
                                
                            </TableCell>
                        </TableRow>
                        <AddIcon/>

                    
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Homepage