import * as api from '../api';


// Action creators
export const getEmployees = () => async (dispatch) => {
    try {
        const {data } = await api.fetchEmployees();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (employee) => async (dispatch) => {
    try {
        const { data } = await api.createEmployee(employee)
        dispatch({type: 'CREATE_EMPLOYEE', payload: data});
        console.log('>>>>>>', data)
    } catch (error) {
        console.log(error.message);
    }
}

export const updateEmployee = (id, employee) => async (dispatch) => {
    try {
       const {data} = await api.updateEmployee(id, employee)

       dispatch({type: 'UPDATE_EMPLOYEE', payload: data })
    } catch (error) {
        console.log(  error.message);
    }
}