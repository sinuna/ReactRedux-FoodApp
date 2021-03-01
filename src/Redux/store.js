import {createStore,combineReducers,applyMiddleware} from 'redux';
import foodReducer from '../Reducers/reducer';
import reduxLogger from 'redux-logger';

  const combinedReducer = combineReducers({foodReducer})

   const store =  createStore(combinedReducer,applyMiddleware(reduxLogger))

  export default store;