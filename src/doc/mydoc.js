import React, {useEffect} from 'react';

import { BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Doc from './doc';
import { menu } from './menu'; 
import './doc.css';
function Mydoc({pages}){
  useEffect(()=>{
    document.title=pages.html_title[2]
  } ,[pages]);
     //function closeNav() {
	  //  document.getElementById("mySidenav").style.width = "0";
	  //  document.getElementById("main").style.marginLeft= "0";
    //}
  return <Router>
    <aside>
        <ul>
        {
          menu.map((item,idx)=>{
            const route="/Doc/"+item[0];
            const name = item[0];
            return <li key={idx} ><a href={route}>{name}</a></li>
          })
        }
        </ul>
    </aside>
    <Switch>
      <Route path="/Doc/SUMMARY">
      <div style={{float:'left',width:'50%'}}>
        <Doc file={require("./md/SUMMARY.md")}/>
      </div>
      </Route>

    {
      menu.map((item,idx)=>{
        const route="/Doc/"+item[0];
        const name = item[1];
        return <Route key={idx} path={route}>

      <div className="markdown">
        <Doc file={require(`${name}`)}/>
          </div>
      </Route>
      })
    }



      <Redirect exact to="/Doc/SUMMARY" from='*' />
    </Switch>
  </Router>
}
export default Mydoc;
