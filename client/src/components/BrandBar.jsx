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

export const BrandBar = observer(() => {
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
    <>
      {/* <Divider orientation="left">Default Size</Divider> */}
      <Menu
        onClick={onClick}
        // selectedKeys={[current]}
        mode="horizontal"
        // theme="dark"
        items={anus}
      />
    </>
  );
});
