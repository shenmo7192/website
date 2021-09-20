import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Onesvg from '@site/static/img/01.svg';
import Twosvg from '@site/static/img/02.svg';
import Threesvg from '@site/static/img/03.svg';
import Foursvg from '@site/static/img/04.svg';
import Fifthsvg from '@site/static/img/05.svg';
import Sixsvg from '@site/static/img/06.svg';
//import Sevensvg from '@site/static/img/07.svg';
import Donate1svg from '@site/static/img/donate1.svg';
import Donate2svg from '@site/static/img/donate2.svg';
import './content.css'

function jump() {
  //下载地址
  window.location.href = "https://gitee.com/deepin-community-store/spark-store/releases";
}

function pop_video() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function pop_video_close() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  var video = document.getElementById("video");
  video.pause();
}

let title_title = <div style={{ textAlign: 'center' }}>
  <h1 ><Translate>Spark Store</Translate></h1>
  <h1 className="title2"><Translate>With a touch, Get anything</Translate></h1>
</div>;

let title_contant = <div>
  <div style={{ textAlign: 'center' }}>
    <button className="button1 button_main" onClick={pop_video}><span><Translate>Our video</Translate></span></button>
    <div id="myModal" className="modal">

      <div className="modal-content">
        <span className="close" onClick={pop_video_close}>&times;</span>
        <video id="video" style={{ width: '100%', height: '100%' }} controls >
          <source src={require('@site/static/img/lingmeng.mp4').default} type="video/mp4" />
        </video>
      </div>

    </div>
  </div>
  <div style={{ textAlign: 'center' }}>
    <button className="button2 button_main"><span><Link to="/timeline"><Translate>Timeline</Translate></Link></span></button>
  </div>
  <div style={{ textAlign: 'center' }}>
    <button className="button_main" onClick={jump}><span><Translate>Download</Translate></span></button>
  </div>
</div>;

let title_image = <Onesvg style={{ height: "100%", width: "100%" }} />;
let a01 = <h1 className="title2" style={{ textAlign: 'center' }}><Translate>Mainpage.bottom.1.1</Translate><font style={{ color: "#3787ff" }}><Translate>Mainpage.bottom.1.2</Translate></font></h1>;
let a02 = <div style={{ textAlign: 'center' }}><p><Translate>Mainpage.bottom.1.3</Translate></p><p><Translate>Mainpage.bottom.1.4</Translate></p></div>;
let a03 = <Twosvg style={{ height: "100%", width: "100%" }} />;
let a11 = <h1 className="title2" style={{ textAlign: 'center' }}><Translate>Mainpage.bottom.2.1</Translate><font style={{ color: "#3787ff" }}><Translate>Mainpage.bottom.2.2</Translate></font></h1>;
let a12 = <div style={{ textAlign: 'center' }}><p><Translate>Mainpage.bottom.2.3</Translate></p><p><Translate>Mainpage.bottom.2.4</Translate></p></div>;
let a13 = <Threesvg style={{ height: "100%", width: "100%" }} />;
let a21 = <h1 className="title2" style={{ textAlign: 'center' }}><Translate>Mainpage.bottom.3.1</Translate><font style={{ color: "#3787ff" }}><Translate>Mainpage.bottom.3.2</Translate></font></h1>;
let a22 = <div style={{ textAlign: 'center' }}><p><Translate>Mainpage.bottom.3.3</Translate></p><p><Translate>Mainpage.bottom.3.4</Translate></p></div>
let a23 = <Foursvg style={{ height: "100%", width: "100%" }} />;
const contents = [[a01, a02, a03],
[a11, a12, a13],
[a21, a22, a23],
];


let b11 = <h1 className="title2" style={{ textAlign: 'center' }}><Translate>About</Translate><font style={{ color: "#3787ff" }}><Translate>Us</Translate></font></h1>;
let b12 = <>
  <p><Translate>page1.1</Translate></p>
  <p><Translate>page1.2</Translate></p>
</>
let b13 = <Fifthsvg style={{ height: "100%", width: "100%" }} />;
let b21 = <h1 className="title2" style={{ textAlign: 'center' }}><Translate>Download2</Translate><font style={{ color: "#3787ff" }}><Translate>Center</Translate></font></h1>;
let b22 = <div>
  <div style={{ textAlign: 'center' }}>
    <button className="button_main" onClick={jump}><span><font style={{ color: 'blue' }}><Translate>Mainpage.download.1</Translate></font></span></button>
  </div>
  <div style={{ textAlign: 'center' }}>
    <button className="button_main" onClick={()=>{window.location.href="https://gitee.com/deepin-community-store/spark-store";}}><span><Translate>Mainpage.download.2</Translate></span></button>
  </div>
  <div style={{ textAlign: 'center' }}>
    <button className="button_main" onClick={()=>{window.location.href="https://gitee.com/deepin-community-store/spark-store";}}><span><Translate>Mainpage.download.3</Translate></span></button>
  </div>
  <div style={{ textAlign: 'center' }}>
    <button className="button_main"><span><Translate>Mainpage.download.4</Translate></span></button>
  </div>
</div>;
let b23 = <Sixsvg style={{ height: "100%", width: "100%" }} />;
const title = [title_title, title_contant, title_image];
const bottom = [[b11, b12, b13],
[b21, b22, b23],
];

// 捐助页面
let b31 = <h1 className="title2" style={{ textAlign: 'center' }}><Translate>Donatepage.1.title.1</Translate><font style={{ color: "#3787ff" }}><Translate>Donatepage.1.title.2</Translate></font></h1>;
let b32 = <div>
  <div style={{ textAlign: 'center' }}>
    <button className="button_main"><span><Translate>Donatepage.1.content.1</Translate></span></button>
  </div>
  <div style={{ textAlign: 'center' }}>
    <button className="button_main"><span><Translate>Donatepage.1.content.2</Translate></span></button>
  </div>
</div>;
let b33 = <Donate1svg style={{ height: "100%", width: "100%" }} />;
let b41 = <h1 className="title2" style={{ textAlign: 'center' }}><Translate>Donatepage.2.title.1</Translate><font style={{ color: "#3787ff" }}><Translate>Donatepage.2.title.2</Translate></font></h1>;
let b42 = <div>
  <div style={{ textAlign: 'center' }}>
    <p><Translate>Donatepage.2.content.1</Translate></p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <button className="button_main"><span><Translate>Donatepage.2.content.2</Translate></span></button>
  </div>
  <div style={{ textAlign: 'center' }}>
    <button className="button_main"><span><Translate>Donatepage.2.content.3</Translate></span></button>
  </div>
</div>;
let b43 = <Donate2svg style={{ height: "100%", width: "100%" }} />;
const bottom3 = [[b31, b32, b33],
[b41, b42, b43]
];

// 轮播图
let m1 = <Link to="/"><img border="0"
  src={require("@site/static/img/background1.png").default}
  alt="ssssss"
  style={{
    height: "100%",
    width: "100%",
  }} />
</Link>;
let m2 = <img border="0"
  src={require("@site/static/img/background2.png").default}
  alt="sss"
  style={{
    height: "100%",
    width: "100%",
  }} />;
let m3 = <Link to="/blog">
  <img border="0"
    src={require("@site/static/img/background3.png").default}
    alt="sssss"
    style={{
      height: "100%",
      width: "100%",
    }} />
</Link>;

const home = translate({ message: 'Spark Store' });
const donate = translate({ message: 'Donate us' });
const time = translate({ message: 'Timeline' });

//配置title
const html_title = [home, donate, time];

//轮播图
const img = [m1, m2, m3];

// 时间线配置
const timeline = [
  ["3.0", translate({message:"3.0Ver"})],
  ["3.1", translate({message:"3.1Ver"})],
  ["3.2", translate({message:"3.2Ver"})],
  ["3.3", translate({message:"3.3Ver"})],
]

export { contents, title, bottom, bottom3, img, html_title, timeline };
