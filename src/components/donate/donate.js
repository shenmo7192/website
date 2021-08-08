import React, {useEffect} from 'react';
import BlockDonate from '../pages/blocksdonate'
import Carousel from '../pages/Carousel';
function Donate({pages}) {
  useEffect(()=>{
    document.title=pages.html_title[1];
  },[pages])
  return <>
            <Carousel data ={pages.pic} />
              <hr/>
            <p style={{textAlign:'center',fontSize:30}}><strong>{pages.html_title[1]}</strong></p>
            <hr/>

            {
                  pages.bot.map(
                    (item,idx) => <BlockDonate key={idx}
                      title={item[0]}
                      left1={item[1]}
                      img={item[2]}/>)
            }

        </>
}

export default Donate;
