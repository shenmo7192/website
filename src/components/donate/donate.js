import React, {useEffect} from 'react';
import Block from '../pages/blocks';
import Carousel from '../pages/Carousel';
function Donate({pages}) {
  useEffect(()=>{
    document.title=pages.html_title[1];
  },[pages])
  return <div style={{float:'left'}}>
            <Carousel data ={pages.pic} />
              <hr/>
            <p style={{textAlign:'center',fontSize:30}}>{pages.html_title[1]}</p>
            <hr/>

            {
                  pages.bot.map(
                    (item,idx) => <Block key={idx}
                      title={item[0]}
                      left1={item[1]}
                      img={item[2]}/>)
            }

        </div>
}

export default Donate;
