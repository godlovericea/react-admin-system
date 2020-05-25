import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const formlayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 4,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 4,
  },
};

const Login = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form layout="horizontal" {...formlayout} name="basic" initialValues={{ remember: true}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="Username" name="username" 
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
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
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login