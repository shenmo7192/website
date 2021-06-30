import React, {useEffect} from 'react';
import Core from '../chat/core'
import Block from '../pages/blocks'
import Blocktop from '../pages/blockstop'
function Window({pages}) {

  useEffect(()=>{
    document.title=pages.html_title[0]
  },[pages]);
  //add props to useEffect,when the page is used, it will do this
  return <>
            <Block title ={pages.tit[0]}
                      left1 = {pages.tit[1]}
                      img = {pages.tit[2]}/>
            {
                  pages.content.map(
                    (item,idx) => <Blocktop key={idx}
                      title={item[0]}
                      left1={item[1]}
                      img={item[2]}/>)
            }
            {
                  pages.bot.map(
                    (item,idx) => <Block key={idx}
                      title={item[0]}
                      left1={item[1]}
                      img={item[2]}/>)
            }

  <Core/>
        </>
}

export default Window;
