import React from 'react';
import Block from '../pages/blocks'
import Blocktop from '../pages/blockstop'
function Donate(props) {
  return <div>
            <Block title ={props.pages.tit[0]}
                      left1 = {props.pages.tit[1]}
                      img = {props.pages.tit[2]}/>
            {
                  props.pages.content.map(
                    (item,idx) => <Blocktop key={idx}
                      title={item[0]}
                      left1={item[1]}
                      img={item[2]}/>)
            }
            {
                  props.pages.bot.map(
                    (item,idx) => <Block key={idx}
                      title={item[0]}
                      left1={item[1]}
                      img={item[2]}/>)
            }

        </div>
}

export default Donate;
