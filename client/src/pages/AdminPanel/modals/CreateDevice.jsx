import React, { useState, useContext, useMemo } from 'react';
import {
  Input, Modal, Button, Dropdown, Form, Space, Menu,
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Context } from '../../../index';

export const CreateDevice = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const { device } = useContext(Context);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const dops = device.types.map((type) => ({
    key: type.id,
    label: type.name,
  }));

  const jops = device.brands.map((brand) => ({
    key: brand.id,
    label: brand.name,
  }));
  return (
    <Modal
      title="Добавить устройство"
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
        <Form.Item noStyle>
          <Dropdown
            menu={{ items: dops }}
            trigger={['click']}
            placement="bottom"
            arrow
          >
            <Button type="primary" size="middle">
              Выберите тип
              <DownOutlined />
            </Button>
          </Dropdown>
        </Form.Item>
        <Form.Item>
          <Dropdown
            menu={{ items: jops }}
            trigger={['click']}
            placement="bottom"
            arrow
          >
            <Button type="primary" size="middle">
              Выберите бренд
              <DownOutlined />
            </Button>
          </Dropdown>
        </Form.Item>
        <Form.Item
          label="Устройство"
          name="device"
          rules={[
            {
              required: true,
              message: 'Укажите устройство',
            },
          ]}
        >
          <Input placeholder="Укажите название устройства" />
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
