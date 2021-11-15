import React from 'react';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { dispatch } from 'react-redux';

export default function Home() {

    const dispatch = useDispatch();
    const alldogs = useSelector(state => state.alldogs);
    
    useEffect(() => {
        dispatch(get_dogs());
    },
     []);

 function handleClick(e) {
    e.preventDefault();
    dispatch(get_dogs());
 };

 return (
     <>
     <div>
         <link to='/dogs'>Crear raza</link>

         <h1>Bienvenidos a la pagina de razas- ingrese el nombre de la raza</h1>

         <button onClick={e => { handleClick(e); } }>todas las razas</button>
     </div>
     
     <select>
        <option value='asc'>A-Z</option>
         <option value='desc'>Z-A</option>
     </select>
     </>
 )

}



