
import {  createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from '../reducer'


 const Store = createStore(reducers, compose(applyMiddleware(thunk)))




 export default Store;



