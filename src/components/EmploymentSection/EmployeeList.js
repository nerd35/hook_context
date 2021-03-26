import  { useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Employee from './Employee';
import {EmployeeContext } from '../../context/EmployeeContext';




const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    width: '80%',
    margin: 'auto',
    marginTop: '40px'
  },
});


export default function EmployeeList() {

  const {employees} = useContext(EmployeeContext);
  
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Report Name</TableCell>
            <TableCell align="left">Logo</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Schedule</TableCell>
            <TableCell align="left">Receipient</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              employees.map(employee => (
                <TableRow key={employee.id}>

                  <Employee employee={employee}/>
                </TableRow>
              ))
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
