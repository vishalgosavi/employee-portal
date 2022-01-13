import * as ActionTypes from '../actions/actions-types';

const initialState = {
    employees: [],
    employee: undefined
}
function employeeReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.GET_EMPLOYEE:
            return { ...state, employee: payload }
        case ActionTypes.GET_EMPLOYEES:
            return { ...state, employees: payload }
        case ActionTypes.ADD_EMPLOYEE:
            return { ...state, employees: [...state.employees, payload] };
        case ActionTypes.DELETE_EMPLOYEE:
            console.log(payload);
            let dItem = state.employees.find(item => item.LocationID === payload.locationId && item.EmpCode === payload.empCode);
            console.log(dItem);
            return { ...state, employees: state.employees.filter((item) => dItem != item) };
        default:
            return state;
    }
}

export default employeeReducer;