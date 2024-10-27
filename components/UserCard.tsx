// components/UserCard.tsx
"use client"
import React from "react";
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Meta } = Card;

interface UserCardProps {
  name: string;
  description: string;
  role: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, description , role }) => (
  <Card style={{ width: 300, margin: "20px auto" }} extra={role}>
    <Meta
      avatar={<Avatar icon={<UserOutlined />} />}
      title={name}
      description={description}
    />

  </Card>
);

export default UserCard;
