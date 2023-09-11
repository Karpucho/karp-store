import React, { useContext, useState } from 'react';
import {
  Divider, List, Typography, Menu, Col, Card,
} from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined, MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

export const DeviceItem = observer(({ device }) => {
  const [current, setCurrent] = useState('alipay');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    // <Col span={6}>
    <Card
      hoverable
      // style={{
      //   width: 240,
      // }}
      cover={<img alt="example" src={device.img} />}
    >
      <Card.Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
    // </Col>
  );
});
