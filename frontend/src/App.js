import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {About} from "./components/About"
import {Services} from "./components/Services"
import {Navbar} from "./components/Navbar"
import {Register} from './components/Register'
import {Footer} from "./components/Footer"
import {Categories} from './components/Categories'
import {SignupPartner} from './components/SignupPartner'
import {SignupUser} from './components/SignupUser'

function App() {
  return (
   <Router>
     <Navbar islogged={true}/>

       <Switch>
         <Route path="/about" component={About}/>
         <Route path="/register" component={Register}/>
         <Route path='/signuppartner' component={SignupPartner}/>
         <Route path='/signupuser' component={SignupUser}/>
         <Route path="/categories" component={Categories}/>
         <Route path="/" component={Services}/>
         
       </Switch>
       <Footer/>
   </Router>
  );
}

export default App;
