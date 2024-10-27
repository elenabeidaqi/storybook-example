"use client"
import customTheme from '@/theme';
import { Button as AntButton, ButtonProps, ConfigProvider } from 'antd';

interface Props extends ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ type, size, children, ...props }) => {
  return (
    <ConfigProvider  theme={customTheme}>
    <AntButton type={type} size={size} {...props}>
      {children}
    </AntButton>
    </ConfigProvider>
  );
};

export default Button;