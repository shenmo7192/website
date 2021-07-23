import React, {useEffect} from 'react';
import '../../css/timeline.scss';
import {v1 as uuid} from 'uuid';
//import '../pages/animate.css'
function Time({pages}){
  useEffect(()=>{
    document.title=pages.html_title[2];
    //console.log(pages.content[1][1]);
    //console.log("sss");
  },[pages]);
  return <section className="timeline">
    <h1> {pages.html_title[2]}</h1>
    <ul>
    {
      pages.content.map(
        (item,_) => 
        {
          var strs = new Array();
          strs = item[1].split("\n");
          return <li key={uuid()}>
            <div className="content">
            <h2>
              <time>{item[0]}</time>
            </h2>
            {strs.map(
                (item,_) =>{
                  return <p key={uuid()}>
                  <time key={uuid()}>{item}</time>
                </p>
                }
              )
            }
            {/*<p> {item[1]}</p>*/}
          </div>
          </li>
        }
      )
    }
    </ul>
    </section>
}
export default Time;
