// components/UserList.tsx
"use client"
import React, { useState } from "react";
import { List, Avatar, Pagination, ConfigProvider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import customTheme from "@/theme";

interface User {
  name: string;
  email: string;
}

interface UserListProps {
  users: User[];
  compact?: boolean; // Ensure 'compact' is part of the props
}

const UserList: React.FC<UserListProps> = ({ users, compact = false }) => {
  const [page, setPage] = useState(1);

  return (
    <ConfigProvider theme={customTheme}>
      <List
        itemLayout="horizontal"
        dataSource={users.slice((page - 1) * 5, page * 5)}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={!compact ? <Avatar icon={<UserOutlined />} /> : null}
              title={user.name}
              description={user.email}
            />
          </List.Item>
        )}
      />
      <Pagination
        current={page}
        pageSize={5}
        total={users.length}
        onChange={(page) => setPage(page)}
        style={{ textAlign: "center", marginTop: 20 }}
      />
    </ConfigProvider>
  );
};

export default UserList;
