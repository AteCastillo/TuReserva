import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {About} from "./components/About"
import {Navbar} from "./components/Navbar"
import {Services} from "./components/Main/Services"
import {Register} from './components/Register'
import {Footer} from "./components/Footer"
import {Login} from './components/Login/Login'
import {Categories} from './components/Categories/Categories'
import {SignupPartner} from './components/SignupPartner'
import {SignupUser} from './components/SignupUser'
import {PartnerMain} from "./components/Partners/PartnerMain"
import {ServiceForm} from './components/ServicesForm/ServiceForm'
import Main from "./components/Partners/Test"
import {OrderMain} from './components/Order/OrderMain'


function App() {
  const [isLogged, setIsLogged] = useState(false)
  const login  = (user) => {
    setIsLogged(true)
  }
  const logout = () => 
  {
    localStorage.removeItem("tureserva_token")
    localStorage.removeItem("tureserva_user")
    setIsLogged(false)
  }
  return (
   <Router>
     <Navbar isLogged={isLogged} logout={logout}/>
       <Switch>
         <Route path="/about" component={About}/>
         <Route path="/register" component={Register}/>
         <Route path='/signuppartner' component={SignupPartner}/>
         <Route path='/signupuser' component={SignupUser}/>
         <Route path='/login' component={() => <Login login={login} />}/>
         <Route path="/categories" component={Categories}/>
         <Route path="/partner" component={PartnerMain}/>
         <Route path='/service' component={ServiceForm}/>
         <Route path="/test" component={Main}/>
         <Route path="/order" component={OrderMain}/>
         <Route path="/" component={Services}/>
       </Switch>
       <Footer/> 
   </Router>
  );
}

export default App;
