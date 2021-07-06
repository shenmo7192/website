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

  return  <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
          <Window pages={content}/>
    </Layout>
}
export default Home;
