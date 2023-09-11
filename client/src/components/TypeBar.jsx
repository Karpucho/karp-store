import React, { useContext, useState } from 'react';
import {
  Divider, List, Typography, Menu,
} from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined, MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

export const TypeBar = observer(() => {
  const [current, setCurrent] = useState('alipay');
  const { device } = useContext(Context);

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const anus = device.types.map((deviceType) => ({
    key: deviceType.name,
    // icon,
    // children,
    label: deviceType.name,
    // type,
  }));

  return (
    <>
      {/* <Divider orientation="left">Default Size</Divider> */}
      {/* <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={device.types}
        size="small"
        renderItem={(deviceType) => (
          <List.Item onClick={() => device.setSelectedType(deviceType)}>
            <Typography.Text mark>[ITEM]</Typography.Text>
            {' '}
            {deviceType.name}
          </List.Item>
        )}
      /> */}
      <Menu
        onClick={onClick}
        // selectedKeys={[current]}
        mode="vertical"
        // theme="dark"
        items={anus}
      />
    </>
  );
});
