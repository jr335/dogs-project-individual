import React from 'react';
import {Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Provider } from "react-redux";
import {store} from "../redux/store/index";
import {render} from "react-dom";
 //import {dashboard} from "../src/components/dashboard";
 //import {dogsPage} from "../src/components/dogsPage";
 import Home from './components/Home';
//import Navbar from "./components/Navbar";
//import "bootswatch/dist/lux/bootstrap.min.css";

 

  const Element = document.getElementById("root");
  
  render(
   
     
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={Home} />
           {/* <Route path="/dashboard" element={dashboard} /> */}
           {/* <Route path="/dogsPage/:dogName" element={dogsPage} /> */}
           </Routes>
       </Provider>,   
         
    );
   
 

 