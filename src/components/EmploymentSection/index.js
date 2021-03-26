import React from 'react';
import EmployeeList  from './EmployeeList';

import EmployeeContextProvider from '../../context/EmployeeContext'
import AddForm from './AddForm';



const EmployeeContainer = () => {
    return (
      
      <EmployeeContextProvider>
          <EmployeeList/> 
      </EmployeeContextProvider>
    
    );
}

export default EmployeeContainer;
