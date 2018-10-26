import { createStore} from 'redux';
import {Reducer, initialState} from './reducer';

export const Configuration = () =>{
    const store = createStore(
        Reducer,
        initialState,
    );

    return store;
}