import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Card, Space } from 'antd';
import { AppRouter } from './components/AppRouter';
import { NavBar } from './components/NavBar';

const App = () => (
  <BrowserRouter>
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <NavBar />
      <AppRouter />
    </Space>
  </BrowserRouter>
);

export default App;
