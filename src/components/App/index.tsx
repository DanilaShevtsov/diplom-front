import React, { useEffect, useState } from 'react';
import { Layout, theme } from 'antd';

import Sidebar from '../Sidebar';
import TopProjects from '../TopProjects';
import { connect } from 'react-redux';
import authActions from '../../redux/auth/actions';
import companiesActions from '../../redux/companies/actions';
import { companiesLib } from '../../lib/companies';
import { Pages } from '../../enums/pages.enum'

import './index.css';

const { Header, Content, Footer } = Layout;

const App: React.FC = (props: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [page, setPage] = useState('');

  const { getCompanies } = companiesLib();

  const {
    auth,
    updateStateCompanies,
    loadAuthStorage
  } = props

  async function fetchCompanies() {
    const requestedCompanies = await getCompanies(auth.token);
    updateStateCompanies(requestedCompanies.data);
  }

  useEffect(() => {
    loadAuthStorage();
    setPage(Pages.MAIN)
  }, [])

  // useEffect(() => {
  //   if (auth.token != null) {
  //     fetchCompanies();
  //   }
  // }, [auth.token])

  return (
    <div className='app'>
      <Header className='header' style={{ background: colorBgContainer }}>
        <div
          className='logo'
        >LOGO</div>
        <div className='title'>PROJECT NAME</div>
      </Header>
      <Layout className='workspace'>
        <Sidebar/>
        <Layout>
          <Content className='content'> 
          { page === Pages.MAIN &&
            <TopProjects/>
          }
          </Content>
          <Footer className='footer'> Footer is exist. Just trust me! </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

const mapStateToProps = ({
  auth,
  companies
}: any) => ({
  auth,
  companies
});

export default connect(mapStateToProps, {
  ...authActions, 
  ...companiesActions
})(App);