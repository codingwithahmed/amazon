import  React , {createContext , useContext , useReducer } from 'react'
import {initialstate} from './reducer'
export const Statecontext = createContext();

export const StateProvider = ({ reducer, initailstate ,children}) =>(
    <Statecontext.Provider value={useReducer(reducer, initialstate)}>
        {children}
    </Statecontext.Provider>
);

export const useStatevalue = () => useContext(Statecontext);
