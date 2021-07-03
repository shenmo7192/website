import React, {useEffect} from 'react';
import '../../css/timeline.scss';
import '../pages/animate.css'
function Time({pages}){
  useEffect(()=>{
    document.title=pages.html_title[2][0].props.children;
  },[pages]);
  return <section className="timeline into wow fadeInDown" data-wow-duration="2s" data-wow-delay="0s">
    <h1> {pages.html_title[2][0].props.children}</h1>
    <ul>
    {
      pages.content.map(
        (item,idx) => <li key={idx}>
            <div className="content">
            <h2>
              <time>{item[0]}</time>
            </h2>
            <p> {item[1]}</p>
          </div>
            </li>
      )
    }
    </ul>
    </section>
}
export default Time;
