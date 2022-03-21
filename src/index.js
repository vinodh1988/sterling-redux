import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { applyMiddleware, createStore } from 'redux';
import { appstate } from './Redux/store/store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './Redux/Saga/root';
//const store = createStore(appstate,applyMiddleware(thunk))

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appstate,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
     <App/>
  </Provider>,
   
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
