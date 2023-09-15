import React, { useContext, useState } from 'react';
import {
  Divider, List, Typography, Menu, Col, Card, Rate,
} from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined, MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { PAGE_PATHS } from '../utils/constants';
import { Context } from '../index';

export const DeviceItem = observer(({ device }) => {
  const { push } = useHistory();
  const [current, setCurrent] = useState('alipay');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Col
      span={6}
      onClick={() => push(`${PAGE_PATHS.device}/${device.id}`)}
    >
      <Card
        hoverable
        // style={{
        //   width: 240,
        // }}
        cover={<img alt="example" src={device.img} />}
      >
        <Card.Meta title={device.name} description="www.instagram.com" />
        <Rate
          defaultValue={device.rating}
          style={{ fontSize: 10 }}
          allowHalf
          disabled
        />
      </Card>
    </Col>
  );
});
