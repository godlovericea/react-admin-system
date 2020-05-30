import React from 'react';
import {useParams,useHistory} from 'react-router-dom'
import {Button} from 'antd'

export default function Detail(){
    const params = useParams()
    const history = useHistory()
    return(
        <div>
            <h1>this is detail</h1>
            <p>{params.id}</p>
            <Button onClick={()=>{
                history.push('/')
            }}>跳转首页</Button>
        </div>
  )
}

