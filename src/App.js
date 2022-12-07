import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomer} from "./asyncAction/customers";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }
     const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
     }
    const addCustomer = (name) => {
        const customer = {
            id: Date.now(),
            name
        }
        dispatch(addCustomerAction(customer));
    }
    const removeCustomer = (name) => {
        dispatch(removeCustomerAction(name));
    }
    return (
    <div className="App">
        <h1>{cash}</h1>
        <div>
            <button onClick={() => addCash(Number(prompt()))}>
                Add cash
            </button>
            <button onClick={() => getCash(Number(prompt()))}>
                Get cash
            </button>
            <button onClick={() => addCustomer((prompt("Client name: ")))}>
                Add customer
            </button>
            <button onClick={() => removeCustomer(prompt("Client name: "))}>
                Delete customer
            </button>
            <button onClick={() => dispatch(fetchCustomer('https://jsonplaceholder.typicode.com/users'))}>
                Add many customers
            </button>
        </div>
        <div>
            {customers.length > 0
                ? <div>{customers.map(customer =>
                    <div key={customer.id} onClick={()=>removeCustomer(customer.name)}>{customer.name}</div>
                )}</div>
                : <h3>No clients</h3>
            }
        </div>
    </div>
    );
}

export default App;
