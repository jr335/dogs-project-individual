import './App.css';
import React from 'react';
import LandingPage from '../src/components/LandingPage/LandingPage.jsx';
import { Route, Routes } from 'react-router-dom'
import Home from '../src/components/Home/Home.jsx'
import Details from '../src/components/Details/Details.jsx'
import ListFilter from '../src/components/ListFilter/ListFilter.jsx'
import Send from '../src/components/Send/send.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path= "/" component={LandingPage}></Route>
      <Route exact path= "/Home" component={Home}></Route>
      <Route path= "/Details/:id" component={Details}></Route>
      <Route path= "/Home/Search" component={ListFilter}></Route>
      <Route path= "/Create" component={Send}></Route>
       </Routes>
    </div>
  )
}

export default App;






