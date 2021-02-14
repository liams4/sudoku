import './App.css';
import {Home} from './components/Home.js';
import {Leaderboards} from './components/Leaderboards.js';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
          <div className='tabs'>
              <Link to='/' className='tab'>Home</Link>
              <Link to='/leaderboards' className='tab'>Leaderboards</Link>
          </div>
          
        <Switch>
        <Route exact path='/'>
            <Home />
          </Route>
        <Route exact path='/leaderboards'>
            <Leaderboards />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
