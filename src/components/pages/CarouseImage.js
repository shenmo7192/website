import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
 
/* 定义参数类型 */

/* 轮播图片组件，无状态组件 */
function CarouselImage(props) {
　　/* 对象解析，参数分别对应：图片地址数组，当前展示图片索引，进场动画执行时间，出场动画执行时间，transition对应唯一key值，自动生成的包裹元素类型 */
    let {imageSrc} = props;
 
    return (
        <ul className="carousel-image">
            <CSSTransitionGroup
                component={"div"}
                transitionName={'carousel-image-item-enter'}
                transitionEnterTimeout={true}
                transitionLeaveTimeout={true}
                className={'carousel-image-item-enter'}>
                <img
                    src={imageSrc[0]}
                    key={imageSrc[0]}
                />
            </CSSTransitionGroup>
        </ul>
    );
}    
 
export default CarouselImage;
