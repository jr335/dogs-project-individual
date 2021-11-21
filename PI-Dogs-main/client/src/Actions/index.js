import { GET_DOGS, GET_ID_DOGS, GET_TEMPERAMENT, GET_NAME_DOGS, 
    PAGE, FILTER_ZA, FILTER_AZ, ORDER_HEIGHT_MAX, ORDER_HEIGHT_MIN, 
    ORDER_WEIGHT_MAX, ORDER_WEIGHT_MIN, FILTER_TEMP } from './constantes'
import { URL_DOG, URL_TEMPERAMENT } from '../Constantes'
import axios from 'axios'


export function getDogs(){
    return async function(dispatch) {

        let algo=  await axios.get('http://localhost:3001/dogs')
        return dispatch({type: GET_DOGS, payload: algo.data})
    }
}

export  function getIdDogs(id){
    return async function(dispatch) {

        let algo=  await axios.get(`http://localhost:3001/dogs/${id}`)
        return dispatch({type: GET_ID_DOGS, payload: algo.data})
    }
}

export function getNameDogs(name){
    return async (dispatch) => {
        try{
            let algo =  await axios.get(`http://localhost:3001/dogs?name=${name}`)
            return dispatch({type: GET_NAME_DOGS, payload: algo.data})  
        }
        catch(err){
            alert(err)
        }   
    }
}

export function getTemperament(){     
    return async function(dispatch) {

        let algo=  await axios.get(URL_TEMPERAMENT)
        return dispatch({type: GET_TEMPERAMENT, payload: algo.data})
    }
}

export function sendDogs(dog){ 
    return async function() {
        try{
            //eslint-disable-next-line 
            let dog_Url =  await axios.post(URL_DOG, dog)
        }
        catch(err){
            console.error(err)
        }
    }
   
}

export function filterZA(){
    return {type:FILTER_ZA}
}
export function filterAZ(){
    return {type:FILTER_AZ}
}
export function orderHeightMax(){
    return{type:ORDER_HEIGHT_MAX}
}
export function orderHeightMim(){
    return{type:ORDER_HEIGHT_MIN}
}
export function orderWeightMax(){
    return{type:ORDER_WEIGHT_MAX}
}
export function orderWeightMim(){
    return{type:ORDER_WEIGHT_MIN}
}

export function filterTemp(payload){
    return{type: FILTER_TEMP, payload}
}

export function getpage(payload){
    return {type:PAGE, payload}
}




// //importo redux
// // import axios from 'axios';
// import axios from 'axios';
// import { FILTER_BY_RAZA, FILTER_BY_DB, GET_DOGS, FILTER_BY_TEMPERAMENT, SEARCH_BY_NAME, SORT_BY_ALPHABET, SORT_BY_WEIGTH , GETDOGS_DETAIL } from './redux/reducer/index';

// export function get_dogs() {
//     return async function (dispatch) {
//         const response = await axios.get('http://localhost:3000/dogs');
//         dispatch({ type: GET_DOGS, payload: response.data });
//     }
// }
// export function getdogsDetail(id) {
//     return async function (dispatch) {
//         const response = await axios.get(`http://localhost:3000/dogs/${id}`);
//         dispatch({ type: GETDOGS_DETAIL, payload: response.data });
//     }
// }
// export function searchByName(name) {
//     return async function (dispatch) {
//         const response = await axios.get(`http://localhost:3000/dogs?name=${name}`);
//         dispatch({ type: SEARCH_BY_NAME, payload: response.data });
//     }
// }

// export function filterByRaza(raza) {
//     return { type: FILTER_BY_RAZA, payload: raza };
// }



// export function filterByTemperament(Temperaments) {
//     return { type: FILTER_BY_TEMPERAMENT, payload: Temperaments };
// }

// export function sortByAlphabet(payload) {
//     return { type: SORT_BY_ALPHABET, payload: payload };
// }

// export function sortByweigth(payload) {
//     return { type: SORT_BY_WEIGTH, payload: payload };
// }
// export function filterDB(name) {
//     return async (dispatch) => {
        
//             let response = await axios.get(`http://localhost:3000/dogs?name=${name}`)
//             console.log(response.data)
            
//             return dispatch({ type: FILTER_BY_DB, payload: response.data });
            
// }
// }

























// export function get_dogs() {
//     return async function (dispatch) {

//           var json = await  axios.get('https://localhost:3001/dogs')
                        
//        }
//          // eslint-disable-next-line no-unreachable
//          dispatch(
//              {
//                 type: GET_DOGS,
//                 payload: json.data
//                   })
                    
//               }
    
    
// //  function get_dogs (GET_DOGS, payload) { //creo una funcion que recibe un payload
// //     return {  
// //     type: GET_DOGS,
// //         payload
// //     }



//   function add_dogs(payload) { //Lo que hace es generar un objeto con un type y un payload. 
//     //Este objeto generado el dispatcher se lo pasa al reducer y el se encarga de hacer el cambio en el state..
//     return {
//         type: ADD_DOGS,
//         payload
//     }
//   }


//  function remove_dogs(payload) {
//     return {
//         type: REMOVE_DOGS,
//         payload
//     }
//  } 



 //export default names;

