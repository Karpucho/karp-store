import React from 'react';
import {
  Col, Image, Row, Statistic, Card, Button, Space, Descriptions,
} from 'antd';
import { StarTwoTone, TrademarkCircleTwoTone, SmileOutlined } from '@ant-design/icons';

export const DevicePage = () => {
  const device = {
    id: 1, name: 'asd asd', price: 234, rating: 3, img: 'http://klublady.ru/uploads/posts/2022-02/1644629733_43-klublady-ru-p-klubnika-v-chashke-foto-47.jpg',
  };

  const description = [
    { id: 1, title: 'ыва выало ывало', description: 'oiusd87 9sdf79sf 89' },
    { id: 2, title: 'fds fsd sdf', description: 'oiusd87 9sdf79sf 89' },
    { id: 3, title: 'vmbmbnmbnm gdf dfg', description: '534bn  sdfsdf  56er' },
    { id: 4, title: 'ывg ds d dfgло', description: 'oiuyoiupudf79sf 89' },
    { id: 5, title: 'ыouuou ло', description: 'oiet e ert 9sf 89' },
  ];

  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Image
          // width={300}
            src={device.img}
          />
        </Col>
        <Col span={8}>
          <Row justify="space-around" align="middle">
            <Statistic title="Рейтинг" value={device.rating} prefix={<StarTwoTone twoToneColor="gold" style={{ fontSize: '50px' }} />} suffix="/ 5" />
          </Row>
        </Col>
        <Col span={8}>
          <Card>
            <p>Цена от:</p>
            <Space
              direction="vertical"
              size="small"
            >
              <Card.Meta
                title={(
                  <span style={{ fontSize: '30px' }}>
                    {device.price}
                    {' '}
                    <TrademarkCircleTwoTone style={{ fontSize: '20px' }} />
                  </span>
                )}
                description="стоимость за 1 кг"
              />
              {/* <Card title={device.price}> */}
              <Button
                // onClick={() => user.setIsAuth(true)}
                type="primary"
                // style={{ marginRight: '10px' }}
              >
                Добавить в корзину
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
      <Row>
        <Descriptions
          title="Характеристики"
          items={description.map((item) => ({
            key: item.id,
            label: item.title,
            children: item.description,
          }))}
          bordered
        />
      </Row>
    </>
  );
};
