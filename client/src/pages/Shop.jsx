import React from 'react';
import { Col, Divider, Row } from 'antd';
import { TypeBar } from '../components/TypeBar';
import { BrandBar } from '../components/BrandBar';
import { DeviceList } from '../components/DeviceList';

export const Shop = () => {
  console.log('botva');
  return (
    <div>
      <Divider orientation="left">Каталог</Divider>
      <Row>

        <Col span={4}>
          <TypeBar />
        </Col>

        <Col span={20}>
          <BrandBar />
          <DeviceList />
        </Col>

      </Row>
    </div>
  );
};
