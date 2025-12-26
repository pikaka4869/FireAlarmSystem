import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Avatar, Dropdown, message } from 'antd';
import { 
  HomeOutlined, 
  UploadOutlined, 
  HistoryOutlined, 
  MessageOutlined, 
  LogoutOutlined,
  UserOutlined 
} from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';

const { Header, Sider, Content } = Layout;

const CustomLayout = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // 处理退出登录
  const handleLogout = () => {
    logout();
    message.success('已退出登录');
    navigate('/login');
  };

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人中心',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      danger: true,
      onClick: handleLogout,
    },
  ];

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
          <div></div>
          
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}>
              <Avatar 
                icon={<UserOutlined />} 
                style={{ backgroundColor: '#e50914', marginRight: '8px' }}
              />
              <span style={{ color: '#fff', marginRight: '8px' }}>
                {user?.username || '用户'}
              </span>
            </div>
          </Dropdown>
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