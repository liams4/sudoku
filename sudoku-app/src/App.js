import './App.css';
import {Home, About} from './Components.js';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
          <div className='tabs'>
              <Link to='/' className='tab'>Home</Link>
              <Link to='/about' className='tab'>About</Link>
          </div>
        <Switch>
        <Route exact path='/'>
            <Home />
          </Route>
        <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
