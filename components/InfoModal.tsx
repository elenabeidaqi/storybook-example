// components/InfoModal.tsx
"use client"
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

interface InfoModalProps {
  title: string;
  content: string;
}

const InfoModal: React.FC<InfoModalProps> = ({ title, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => setIsVisible(true);
  const handleOk = () => setIsVisible(false);
  const handleCancel = () => setIsVisible(false);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title={title} open={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>{content}</p>
      </Modal>
    </>
  );
};

export default InfoModal;
