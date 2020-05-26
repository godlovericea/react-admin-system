import React from 'react';
import { Router, Link, Route } from 'react-router-dom'
import logo from '@/assets/images/logo.png';
import Login from './views/login/Login'
import './App.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <img src={logo} alt="logo" className="logo"></img>
      </Header>
      <Layout>
        <Sider>
          <Router>
            <Route path="/" component={Login}>登录</Route>
          </Router>
        </Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;

