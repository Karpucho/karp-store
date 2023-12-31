import React, { useContext, useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { Context } from '../index';
import { PAGE_PATHS } from '../utils/constants';

const { Header } = Layout;

const items = [
  {
    label: (
      <Button type="primary">Панель администратора</Button>
    ),
    key: 'alipay',
    // icon: <FontColorsOutlined />,
  },
  {
    label: (
      <Button type="primary">Войти</Button>
    ),
    key: 'alipay',
    // icon: <LoginOutlined />,
  },
];

const items1 = [
  {
    label: (
      <Button type="primary">Авторизация</Button>
    ),
    key: 'alipay',
    // icon: <EnterOutlined />,
  },
];

export const NavBar = observer(() => {
  const { push } = useHistory();

  const [current, setCurrent] = useState('alipay');

  const { user } = useContext(Context);

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Layout className="layout">
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      // style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className="logo" style={{ color: 'white' }}>Logo</div>
        { user.isAuth ? (
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item
              key="1"
              icon={<HomeOutlined />}
              onClick={() => push(PAGE_PATHS.admin)}
            >
              Панель администратора
            </Menu.Item>
            {/* <Menu.Item
              key="2"
              icon={<UserOutlined />}
            >
              Profile
            </Menu.Item> */}
            <Menu.Item
              // onClick={() => user.setIsAuth(false)}
              onClick={() => push(PAGE_PATHS.login)}
              key="3"
              icon={<SettingOutlined />}
            >
              Выйти
            </Menu.Item>
          </Menu>
        )
          : (
            <div>
              {/* <Button type="primary" style={{ marginRight: '10px' }}>Sign in</Button>
              <Button>Sign up</Button> */}
              <Button
                onClick={() => user.setIsAuth(true)}
                type="primary"
                style={{ marginRight: '10px' }}
              >
                Авторизация
              </Button>
            </div>
          )}
      </Header>
    </Layout>
  );
});
