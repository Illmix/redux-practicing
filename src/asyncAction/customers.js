import {addManyCustomersAction} from "../store/customerReducer";

export const fetchCustomer = (link) => {
    return dispatch => {
        fetch(link)
            .then(response => response.json())
            .then(json => dispatch(addManyCustomersAction(json)))
    }
}