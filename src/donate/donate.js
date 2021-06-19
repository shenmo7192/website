import React from 'react';
import Block from '../pages/blocks';
import Blocktop from '../pages/blockstop';
import Carousel from '../pages/Carousel';
function Donate(props) {
  return <div>
            <Carousel data ={props.pages.pic}/>
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
