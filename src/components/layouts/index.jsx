import React from 'react';
import { Layout, Space } from 'antd';
import PropTypes from 'prop-types';

const {
  Header, Footer, Sider, Content,
} = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
function AppLayout({ children }) {
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
      size={[0, 48]}
    >
      <Layout style={{ height: '100vh' }}>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>{children}</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
}

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppLayout;
