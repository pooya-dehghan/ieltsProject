import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { compose,applyMiddleware,createStore,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import percentageReducer from './component/store/reducers/percentageReducer'
import viewresultReducer from './component/store/reducers/viewresultReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  percentage:percentageReducer,
  viewresult:viewresultReducer,
  
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
