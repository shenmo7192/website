import React from 'react';
import { BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Window from './home/window';
import Donate from './donate/donate';

function App(){
  return <Router>
    <div>
    <Switch>

      <Route path="/Home">
          <Window/>
      </Route>
      <Route path="/Donate">
        <Donate/>
      </Route>
      <Redirect exact to="/Home" from='/' />
    </Switch>
    </div>
    </Router>
}
export default App;
