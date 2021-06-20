import React, {useEffect} from 'react';
import Block from '../pages/blocks';
import Blocktop from '../pages/blockstop';
import Carousel from '../pages/Carousel';
function Donate(props) {
  useEffect(()=>{
    document.title=props.pages.html_title[1];
  },[props])
  return <div style={{float:'left'}}>
            <Carousel data ={props.pages.pic}/>
            <p>&nbsp;</p>
              <hr/>
            <p style={{textAlign:'center',fontSize:30}}>{props.pages.html_title[1]}</p>
            <hr/>
            {
                  props.pages.content.map(
                    (item,idx) => <Blocktop key={idx}
                      title={item[0]}
                      left1={item[1]}
                      img={item[2]}/>)
            }
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
