import React from 'react';
import Window from '../components/home/window';
import '../css/styles.css'
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {contents ,title,bottom,img,html_title}from '../components/content/';
//import wow from 'wowjs';
function Home(){
  //new wow.WOW().init();
  const {siteConfig} = useDocusaurusContext();
  const content={
    content : contents,
    english : false,
    tit: title,
    bot: bottom,
    pic:img,
    html_title:html_title
  };
  //function setEnglish(){
  //  if (content.english===false) {
  //    setContent({
  //      english : true,
  //      content : contents,
  //      url:url0,
  //      tit:title,
  //      bot:bottom,
  //      pic:img,
  //      html_title:html_title2
  //    })
  //  }else{
  //    setContent({
  //      english : false,
  //      content : contents,
  //      url:url1,
  //      tit: title,
  //      bot:bottom2,
  //      pic:img,
  //      html_title:html_title
  //    }
  //    )
  //  }

  //}
  //useEffect(()=>{       
  //  var language = (navigator.browserLanguage || navigator.language).toLowerCase();
  // if(language.indexOf('zh')>-1){
  //     setContent({
  //      english : false,
  //      content : contents,
  //      tit: title,
  //      bot:bottom,
  //      pic:img,
  //      html_title:html_title
  //    });
  // }else{
  //    setContent({
  //      english : true,
  //      content : contents,
  //      tit:title,
  //      bot:bottom2,
  //      pic:img,
  //      html_title:html_title2
  //    })
  //  }
  //},[setContent])
  return     <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
          <Window pages={content}/>
    </Layout>
}
export default Home;
