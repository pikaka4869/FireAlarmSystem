import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 处理注册提交
  const handleRegister = async (values) => {
    setLoading(true);
    try {
      // 这里模拟注册请求
      console.log('注册信息:', values);
      // 模拟API请求延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      // 注册成功后跳转到登录页
      navigate('/login');
    } catch (error) {
      console.error('注册失败:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-background">
      <div className="login-container" style={{  }}>
        <h1 className="login-title">注册</h1>
        <Form
          name="registerForm"
          onFinish={handleRegister}
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
            name="email"
            rules={[
              { required: true, message: '请输入邮箱!' },
              { type: 'email', message: '请输入有效的邮箱地址!' }
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="邮箱"
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
          
          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: '请确认密码!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次输入的密码不一致!'));
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="确认密码"
            />
          </Form.Item>
          
          <Form.Item>
            <Form.Item name="agreement" valuePropName="checked" noStyle>
              <Checkbox style={{ color: '#ffffffff' }}>我已阅读并同意 <a href="#" style={{ color: '#0970efff' }}>服务条款</a></Checkbox>
            </Form.Item>
          </Form.Item>
          
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
            >
              注册
            </Button>
          </Form.Item>
          
          <div className="signup-link">
            已有账号? <Link to="/login">立即登录</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;