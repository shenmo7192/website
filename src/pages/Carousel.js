import React, { useState, useEffect, useRef, useCallback } from 'react';
import './animate.css'
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
    <div className="wow fadeInDown" data-wow-duration="2s" data-wow-delay="0s"  style={{width:"40%",textAlign:'center',marginLeft:'30%',marginRight:'30%',marginTop:70,float:'left'}}>
      {
        data.map((item, index) => (
          <div
            key={item}
            style={{ color: index === active ? 'red' : 'green',
                    display: index === active ? 'block': 'none'
                  }}
          >
            <div>{item}</div>
          </div>
        ))
      }
    </div>
  );
}

Carousel.defaultProps = {
  time: 2000, // 轮播时间 ms
  data: ['第一个', '第二个', '第三个'],
};

export default Carousel;
