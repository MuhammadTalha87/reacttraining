import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import { Card, Avatar } from 'antd';
import  './App.css'
//import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
// import ReactDom from 'react-dom'

class FirstComponent extends Component{

//     constructor(props) {
//         super(props);
//         this.clickme = this.clickme.bind(this);
//       }

clickme(){
var x = 5;
 var square = x*x;

 alert("square of "+x+ "is"+square);

   }

    render(){
        return (
            <div >
    <Card className="card"
    
    
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
      <Button  style={{margin: 15
      }} variant="contained" color="primary" onClick={this.clickme}>Click me</Button>
  </Card>
  </div>
        // <Button  variant="contained" color="primary" onClick={this.clickme}>Click me</Button>
        )
    }
}

export default FirstComponent;