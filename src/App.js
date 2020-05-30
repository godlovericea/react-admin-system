import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'antd'
import './App.css';

export default function App(){
  const [count,setCount] = useState(0)
  // setCount(){
  //   count +=1
  // }
  useEffect(()=>{
    console.log("zhixingle"+count)
    setCount(100)
  },[])
  return(
    <div>
      <h1 className="container">this is app</h1>
      <Link to="/login">去登录</Link>
      <br></br>
      <Link to="/reg">去注册</Link>
      <p>当前count次数：{count}</p>
      <Button onClick={()=>{setCount(count+1)}}>更新次数</Button>
    </div>
  )
}

// export default class App extends React.Component{
//   handleSwitch = ()=>{
//     this.props.history.push('/login')
//   }
//   render(){
//     return(
//       <div>
//         <h1 className="container">this is app</h1>
//         <Link to="/login">去登录</Link>
//         <br></br>
//         <Link to="/reg">去注册</Link>
//         <Button onClick={this.handleSwitch}>tiaozhun</Button>
//       </div>
//     )
//   }
// }

