import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {About} from "./components/About"
import {Services} from "./components/Services"
import {Navbar} from "./components/Navbar"
import {Register} from './components/Register'
import {Footer} from "./components/Footer"



function App() {
  return (
   <Router>
     <Navbar islogged={true}/>
     
       <Switch>
         <Route path="/about" component={About}/>
         <Route path="/register" component={Register}/>
         <Route path="/" component={Services}/>
       </Switch>
       <Footer/>
   </Router>
  );
}

export default App;
