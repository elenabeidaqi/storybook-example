// components/LoginForm.tsx
"use client"
import React from 'react';
import { Form, Input, Button } from 'antd';

interface LoginFormProps {
  onLogin: (values: { username: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const onFinish = (values: { username: string; password: string }) => onLogin(values);

  return (
    <Form name="login_form" onFinish={onFinish} style={{ maxWidth: 300, margin: '0 auto' }}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
