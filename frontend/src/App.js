import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {About} from "./components/About"
import {Services} from "./components/Services"
import {Navbar} from "./components/Navbar"
import {Register} from './components/Register'

function App() {
  return (
   <Router>
     <Navbar islogged={false}/>
     <div class='container p-2'>
       <Switch>
         <Route path="/about" component={About}/>
         <Route path="/register" component={Register}/>
         <Route path="/" component={Services}/>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
