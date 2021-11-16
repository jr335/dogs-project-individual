import {react} from 'react';
import {GET_DOGS} from '.../getDogs';
import {ADD_DOGS} from '.../addDogs';
import {REMOVE_DOGS} from '.../removeDogs';    


const initialState ={state : []}
function rootreducer(state=initialState,action){
    switch(action.type){
           case 'GET_DOGS':
            return{
                ...state,
                breeds:action.payload
            }
        
            case 'ADD_DOGS':
                return{
                    ...state,
                    breeds:action.payload
                }
            
            case 'REMOVE_DOGS':
                    return{
                        ...state,
                        breeds:action.payload
                    }
          
                    default:
                    return state
                

    }
   
     //export default rootreducer;




}



export default rootreducer;
