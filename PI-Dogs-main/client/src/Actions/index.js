//importo redux

import names from '..Actions/index';
import GET_DOGS  from '..Actions/index' //importa algun NOMBRE de type
import REMOVE_DOGS  from '..Actions/index' //importa algun
import  ADD_DOGS from '.Actions/index' //
 //


//  function get_dogs (GET_DOGS, payload) { //creo una funcion que recibe un payload
//     return {  
//     type: GET_DOGS,
//         payload
//     }



  function add_dogs(payload) { //Lo que hace es generar un objeto con un type y un payload. 
    //Este objeto generado el dispatcher se lo pasa al reducer y el se encarga de hacer el cambio en el state..
    return {
        type: ADD_DOGS,
        payload
    }
}


 function remove_Dogs(payload) {
    return {
        type: REMOVE_DOGS,
        payload
    }
}



export default names;

