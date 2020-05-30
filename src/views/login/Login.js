import React,{useState} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const formlayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    offset: 8,
    span: 10,
  },
};

const Login = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const [name,setName] = useState('')
  const [pwd,setPwd] = useState('')
  return (
    <div>
      <Form {...formlayout} name="basic" initialValues={{ remember: true}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="Username" name="username" 
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input maxLength={10} onChange={(event)=>{
            setName(event.target.value)
          }}/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password maxLength={20} onChange={(event)=>{
            setPwd(event.target.value)
          }}/>
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login