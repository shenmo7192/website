import React,{useEffect, useState} from 'react';
import Donate from '../components/donate/donate';
import '../css/styles.css'
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {contents ,url0, url1,title,bottom3,img,html_title,html_title2 }from '../components/content/';
import wow from 'wowjs';
function donate(){
  new wow.WOW({live:false}).init();
  const {siteConfig} = useDocusaurusContext();
  const [content,setContent] = useState({
    content : contents,
    url: url0,
    english : false,
    tit: title,
    bot: bottom3,
    pic:img,
    html_title:html_title
  });
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
  useEffect(()=>{       
    var language = (navigator.browserLanguage || navigator.language).toLowerCase();
   if(language.indexOf('zh')>-1){
       setContent({
        english : false,
        content : contents,
        url:url1,
        tit: title,
        bot:bottom3,
        pic:img,
        html_title:html_title
      });
   }else{
      setContent({
        english : true,
        content : contents,
        url:url0,
        tit:title,
        bot:bottom3,
        pic:img,
        html_title:html_title2
      })
    }
  },[setContent])
  return     <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
          <Donate pages={content}/>
    </Layout>
}
export default donate;
