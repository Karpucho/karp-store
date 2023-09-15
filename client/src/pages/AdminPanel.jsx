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
import { Context } from '../index';
import { PAGE_PATHS } from '../utils/constants';

export const AdminPanel = () => (
  // <Row justify="space-around" align="middle">
  <Col>
    {/* <Card> */}
    <Card
      style={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        // alignItems: 'center',
      }}
      hoverable
    >
      <Space
        direction="vertical"
        size="middle"
      >
        <Button type="default" size="large" danger>Добавить тип</Button>
        <Button type="default" size="large" danger>Добавить бренд</Button>
        <Button type="default" size="large" danger>Добавить устройство</Button>
      </Space>
    </Card>
  </Col>
  // </Row>
);
