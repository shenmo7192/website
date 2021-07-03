import React from 'react';
import Block from './blocks';
import './animate.css'
import './blocksdonate.css'
export default function BlockDonate({title,left1,img}){
  return <>
      <div className="top">{img}</div>
      <Block
        title={title}
        left1={left1}
        img={img}/>
    </>
}
