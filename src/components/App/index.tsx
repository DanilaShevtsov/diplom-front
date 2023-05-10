import React, { useEffect, useState } from 'react';
import { Layout, theme } from 'antd';
import { useMetamask } from "../../web3/hooks/useMetamask"
import { Sidebar } from '../Sidebar';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    
    const { hooks, metamask } = useMetamask();
    const { useAccount, useIsActive, useIsActivating } = hooks;

    // const userAccount: string = useAccount() as string;
    const userAccount: string = "asdasd";
    
    const isActive: boolean = useIsActive();
    const isActivating: boolean = useIsActivating();

    useEffect(() => {
        if (!isActive && !isActivating) {
            metamask.connectEagerly();
        }
    })

  return (
    <Layout hasSider>
      <Sidebar userAccount={userAccount} />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ overflow: 'initial' }}>
          <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;