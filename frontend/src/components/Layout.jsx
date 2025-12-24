import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import { 
  HomeOutlined, 
  UploadOutlined, 
  HistoryOutlined, 
  MessageOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const CustomLayout = () => {
  const navigate = useNavigate();

  // 处理退出登录
  const handleLogout = () => {
    // 清除登录状态
    localStorage.removeItem('token');
    // 跳转到登录页
    navigate('/login');
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#000' }}>
      {/* 侧边栏 */}
      <Sider 
        theme="dark" 
        style={{ backgroundColor: '#141414', borderRight: '1px solid #333' }}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div 
          style={{ 
            height: '64px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#e50914',
            borderBottom: '1px solid #333'
          }}
        >
          消防报警系统
        </div>
        <Menu 
          theme="dark" 
          mode="inline" 
          defaultSelectedKeys={['dashboard']}
          style={{ backgroundColor: '#141414', borderRight: 0 }}
        >
          <Menu.Item key="dashboard" icon={<HomeOutlined />}>
            <Link to="/dashboard">仪表盘</Link>
          </Menu.Item>
          <Menu.Item key="data-collection" icon={<UploadOutlined />}>
            <Link to="/dashboard/data-collection">数据采集</Link>
          </Menu.Item>
          <Menu.Item key="history-alerts" icon={<HistoryOutlined />}>
            <Link to="/dashboard/history-alerts">历史告警</Link>
          </Menu.Item>
          <Menu.Item key="multimodal-interaction" icon={<MessageOutlined />}>
            <Link to="/dashboard/multimodal-interaction">多模态交互</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      
      <Layout>
        {/* 顶部导航栏 */}
        <Header 
          style={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#141414',
            borderBottom: '1px solid #333',
            padding: '0 24px'
          }}
        >
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#e50914' }}>
            消防报警交互系统
          </div>
          
          <Button 
            type="primary" 
            danger
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            退出登录
          </Button>
        </Header>
        
        {/* 内容区域 */}
        <Content style={{ padding: '24px', backgroundColor: '#000' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;