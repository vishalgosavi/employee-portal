import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducer';
import {createStore, applyMiddleware} from 'redux';
import { loadEmployees } from './actions/action-creators';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

// console.log(store.getState());
// let sampledata = [
//   {LocationId:'L3', Name:'ABC', Age:35, Department:'Dept1', Designation:'Des1', Location:'MUM', EmpCode:'E1'},
//   {LocationId:'L4', Name:'BCD', Age:45, Department:'Dept2', Designation:'Des2', Location:'DEL', EmpCode:'E2'}
// ]
// store.dispatch(loadEmployees(sampledata));

// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
