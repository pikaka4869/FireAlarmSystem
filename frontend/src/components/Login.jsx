import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  // 处理登录提交
  const handleLogin = async (values) => {
    setLoading(true);
    try {
      // 这里模拟登录请求
      console.log('登录信息:', values);
      // 模拟API请求延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 模拟登录成功
      login({
        username: values.username,
        token: 'mock-jwt-token-' + Date.now(),
      });
      
      message.success('登录成功');
      navigate(from, { replace: true });
    } catch (error) {
      console.error('登录失败:', error);
      message.error('登录失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-background">
      <div className="login-container" style={{ backgroundColor: "transparent" }}>
        <h1 className="login-title">登录</h1>
        <Form
          name="loginForm"
          onFinish={handleLogin}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          
          <Form.Item>
            <div className="login-help">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox style={{ color: '#b3b3b3' }}>记住我</Checkbox>
              </Form.Item>
              <a href="#" style={{ color: '#b3b3b3' }}>忘记密码?</a>
            </div>
          </Form.Item>
          
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
            >
              登录
            </Button>
          </Form.Item>
          
          <div className="signup-link">
            还没有账号? <Link to="/register">立即注册</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;