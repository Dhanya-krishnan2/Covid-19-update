import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch
} from 'react-router-dom';
import Header from './Components/Header';
import Australia from './Components/Australia';
import World from './Components/World';


function App() {
  return (
    <div className="container-fluid">
      <Router>
      < Header />
        <Switch>
          <Router exact path='/'>
            < Australia />
          </Router>
          <Router  path='/australia'>
            < Australia />
          </Router>
          <Router path='World'>
            < World />
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
