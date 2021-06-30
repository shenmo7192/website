import React, { useState, useEffect, useRef, useCallback } from 'react';
import './animate.css';
import './Carousel.css';
import {v1 as uuid} from 'uuid'
function Carousel(props) {
  const { data = [], time } = props;
  const [active, setActive] = useState(0);
  const timer = useRef(); // 保存setInterval的ID

  // 开始轮播
  const start = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const len = data.length;
    timer.current = setInterval(() => {
      setActive((v) => {
        if (v >= len - 1) {
          return 0;
        }
        return v + 1;
      });
    }, time);
  }, [data, time]);


  useEffect(() => {
    start();
    return () => clearInterval(timer.current);
  }, [start]);
  

  return (
    <div className="wow fadeInDown Box" data-wow-duration="2s" data-wow-delay="0s">
      {
        data.map((item,index) => (
          <div
            key={uuid()}
            style={{ color: index === active ? 'red' : 'green',
                    display: index === active ? 'block': 'none'
                  }}
          >
            <div className="box1">{item}</div>
          </div>
        ))
      }
      <div style={{textAlign:"center"}}>
          {
            data.map((_item,index)=>(
                <button key={uuid()}
                    style={{
                      backgroundColor: index === active ? 'gray' :'rgba(255,255,255,0)'
                    }}
                    onClick={()=>{
                      setActive(() => {
                        return index;
                      });
                    }
                    }
                />
             )
             )
          }
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  time: 3200, // 轮播时间 ms
  data: ['第一个', '第二个', '第三个'],
};

export default Carousel;
