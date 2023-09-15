import React, { useContext, useState } from 'react';
import {
  Divider, List, Typography, Menu, Row, Col,
} from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined, MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { DeviceItem } from './DeviceItem';

export const DeviceList = observer(() => {
  const [current, setCurrent] = useState('alipay');
  const { device } = useContext(Context);

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const anus = device.brands.map((deviceBrand) => ({
    key: deviceBrand.name,
    // icon,
    // children,
    label: deviceBrand.name,
    // type,
  }));

  return (
    <Row gutter={[16, 16]}>
      { device.devices.map((deviceItem) => (
        <DeviceItem key={deviceItem.id} device={deviceItem} />
      ))}
    </Row>
  );
});
