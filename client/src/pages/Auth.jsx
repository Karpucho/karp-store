import React from 'react';
import {
  Button, Checkbox, Form, Input, Card,
} from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { PAGE_PATHS } from '../utils/constants';

const { Meta } = Card;

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const Auth = () => {
  const [form] = Form.useForm();
  const { pathname } = useLocation();

  const isLoginPage = pathname === PAGE_PATHS.login;

  return (
    <Card
      title={(<div style={{ textAlign: 'center' }}>{isLoginPage ? 'Авторизация' : 'Регистрация'}</div>)}
      // bordered={false}
      style={{ width: 500 }}
      hoverable
    >
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
      >
        <Form.Item
          label="Логин"
          name="username"
          rules={[
            {
              required: true,
              message: 'Введите логин',
            },
          ]}
        >
          <Input placeholder="Логин" />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Введите пароль',
            },
          ]}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>

        <Form.Item
          style={{ textAlign: 'center' }}
        >
          <Button type="primary" htmlType="submit">
            {isLoginPage ? 'Войти' : 'Регистрация'}
          </Button>
        </Form.Item>
      </Form>
      <Meta
        description={(
          isLoginPage
            ? (
              <div style={{ textAlign: 'center' }}>
                {' '}
                Нет аккаунта?
                {' '}
                <NavLink to={PAGE_PATHS.registration}>Зарегистрироваться</NavLink>
                {' '}
              </div>
            )
            : (
              <div style={{ textAlign: 'center' }}>
                {' '}
                Есть аккаунт?
                {' '}
                <NavLink to={PAGE_PATHS.login}>Войти</NavLink>
                {' '}
              </div>
            )
        )}
      />
    </Card>

  );
};
