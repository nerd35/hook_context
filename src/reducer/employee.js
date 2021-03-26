
export default (employees = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE_EMPLOYEE':
            return [ ...employees, action.payload];
        case 'UPDATE_EMPLOYEE':
            return employees.map((employee) => employee._id === action.payload._id ? action.payload : employee);
        default:
            return employees;
    }
}