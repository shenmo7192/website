import React from 'react';
import Translate ,{translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Onesvg from '@site/static/img/01.svg';
import Twosvg from '@site/static/img/02.svg';
import Threesvg from '@site/static/img/03.svg';
import Foursvg from '@site/static/img/04.svg';
import Fifthsvg from '@site/static/img/05.svg';
import Sixsvg from '@site/static/img/06.svg';
import Sevensvg from '@site/static/img/07.svg';
import './content.css'
function jump(){
  window.location.href = "https://www.baidu.com";
}
function pop_video(){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}
function pop_video_close(){
  var modal = document.getElementById("myModal");
  modal.style.display="none";
  var video = document.getElementById("video");
  video.pause();
}
let title_title = <div style={{ textAlign: 'center'   }}>
                      <h1 ><Translate>Spark Store</Translate></h1>
                      <h1 className="title2"><Translate>With a touch, Get anything</Translate></h1>
                  </div>;
let title_contant = <div>

                    <div style={{ textAlign: 'center'}}>
                    <button className="button1" onClick={pop_video}><span><Translate>Our video</Translate></span></button>
                    <div id="myModal" className="modal">
                  
                    <div className="modal-content">
                      <span className="close" onClick={pop_video_close}>&times;</span>
                            <video id="video" style={{width:'100%',height:'100%'}} controls >
                            <source src={require('@site/static/img/lingmeng.mp4').default} type="video/mp4"/>
                            </video> 
                    </div>
                  
                  </div>
                    </div>
                    <div style={{ textAlign: 'center'}}>
                    <button className="button2"><span><Link to="/timeline"><Translate>Timeline</Translate></Link></span></button>
                    </div>
                    <div style={{ textAlign: 'center'}}>
                    <button onClick={jump}><span><Translate>Download</Translate></span></button>
                    </div>
                    </div>;

let title_image=<Onesvg style={{height:"100%",width:"100%"}}/>;
let a01 =<h1 className="title2" style={{ textAlign: 'center'   }}>开源社区的<font style={{color:"#3787ff"}}>自由</font></h1>;
let a02=<div style={{ textAlign: 'center' }}><p>从客户端到服务端</p><p>代码全部开源，自由修改</p></div>;
let a03=<Twosvg style={{height:"100%",width:"100%"}}/>;
let a11 =<h1 className="title2" style={{ textAlign: 'center'   }}>简约美观的<font style={{color:"#3787ff"}}>界面</font></h1>;
let a12=<div style={{textAlign:'center'}}><p>Dtk 5开发，毛玻璃侧栏</p><p>给您简约优雅的体验</p></div>;
let a13=<Threesvg style={{height:"100%",width:"100%"}}/>;
let a21 =<h1 className="title2" style={{ textAlign: 'center'   }}>丰富多样的<font style={{color:"#3787ff"}}>应用</font></h1>;
let a22=<div style={{textAlign:'center'}}><p>社区收集，真人审核上架</p><p>多而可控的应用存储</p></div>
let a23=<Foursvg style={{height:"100%",width:"100%"}}/>;
const contents = [[a01,a02,a03],
                  [a11,a12,a13],
                  [a21,a22,a23],
          ];


let b11 =<h1 className="title2" style={{ textAlign: 'center'   }}>关于<font style={{color:"#3787ff"}}>我们</font></h1>;
let b12=<>
          <p>有shenmo发起的星火商店致力于丰富linux生态，取"星星之火，可以燎原"之一，组建了星火应用商店。我们是个年轻的团队，大部分成员是00后，有小学生，中学生，大学生，来自五湖四海。</p>
          <p>尽管我们年龄不同，资历不同，但是我们努力建设linux生提啊的目标是相同的。我们有信心，也有勇气向着我们共同目标不断前进</p>
          </>
let b13=<Fifthsvg style={{height:"100%",width:"100%"}}/>;
let b21 =<h1 className="title2" style={{ textAlign: 'center'   }}>下载<font style={{color:"#3787ff"}}>中心</font></h1>;
let b22= <div>
          <div style={{ textAlign: 'center'}}>
          <button><span>sss</span></button>
          </div>
          <div style={{ textAlign: 'center'}}>
          <button><span>ssss</span></button>
          </div>
          <div style={{ textAlign: 'center'}}>
          <button><span>gridman</span></button>
          </div>
          <div style={{ textAlign: 'center'}}>
          <button><span>gridman</span></button>
          </div>
                    </div>;
let b23=<Sixsvg style={{height:"100%",width:"100%"}}/>;
const title = [ title_title,title_contant,title_image ];
const bottom = [[b11,b12,b13],
                [b21,b22,b23],
          ];
const bottom2 = [[b21,b22,b23],
                [b11,b12,b13],
          ];
let b31 =<h1 className="title2" style={{ textAlign: 'center'   }}>赞助<font style={{color:"#3787ff"}}>我们</font></h1>;
let b32= <div>
          <div style={{ textAlign: 'center'}}>
          <button><span>爱发电</span></button>
          </div>
          <div style={{ textAlign: 'center'}}>
          <button><span>收支明细</span></button>
          </div>
          </div>;
let b33=<Sevensvg style={{height:"100%",width:"100%"}}/>;
let b41 =<h1 className="title2" style={{ textAlign: 'center'   }}>加入<font style={{color:"#3787ff"}}>我们</font></h1>;
let b42= <div>
          <div style={{ textAlign: 'center'}}>
            <p>我们需要你的帮助,你会的任何技术都能帮上我们</p>
          </div>
          <div style={{ textAlign: 'center'}}>
          <button><span>qq群</span></button>
          </div>
          <div style={{ textAlign: 'center'}}>
          <button><span>投递软件</span></button>
          </div>
          </div>;
let b43=<Sevensvg style={{height:"100%",width:"100%"}}/>;
const bottom3 = [[b31,b32,b33],
                 [b41,b42,b43]
                ];
let m1=<img border="0" 
              src={require("@site/static/img/background1.png").default}
              alt="ssssss"
              style={{
                height:"100%",
                width:"100%",
              }}/>;
let m2=<img border="0" 
              src={require("@site/static/img/background2.png").default}
              alt="sss"
              style={{
                height:"100%",
                width:"100%",
              }}/>;
let m3= <a href="/Donate/">
  <img border="0" 
              src={require("@site/static/img/background3.png").default}
              alt="sssss"
              style={{
                height:"100%",
                width:"100%",
              }}/>
        </a>;
const home = translate({message:'Spark Store'});
const donate = translate({message:'Donate us'});
const time = translate({message:'Timeline'});
const home2 = translate({
                  message:'Spark Store',
              });
const donate2 = translate({message:'Donate us'});
const time2 = ["Timeline"];
const html_title = [home,donate,time];
const html_title2 = [home2,donate2,time2];
const img = [m1,m2,m3];
const timeline = [["2016","sssss"],
                  ["2017","sssss"],
                  ["2018","sssss"],
                  ]
export { contents, title,bottom,bottom2,bottom3,img,html_title,html_title2,timeline};
