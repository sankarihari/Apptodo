import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { VisibilitySharp } from '@mui/icons-material';

const Homepage = () => {
    const [input, setInput] = useState([]);
  

  
    useEffect(() => {
      fetchDataFromDatabase();
    }, []);
  
    const fetchDataFromDatabase = () => {
      axios
        .get(`http://localhost:5000/api/viewdata`)
  
        .then((response) => {
          setInput(response.data.data);
          setFilteredData(response.data.data);
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
                           
                            <DeleteIcon/>
                            <VisibilitySharp/>

                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <AddIcon/>

                    
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Homepage