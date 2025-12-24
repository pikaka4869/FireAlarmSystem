import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 处理登录提交
  const handleLogin = async (values) => {
    setLoading(true);
    try {
      // 这里模拟登录请求
      console.log('登录信息:', values);
      // 模拟API请求延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      // 登录成功后跳转到仪表盘
      navigate('/dashboard');
    } catch (error) {
      console.error('登录失败:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
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
                <Checkbox>记住我</Checkbox>
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