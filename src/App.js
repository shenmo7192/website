import React,{useState} from 'react';
import { BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Window from './home/window';
import Donate from './donate/donate';
import './styles/styles.css';

import {contents ,url0, url1,title,bottom, bottom2,img }from './content/'
function App(){
  const [content,setContent] = useState({
    content : contents,
    url: url0,
    english : false,
    tit: title,
    bot: bottom,
    pic:img
  });
  function setEnglish(){
    if (content.english===false) {
      setContent({
        english : true,
        content : contents,
        url:url0,
        tit:title,
        bot:bottom,
        pic:img
      })
    }else{
      setContent({
        english : false,
        content : contents,
        url:url1,
        tit: title,
        bot:bottom2,
        pic:img
      }
      )
    }

  }

  return <Router>
    <div id="header" className="static">
                <ul>

                    <li onClick={setEnglish}><a>{content.url[4]}</a></li>
                    <li className="top-logo"><a href="/Home/">{content.url[0]}</a></li>
                    <li><a href="index.html">{content.url[1]}</a></li>
                    <li><a href="https://www.deepinos.org">{content.url[2]}</a></li>
                    <li><a href="https://www.deepinos.org">{content.url[3]}</a></li>

                </ul>
            </div>
            <div className="dropdown">
                <ul>
                <li className="top-logo"><a href="index.html">{content.url[0]}</a></li>
                <div className="dropdown2">
                    <li><a>More</a></li>
                    <div className="dropdown-content">
                        <a href="index.html">{content.url[1]}</a>
                        <a href="https://www.deepinos.org">{content.url[2]}</a>
                        <a href="https://www.deepinos.org">{content.url[3]}</a>
                        <a className="dropbtn2" onClick={setEnglish}>{content.url[4]}</a>
                    </div>
                </div>
                </ul>
            </div>

    <div>
    <Switch>

      <Route path="/Home">
          <Window pages={content}/>
      </Route>
      <Route path="/Donate">
        <Donate pages={content}/>
      </Route>
      <Redirect exact to="/Home" from='/' />
    </Switch>
    </div>
    </Router>
}
export default App;
