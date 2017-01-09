import { createStore } from 'redux'
import todoApp from './reducers'

//You may optionally specify the initial state as the second argument to createStore()
// let store = createStore(todoApp, window.STATE_FROM_SERVER)
let store = createStore(todoApp)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from './components/app';
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
