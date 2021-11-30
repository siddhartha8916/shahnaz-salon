import './App.css';
import AppNavbar from './components/Layout/AppNavbar';
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Appointment from './components/pages/Appointment'
import Error404 from './components/pages/Error404'


function App() {
  return (
    <div className="App">
       <Router>
       <AppNavbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/appointment" component={Appointment}/>
            <Route component={Error404}/>
            
          </Switch>
      </Router>
    </div>
  );
}

export default App;
