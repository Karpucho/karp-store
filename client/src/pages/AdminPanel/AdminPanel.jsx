import React, { useContext, useState } from 'react';
import {
  Col, Card, Button, Space, Row,
} from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { Context } from '../../index';
import { PAGE_PATHS } from '../../utils/constants';
import { CreateType } from './modals/CreateType';
import { CreateBrand } from './modals/CreateBrand';
import { CreateDevice } from './modals/CreateDevice';

export const AdminPanel = () => {
  const [isOpenType, setIsOpenType] = useState(false);
  const [isOpenBrand, setIsOpenBrand] = useState(false);
  const [isOpenDevice, setIsOpenDevice] = useState(false);

  return (
    <Col>
      <Card
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}
        hoverable
      >
        <Space
          direction="vertical"
          size="middle"
        >
          <Button onClick={() => setIsOpenType(true)} type="default" size="large" danger>Добавить тип</Button>
          <Button onClick={() => setIsOpenBrand(true)} type="default" size="large" danger>Добавить бренд</Button>
          <Button onClick={() => setIsOpenDevice(true)} type="default" size="large" danger>Добавить устройство</Button>
        </Space>
      </Card>
      <CreateType isOpen={isOpenType} onClose={() => setIsOpenType(false)} />
      <CreateBrand isOpen={isOpenBrand} onClose={() => setIsOpenBrand(false)} />
      <CreateDevice isOpen={isOpenDevice} onClose={() => setIsOpenDevice(false)} />
    </Col>
  );
};
