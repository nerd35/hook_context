import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import TableCell from '@material-ui/core/TableCell';

const Employee = ({employee}) => {

   
  return (
    <>
      <TableCell component="th" scope="row">
                {employee.reportName}
              </TableCell>
              <TableCell align="left"><img src={employee.selectedFile} alt="logo" style={{width: '48px', height: '48px'}}/></TableCell>
  <TableCell align="left">{employee.categoryType}</TableCell>
              <TableCell align="left">{employee.schedule}</TableCell>
              <TableCell align="left">{employee.receipient}</TableCell>
              <TableCell align="left">{employee.statusType}</TableCell>
              <TableCell align="right"><EditIcon style={{color: 'tomato', marginRight: '20px'}}/> <DeleteIcon style={{color: 'red'}}/> </TableCell>
    </>
  );
}

export default Employee;
