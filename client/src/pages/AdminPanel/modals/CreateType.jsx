import React, { useState } from 'react';
import {
  Input, Modal, Button, Space, Form,
} from 'antd';

export const CreateType = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Добавить тип"
      open={isOpen}
      onOk={handleOk}
      onCancel={onClose}
      okText="Добавить"
      cancelText="Закрыть"
      destroyOnClose
    >
      <Form
        name="basic"
        // initialValues={{
        //   remember: true,
        // }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        validateTrigger={['onBlur', 'onChange']}
        autoComplete="off"
        size="large"
      >
        <Form.Item
          label="Тип"
          name="type"
          rules={[
            {
              required: true,
              message: 'Укажите тип',
            },
          ]}
        >
          <Input placeholder="Тип" />
        </Form.Item>

        {/* <Form.Item
            style={{ textAlign: 'center' }}
          >
            <Button type="primary" htmlType="submit">
              Добавить
            </Button>
          </Form.Item> */}
      </Form>
    </Modal>
  );
};
