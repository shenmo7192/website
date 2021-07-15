import React from 'react';
import './blocks.css';

function Block(props){
  return <div className="into  wow fadeInDown" data-wow-duration="2s" data-wow-delay="0s" >
               <div id="menu" className="left" style={{
                   backgroundColor: '#FFFFFF',
                   wordWrap:'break-word', 
                   wordBreak:'break-all',
               }}>
                         <div id="header" style={{
                             backgroundColor:"#FFFFFF",
                              marginLeft:'2%',
                              marginRight:'2%'
                         }}>
    {/*<h1 st  ={{marginBottom:'0'}}>主要的网页标题</h1>8*/}
                             {props.title}
                         </div>
                          <div style={{
                            marginLeft:'2%',
                            marginRight:'2%'
                          }} >
                         {props.left1}
                          </div>
               </div>
               <div id="content" className="right" style={{
                   backgroundColor:"#FFFFFF",
               }}>
                 {props.img}
              </div>
          </div>
}

export default Block;
