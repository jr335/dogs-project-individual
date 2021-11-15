import {React} from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
 import {dogsPage} from "../src/components/dogsPage";
 import {Home} from './home';
import {ReactDOM} from "react-dom";
import {NavBar} from "./components/navbar";

//import "bootswatch/dist/lux/bootstrap.min.css";
import "./index.css";


 export default function App () {
   return(
        <div clasName="container">          
         <h1>TITULO</h1>
         <NavBar/>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Routes>
           <Route exact path="/" element={Home} />
           <Route path="/dogsPage/:dogName" element={dogsPage} />
          </Routes>
          </nav>
          </div>
     );
  } 
 

 ReactDOM.render(<App />, document.getElementById("root"));
