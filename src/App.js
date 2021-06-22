import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Window from './home/window';
import Donate from './donate/donate';
import Doc from './doc/doc';
import './styles/styles.css';
import {contents ,url0, url1,title,bottom, bottom2,img,html_title,html_title2 }from './content/';
function App(){
  const [content,setContent] = useState({
    content : contents,
    url: url0,
    english : false,
    tit: title,
    bot: bottom,
    pic:img,
    html_title:html_title
  });
  function setEnglish(){
    if (content.english===false) {
      setContent({
        english : true,
        content : contents,
        url:url0,
        tit:title,
        bot:bottom,
        pic:img,
        html_title:html_title2
      })
    }else{
      setContent({
        english : false,
        content : contents,
        url:url1,
        tit: title,
        bot:bottom2,
        pic:img,
        html_title:html_title
      }
      )
    }

  }
  useEffect(()=>{       
    var language = (navigator.browserLanguage || navigator.language).toLowerCase();
   if(language.indexOf('zh')>-1){
       setContent({
        english : false,
        content : contents,
        url:url1,
        tit: title,
        bot:bottom,
        pic:img,
        html_title:html_title
      });
   }else{
      setContent({
        english : true,
        content : contents,
        url:url0,
        tit:title,
        bot:bottom2,
        pic:img,
        html_title:html_title2
      })
    }
  },[setContent])
  return <Router>
    <div id="header" className="static">
                <ul className="ul_top">
                    <li className="lead" onClick={setEnglish}><a>{content.url[5]}</a></li>
                    <li className="lead"><a href="/Donate/">{content.url[4]}</a></li>
                    <li className="lead"><a href="https://www.deepinos.org">{content.url[2]}</a></li>
                    <li className="lead"><a href="https://www.deepinos.org">{content.url[3]}</a></li>
                    <li className="top-logo lead"><a href="/Home/">{content.url[0]}</a></li>
                    <li className="lead"><a href="index.html">{content.url[1]}</a></li>
                </ul>
            </div>
            <div className="dropdown">
                <ul className="ul_top">
                <li className="top-logo lead"><a href="index.html">{content.url[0]}</a></li>
                <div className="dropdown2">
                    <li className="lead"><a>{content.url[6]}</a></li>
                    <div className="dropdown-content">
                        <a href="index.html">{content.url[1]}</a>
                        <a href="https://www.deepinos.org">{content.url[2]}</a>
                        <a href="https://www.deepinos.org">{content.url[3]}</a>
                        <a href="/Donate/">{content.url[4]}</a>
                        <a className="dropbtn2" onClick={setEnglish}>{content.url[5]}</a>
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
    <Route path="/Doc">
        <Doc/>
      </Route>
      <Redirect exact to="/Home" from='*' />
    </Switch>
    </div>
    </Router>
}
export default App;
