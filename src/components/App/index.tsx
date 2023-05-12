import React, { useEffect, useState } from 'react';
import { Layout, theme } from 'antd';

import Sidebar from '../Sidebar';
import './index.css';
import { Provider } from 'react-redux';
import store from '../../redux/store';

const { Header, Content, Footer, } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Provider store={store}>
      <div className='app'>
        <Header className='header' style={{ background: colorBgContainer }}>
          <div
            className='logo'
          >LOGO</div>
          <div className='title'>PROJECT NAME</div>
        </Header>
        <Layout className='workspace'>
          <Sidebar/>
          <Content className='content'> 
            <div className='title'>TOP 3 PROJECTS</div>
            <div className='project'></div>
            <div className='project'></div>
            <div className='project'></div>
          </Content>
        <Footer className='footer'> Footer is exist. Just trust me! </Footer>
        </Layout>
      </div>
    </Provider>
  );
};

export default App;