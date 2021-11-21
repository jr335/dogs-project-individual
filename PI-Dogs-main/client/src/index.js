import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import  store  from './Store/Store';

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>   
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);



// import './App.css';
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { get_dogs } from './Actions/index';
// import './App.css';
// //import Crear from './components/crear/crear'
// import LandingPage from '../src/components/LandingPage';
// import Home from './components/Home';
// import { Route, Routes } from 'react-router-dom';
// import  Provider  from 'react';

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(get_dogs());
//   }, [dispatch])
//   return (
//     <>
//     <Provider>
//      <Routes>
//     <Route  path='/' exact element={LandingPage} />
//     {/* <Route exact path='/create' Element={crear} /> */}
//     <Route path='/dogs' exact element={Home} />
//     {/* <Route exact path='/dogs/:id' element={detalles} /> */}
//     </Routes>
//     </Provider>
//   </>
//   );
// }

// export default App;












// import React from 'react'
// import ReactDom from 'react-dom'
// import './index.css'
// import App from './App';
// import {Provider} from 'react-redux';
// import store from './redux/store/index';
// //import {BrowserRouter} from 'react-router-dom';
// //import {ReactStrictMode} from 'react-redux';

// ReactDom.render(
//  <Provider store={store}>
//     <React.StrictMode>
//        <App />,
//     </React.StrictMode>,
//   </Provider>,
//   document.getElementById('root')
// );

//const axios = require('axios')

  // extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     imgURL: "",
  //     breed: [""],
  //     select: ""
  //   }
  // }

  // getDogPicture = () => {
   
  //   // const { select } = this.state;
  //     axios.get('https://api.thedogapi.com/v1/breeds?api_key=3bc7d5d3-2fb4-46d0-9ebe-a7a1117fbc08')
  //     .then(response => {
       
  //        this.setState({
  //         imgURL: response.data.message
  //       })
  //      // console.log(response.data.message)
  //     })
  //     .catch(e => {
  //       console.log("error fetching image")
  //     })
  // }

  // getBreed = () => {
  //   //const {breed} = this.state
  //   axios
  //     .get("'/dogs")
  //     .then(response => {
  //       this.setState({
  //         // breed: breed.concat(response.data.message)
  //       })
  //     })
  //     .catch(e => {
  //       console.log("error fetching list")
  //     })
  // }
  //   //esta parte es para que en la pagina se vea la imagen de un perro random
   
  //   componentDidMount(), () => {
  //  this.getBreed()
  //  getRandomPicture()
  // },

  // render(), => {
  //   const { imgURL} = this.state
  //   return(
  //     <div className="main">
        
  //       <h1>Bienvenidos a la web de Las distintas Razas de perros</h1>
  //       <div class="content">
  //         <div>
  //           <h3>para ingresar haga Click en el botón</h3>
  //            <button  onclick src="http://localhost:3001/home">INICIO</button>
             
  //           {/* onClick={this.getDogPicture} */}
  //           </div>
  //           <div>
              
  //               <img src={imgURL} alt=""/>
  //           </div>
  //         </div>
  //       </div>
  //     )
  //   },
       
      
    
  
   
            
         
      
