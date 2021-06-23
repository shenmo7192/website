import React from 'react';

import { BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Doc from './doc';
import { menu } from './menu'; 

function Mydoc(){
  return <Router>
    <Switch>
      <Route path="/Doc/SUMMARY">
        <Doc file={require("./md/SUMMARY.md")}/>
      </Route>

    {
      menu.map((item,idx)=>{
        const route="/Doc/"+item[0];
        const name = item[1];
        return <Route key={idx} path={route}>
        <Doc file={require(`${name}`)}/>
      </Route>
      })
    }



      <Redirect exact to="/Doc/SUMMARY" from='*' />
    </Switch>
  </Router>
}
export default Mydoc;
