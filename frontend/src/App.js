import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {About} from "./components/About"
import {Services} from "./components/Main/Services"
import {Navbar} from "./components/Navbar"
import {Register} from './components/Register'
import {Footer} from "./components/Footer"
import {Login} from './components/Login/Login'
import {Categories} from './components/Categories/Categories'
import {SignupPartner} from './components/SignupPartner'
import {SignupUser} from './components/SignupUser'
import Main from "./components/Partners/Test"

function App() {
  return (
   <Router>
     <Navbar islogged={false}/>

       <Switch>
         <Route path="/about" component={About}/>
         <Route path="/register" component={Register}/>
         <Route path='/signuppartner' component={SignupPartner}/>
         <Route path='/signupuser' component={SignupUser}/>
         <Route path='/login' component={Login}/>
         <Route path="/categories" component={Categories}/>
         <Route path="/test" component={Main}/>
         <Route path="/" component={Services}/>
         
         
       </Switch>
       <Footer/> 
   </Router>
  );
}

export default App;
