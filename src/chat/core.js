// App.js
import React, { Component } from "react";
import "./core.css";
import { connect, sendMsg ,socket} from "../api";
class Core extends Component {
  constructor(props) {
    super(props);
    connect();
    this.state = {
      list:[],
      value: '',
      input: 'uuu',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
    socket.onmessage = msg => {
      var obj = JSON.parse(msg.data);
      this.setState({
        list:obj.sites,
      });
      console.log(this.state.list[0]);
    };

  }
  handleChange(event){
    this.setState({input:event.target.value});
  }

  handleSend() {
    sendMsg(this.state.input);
  }
  send() {
    sendMsg(this.state.input);
  }
  onKeyDown = (e) => {
      if(e.keyCode === 13){
        this.send();
        this.setState({input:''});
      }
  }

  render() {
    return (
      <div style={{width:'100%',minHeight:300,textAlign:'center'}}>
      <input id="msg" type="text" value={this.state.input} onChange={this.handleChange} onKeyDown={this.onKeyDown}/>
       <button onClick={this.handleSend}>Hit</button>
      {
        this.state.list.map(
          (item,idx) => 
        <p key={idx} className="item">{item.data}</p>
        )
      }
      </div>
    );
  }
}

export default Core;
